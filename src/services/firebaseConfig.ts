import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvDGOeDMlc-phT291-alxRqIVMWgWAQKE",
  authDomain: "adopt-a-meow.firebaseapp.com",
  projectId: "adopt-a-meow",
  storageBucket: "adopt-a-meow.appspot.com",
  messagingSenderId: "813285627452",
  appId: "1:813285627452:web:0560082b05003d84ae1539",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
