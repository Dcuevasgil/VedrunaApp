// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Importa el servicio de autenticación

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCczdCLRwOCoZixrxYG8SS-a7E9c7wql-k",
  authDomain: "vedrunaapp-8c1f9.firebaseapp.com",
  projectId: "vedrunaapp-8c1f9",
  storageBucket: "vedrunaapp-8c1f9.firebasestorage.app",
  messagingSenderId: "405103830991",
  appId: "1:405103830991:web:e559b1543cd9aeac22d4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);  // Obtiene el objeto de autenticación

export { app, auth };  // Exporta tanto el app como el auth