import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage'; // Importa getStorage
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdmB9gSUPLZ1MH0tLEx6t6bwso6Ew2ea0",
  authDomain: "estrella-michelin.firebaseapp.com",
  projectId: "estrella-michelin",
  storageBucket: "estrella-michelin.firebasestorage.app",
  messagingSenderId: "674471265453",
  appId: "1:674471265453:web:73adba3fb5c1fc0c5af224",
  measurementId: "G-V6BC1L3JS5"
};

// Inicializar Firebase App
const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Inicializar Storage
const storage = getStorage(app); // Inicializa storage con la app
const db = getFirestore(app);

export { app, auth, storage, db }; // Exporta storage
