import React, {useEffect}  from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { ProductsAtom, loadingAtom, errorAtom } from '../../recoil';
import Products from '../componets/products/Products';
import Breadcrumb from '../componets/Breadcrumb/Breadcrumb';
import Loading from '../componets/loading/Loading';


export default ()=>{
const [products,setProducts]=useRecoilState(ProductsAtom);
const [loading,setLoading] = useRecoilState(loadingAtom);
const [error,setError] = useRecoilState(errorAtom);

const useQuery = new URLSearchParams(useLocation().search);
const query = useQuery.get("search");
const autor ={
    name: 'williams',
    lastName: 'Saya'
}

useEffect(()=>{
        setLoading(true)
        axios.get(`/api/items?search=${query}`, {params:autor})
        .then(item =>{
            setProducts(item.data)
            setLoading(false)
        })
        .catch(e=>{
            setProducts('')
            setError(e.message)
            console.log(e)
            setLoading(false)
        })    
},[query]);

    return(
        <>
        <Breadcrumb
        categories={products.categories}
        />
        {loading ?
        <Loading
        isSingleItem={false}
        />
        :
        <Products 
        products={products}
        />}       
        </>
    )
}