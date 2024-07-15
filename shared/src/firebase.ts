import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAYR67AId8f9agCjCyjpoq-O1wkoRzatCc',
  authDomain: 'nextauth-82907.firebaseapp.com',
  projectId: 'nextauth-82907',
  storageBucket: 'nextauth-82907.appspot.com',
  messagingSenderId: '933879188367',
  appId: '1:933879188367:web:b91eb879f83eec5b1359fa',
  measurementId: 'G-4TCJ7H4G3N'
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
