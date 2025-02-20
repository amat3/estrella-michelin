
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdmB9gSUPLZ1MH0tLEx6t6bwso6Ew2ea0",
  authDomain: "estrella-michelin.firebaseapp.com",
  projectId: "estrella-michelin",
  storageBucket: "estrella-michelin.firebasestorage.app",
  messagingSenderId: "674471265453",
  appId: "1:674471265453:web:73adba3fb5c1fc0c5af224",
  measurementId: "G-V6BC1L3JS5"
};

export const initFirebase = initializeApp(firebaseConfig);