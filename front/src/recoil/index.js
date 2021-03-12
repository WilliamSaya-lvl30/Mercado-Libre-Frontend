import { atom } from "recoil";

export const ProductsAtom = atom({
  key: "items",
  default: '',
});


export const selectProductAtom = atom({
    key: "SelectProduct",
    default: '',
});
