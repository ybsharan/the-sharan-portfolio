// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeSTCezhTeY_c5e7h0GU9qht0n_IIo45g',
  authDomain: 'sharan-portfolio.firebaseapp.com',
  projectId: 'sharan-portfolio',
  storageBucket: 'sharan-portfolio.appspot.com',
  messagingSenderId: '757066416280',
  appId: '1:757066416280:web:8e26e80fb88bda6b9ed0ed',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
