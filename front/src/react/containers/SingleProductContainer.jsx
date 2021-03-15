import React, {useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { selectProductAtom, loadingAtom, errorAtom } from '../../recoil';
import  SingleProduct from '../componets/singleProduct/SingleProduct';
import Breadcrumb from '../componets/Breadcrumb/Breadcrumb';
import Loading from '../componets/loading/Loading';



export default ()=>{
    const [sigleProduct,setSingleProduct]=useRecoilState(selectProductAtom);
    const [loading,setLoading] = useRecoilState(loadingAtom);
    const [error,setError] = useRecoilState(errorAtom);

    const { id } = useParams();
    const autor ={
        name: 'williams',
        lastName: 'Saya'
    }
    const categories = sigleProduct.categories ? sigleProduct.categories : [];

    useEffect(()=>{
        setLoading(true)
        axios.get(`/api/items/${id}`, {params:autor})
        .then(item =>{
            setLoading(false)
            setSingleProduct(item.data)
        })
        .catch(e=>{
            setSingleProduct('')
            setError(e.message)
            setLoading(false)
            console.log(e)
        })
    },[]);

    return(
        <>
        <Breadcrumb
        categories={categories}
        />
        {loading ?
        <Loading
        isSingleItem={true}
        />
        :
        <SingleProduct
        sigleProduct={sigleProduct.item}
        id={id}
        />
        }     
        </>
    )
}