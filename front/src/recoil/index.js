import { atom } from "recoil";

export const ProductsAtom = atom({
  key: "Items",
  default: '',
});

export const selectProductAtom = atom({
    key: "SelectProduct",
    default: '',
});

export const loadingAtom = atom({
  key: "Loading",
  default: false
})

export const errorAtom = atom({
  key: "Error",
  default: ''
})
