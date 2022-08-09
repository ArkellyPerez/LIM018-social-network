import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';

// import {
//   getFirestore, // getFirestore nos permite conectarnos con firestore
//   collection, // collection nos permite creae una tabla o coleccion de datos en firestore
//   addDoc, // Nos permite indicar a FireStre que es lo que quiero hacer (guardar, actualizar,etc)
//   getDocs, // Permite traer datos de Firestore
// } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDBqQpWxgLbRQOupFwXsIOZfFUfRuKNfnk',
  authDomain: 'travelers-lim018.firebaseapp.com',
  projectId: 'travelers-lim018',
  storageBucket: 'travelers-lim018.appspot.com',
  messagingSenderId: '928230572150',
  appId: '1:928230572150:web:4030d235fab2ba0663df57',
  measurementId: 'G-8Z6J1FH9JZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Autentication auth

export const database = getDatabase(app);

export const auth = getAuth();
export {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
};
export { set, ref, update };