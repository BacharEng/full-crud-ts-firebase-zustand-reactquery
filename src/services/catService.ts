import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
} from "firebase/firestore";
import { Cat } from "../store/useCatStore";

const usersCollectionRef = collection(db, "cats");

export const createCat = async (
  cat: Omit<Cat, "id">
): Promise<DocumentData> => {
  return await addDoc(usersCollectionRef, cat);
};

export const fetchCats = async (): Promise<Cat[]> => {
  const snapshot = await getDocs(usersCollectionRef);
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Cat;
    return { ...data, id: doc.id };
  });
};

export const updateCat = async (
  id: string,
  update: Partial<Omit<Cat, "id">>
): Promise<void> => {
  const userDoc = doc(db, "cats", id);
  await updateDoc(userDoc, update);
};

export const deleteCat = async (id: string): Promise<void> => {
  const userDoc = doc(db, "cats", id);
  await deleteDoc(userDoc);
};
