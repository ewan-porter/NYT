// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAtvpNnn3G9nAfLWuEtaE-648zD_NfXzXw',

  authDomain: 'bestsellers-503b0.firebaseapp.com',

  projectId: 'bestsellers-503b0',

  storageBucket: 'bestsellers-503b0.appspot.com',

  messagingSenderId: '455449069033',

  appId: '1:455449069033:web:c4283cf7ecc9f0803cb778',

  measurementId: 'G-MTRTNKWQQ8',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
