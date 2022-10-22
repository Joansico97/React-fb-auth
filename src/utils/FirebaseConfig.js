import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCI6guErZMh4ZuWrNAPaWBiIKyBv3IyvXU',
  authDomain: 'react-fb-auth-38427.firebaseapp.com',
  projectId: 'react-fb-auth-38427',
  storageBucket: 'react-fb-auth-38427.appspot.com',
  messagingSenderId: '475392655314',
  appId: '1:475392655314:web:d69716e5446baf1bb8120b',
};

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const FirebaseDB = getFirestore(app);
