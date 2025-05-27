export default {
  // Cloudinary variables
  cloudUrl: import.meta.env.VITE_CLOUD_URL,
  bucketName: import.meta.env.VITE_CLOUD_BUCKET,
  apikey: import.meta.env.VITE_CLOUD_API_KEY,
  apiSecret: import.meta.env.VITE_CLOUD_API_SECRET,
  cloudName: import.meta.env.VITE_CLOUD_NAME,

  // Firebase variables
  firebaseApiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
