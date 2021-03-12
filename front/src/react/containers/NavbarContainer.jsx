import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from 'axios'
import Logo from '../../../assets/Logo_ML.png'
import {ProductsAtom} from '../../recoil'
import  Navbar from '../componets/navbar/Navbar'


export default function () {
    const [search,SetSearch]=useState("")
    const [products,setProducts]=useRecoilState(ProductsAtom)
    const history = useHistory();
    const autor ={
      name: 'williams',
      lastName: 'Saya'
    }


    const handleInputChange = (event) => {
      console.log("click",event.target.value)
        SetSearch(event.target.value)
    };
    
    const handleSubmit = (e) => {
        SetSearch("")
        axios.get(`/api/items?search=${search}`, {params:autor})
        .then(res => res.data)
        .then(items =>{
            setProducts(items)
            history.push(`/items?search=${search}`)
        })
        .catch(e=>console.log(e))
    };
  return (
    <Navbar 
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      search={search}
      Logo={Logo}
    />
  );
}