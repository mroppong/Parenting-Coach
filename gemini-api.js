// gemini-api.js

let model;

try {
  // Initialize the Vertex AI service
  const vertexAI = firebase.vertexAI();

  // Initialize the Gemini model
  model = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-preview-0514',
  });
} catch (error) {
  console.error("Error initializing Gemini:", error);
}

async function getPersonalizedResponse(history, userMessage) {
  if (!model) {
    return "The AI model is not available. Please check the console for errors.";
  }

  // --- 1. Fetch Family Data from Firestore ---
  // Note: Using a hardcoded user ID. This should be replaced with the
  // authenticated user's ID in a real application.
  const userId = 'demoUser_001';
  let familyData = {};

  try {
    // Fetch parent profile
    const userDoc = await db.collection('users').doc(userId).get();
    if (userDoc.exists) {
      familyData.parentProfile = userDoc.data().parentProfile;
    }

    // Fetch child profiles
    // Note: This assumes a simple query. In a real app, you might query
    // by a userId field in the child_profiles documents.
    const childProfilesSnapshot = await db.collection('child_profiles').limit(1).get();
    if (!childProfilesSnapshot.empty) {
      familyData.children = childProfilesSnapshot.docs[0].data().profiles;
    }
  } catch (error) {
    console.error("Error fetching family data:", error);
    // Continue without personalization if Firestore fetch fails
  }

  // --- 2. Construct the System Prompt ---
  const systemPrompt = `You are an expert parenting coach. Your goal is to provide supportive, insightful, and practical advice.

    Here is the family data you are working with:
    ${JSON.stringify(familyData, null, 2)}

    Based on this data, provide a personalized response to the user's message. Be warm, empathetic, and encouraging.`;

  // --- 3. Call the Gemini API ---
  const chat = model.startChat({
    history: history,
    systemInstruction: systemPrompt,
  });

  try {
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response from Gemini:", error);
    return "I'm having a little trouble thinking right now. Please try again in a moment.";
  }
}
