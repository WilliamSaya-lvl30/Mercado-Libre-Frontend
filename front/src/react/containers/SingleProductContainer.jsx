import React from 'react';
import { useRecoilState } from "recoil";
import {selectProductsAtom} from '../../recoil'


export default ()=>{
    const [sigleProduct,setSingleProduct]=useRecoilState(selectProductsAtom)
    console.log(sigleProduct)

    return(
        <>
        <div className='sigle-item'>
            <img src={sigleProduct.picture} alt="" srcset=""/>
            <div className='info'>
                <p className="address">{sigleProduct.address}</p>
                <p>{sigleProduct.title}</p>
                {sigleProduct.price && <h3>{ new Intl.NumberFormat("es-AR", {style: "currency", currency: `${sigleProduct.price.currency}`}).format(sigleProduct.price.amount)}</h3>}
                <button>Comprar</button>      
            </div>  
        </div>
        </>
    )
}