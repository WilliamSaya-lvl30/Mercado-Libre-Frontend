import React from 'react';
import { useRecoilState } from "recoil";
import {ProductsAtom} from '../../recoil'
import Products from '../componets/products/Products'


export default ()=>{
const [products,setProducts]=useRecoilState(ProductsAtom)
    return(
        <>
            <Products 
            products={products}
            />
        </>
    )
}