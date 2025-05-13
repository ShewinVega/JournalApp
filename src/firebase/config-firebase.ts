import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  // apiKey: import.meta.env.REACT_APP_API_KEY,
  // authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  // projectId: import.meta.env.REACT_APP_PROJECT_ID,
  // storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: import.meta.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyBmGzcTWRROqzM0uluNtz3n-90ZpcIxPIU",
  authDomain: "journalapp-37fcc.firebaseapp.com",
  projectId: "journalapp-37fcc",
  storageBucket: "journalapp-37fcc.firebasestorage.app",
  messagingSenderId: "618753435709",
  appId: "1:618753435709:web:a9de983c082a1ddcef6254",
  measurementId: "G-HQS2EKZ1MD",
};

// Initialize Firebase
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth: Auth = getAuth(firebaseApp);
export const firebaseDB: Firestore = getFirestore();
