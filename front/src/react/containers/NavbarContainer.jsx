import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import Logo from '../../../assets/Logo_ML.png';
import { loadingAtom } from '../../recoil';
import  Navbar from '../componets/navbar/Navbar';


export default function () {
    const [search,SetSearch] = useState("");
    const [loading,setLoading] = useRecoilState(loadingAtom);
    const history = useHistory();


    const handleInputChange = (event) => {
        SetSearch(event.target.value)
    };
    
    const handleSubmit = (e) => {
        SetSearch("")
        setLoading(true)
        history.push(`/items?search=${search}`)
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