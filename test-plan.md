# Parenting Coach App Test Plan

## Objective
To manually test the core functionality of the Parenting Coach web application, ensuring that the user onboarding flow works as expected and that data is correctly stored in the Firestore database.

## Prerequisites
1.  The application must be running and accessible via the preview URL.
2.  You must have access to the project's Firebase console to verify data in the Firestore database.

---

## Test Cases

### Test Case 1: Application Initial Load
*   **Description:** Verifies that the application loads the default screen correctly.
*   **Steps:**
    1.  Open the application using the preview URL.
*   **Expected Result:** The splash screen is displayed, showing the app logo and initial welcome text.

### Test Case 2: Start Onboarding
*   **Description:** Verifies that the user can start the onboarding process from the splash screen.
*   **Steps:**
    1.  On the splash screen, click the "Get Started" button.
*   **Expected Result:** The application navigates to the first step of the "Pulse Check" questionnaire.

### Test Case 3: Pulse Check Form Navigation
*   **Description:** Verifies the multi-step navigation within the Pulse Check form.
*   **Steps:**
    1.  Click the "Next" button to move forward through the questions and steps.
    2.  Click the "Previous" button to move backward.
    3.  Continue until you reach the final step.
*   **Expected Result:** The form should smoothly transition between questions and steps without errors. The step indicators at the top should update correctly.

### Test Case 4: Pulse Check Form Submission and Data Persistence
*   **Description:** Verifies that the form data is successfully submitted and stored in Firestore.
*   **Steps:**
    1.  Fill out all the questions in the Pulse Check questionnaire.
    2.  On the final step, click the "Finish" button.
    3.  After the form is submitted, open your Firebase project and navigate to the **Firestore Database**.
    4.  Look for a collection named `pulse_checks`.
    5.  Inspect the most recently added document in the collection.
*   **Expected Result:**
    1.  After clicking "Finish," the application should navigate to the "onboarding/child-count" screen.
    2.  A `pulse_checks` collection should exist in Firestore.
    3.  The new document should contain the exact answers you selected in the form, along with a `createdAt` timestamp.

### Test Case 5: Dynamic Child Profile Setup
*   **Description:** Verifies that the user can set the number of children and create profiles for them dynamically.
*   **Steps:**
    1.  On the "child-count" screen, select the number of children.
    2.  The application should navigate to the dynamic child profile creation screen.
    3.  Verify that the correct number of child profile forms are displayed.
    4.  For each child, fill out the profile information (name and age).
    5.  Click the "Finish" button.
    6.  After the profiles are submitted, open your Firebase project and navigate to the **Firestore Database**.
    7.  Look for a collection named `child_profiles`.
    8.  Inspect the most recently added document in the collection.
*   **Expected Result:**
    1.  The application should navigate to the chat screen after finishing the child profile setup.
    2.  A `child_profiles` collection should exist in Firestore.
    3.  The new document should contain an array of profiles with the exact information you entered, along with a `createdAt` timestamp.

### Test Case 6: General Navigation
*   **Description:** Verifies that all primary routes in the application are accessible.
*   **Steps:**
    1.  Manually change the URL hash to navigate to the following pages:
        *   `#/chat`
        *   `#/menu`
        *   `#/onboarding/parent-profile`
*   **Expected Result:** Each page should load correctly without any console errors.
