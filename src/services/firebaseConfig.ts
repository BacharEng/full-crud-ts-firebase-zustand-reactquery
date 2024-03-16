import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKlzUk4frigeA3jBgOu457oHSqCeRv3nQ",
  authDomain: "cheapflightsapp-dc6bb.firebaseapp.com",
  projectId: "cheapflightsapp-dc6bb",
  storageBucket: "cheapflightsapp-dc6bb.appspot.com",
  messagingSenderId: "293754397179",
  appId: "1:293754397179:web:9865f72b51edeeb62c6b5e",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
