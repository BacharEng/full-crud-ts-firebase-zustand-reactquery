import { create } from "zustand";

export interface Cat {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
}

interface CatStore {
  cats: Cat[];
  setCats: (cats: Cat[]) => void;
  addCat: (cat: Cat) => void;
  updateCat: (id: string, update: Partial<Cat>) => void;
  deleteCat: (id: string) => void;
}

export const useCatStore = create<CatStore>((set) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
  addCat: (cat) => set((state) => ({ cats: [...state.cats, cat] })),
  updateCat: (id, update) =>
    set((state) => ({
      cats: state.cats.map((cat) =>
        cat.id === id ? { ...cat, ...update } : cat
      ),
    })),
  deleteCat: (id) =>
    set((state) => ({ cats: state.cats.filter((cat) => cat.id !== id) })),
}));
