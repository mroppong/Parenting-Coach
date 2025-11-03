const admin = require('firebase-admin');
const fs = require('fs');

// --- CONFIGURATION ---
// 1. Path to your service account key
const serviceAccount = require('./serviceAccountKey.json');

// 2. Your project's databaseURL (Find this in Project Settings)
const databaseURL = 'https://parentingcoach.firebaseio.com';
// ---------------------

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL
  });
} catch (error) {
  if (error.code === 'app/duplicate-app') {
    console.log('Firebase app already initialized.');
  } else {
    console.error('Error initializing Firebase Admin:', error);
    process.exit(1);
  }
}

const db = admin.firestore();

// Load the seed data from your JSON file
let seedData;
try {
  seedData = JSON.parse(fs.readFileSync('seed.json', 'utf8'));
} catch (error) {
  console.error('Error reading or parsing seed.json:', error);
  process.exit(1);
}

/**
 * Imports the path-keyed data into Firestore.
 */
async function importData() {
  console.log('Starting data import...');

  // Use a Batch Write for efficiency
  const batch = db.batch();
  let operations = 0;

  for (const path in seedData) {
    if (Object.prototype.hasOwnProperty.call(seedData, path)) {
      const docRef = db.doc(path);
      const data = seedData[path];

      console.log(`  -> Preparing: ${path}`);
      batch.set(docRef, data);
      operations++;

      // Firestore batches have a 500-operation limit
      if (operations >= 500) {
        console.log('Committing batch of 500 operations...');
        await batch.commit();
        batch = db.batch(); // Start a new batch
        operations = 0;
      }
    }
  }

  // Commit any remaining operations
  if (operations > 0) {
    console.log(`Committing final batch of ${operations} operations...`);
    try {
      await batch.commit();
      console.log('---');
      console.log('✅ All data imported successfully!');
    } catch (error) {
      console.error('Error committing final batch:', error);
    }
  } else {
    console.log('No data to import.');
  }
}

// Run the import function
importData().catch(console.error);