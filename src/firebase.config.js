import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // ✅ Import this

const firebaseConfig = {
    apiKey: "AIzaSyATq7P20gWGdOoo7sc4eDmPD6rbVtB0Hmo",
    authDomain: "myapp-43f21.firebaseapp.com",
    projectId: "myapp-43f21",
    storageBucket: "myapp-43f21.appspot.com",
    messagingSenderId: "671526569140",
    appId: "1:671526569140:web:48bda2b9889d923bea03e1",
    measurementId: "G-ZPYL5345N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // ✅ Now it will work

// Firebase Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
