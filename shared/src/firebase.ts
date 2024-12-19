import { getAnalytics } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

if (!getApps.length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  });
}

// Initialize Firebase
const auth = getAuth();
let analytics;

if (typeof window !== 'undefined') {
  analytics = getAnalytics();
}

export { analytics, auth, signInWithCustomToken };
