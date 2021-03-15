import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import Error from '../error/Error';
import './SingleProduct.scss';

export default ({sigleProduct, id})=>{
    
    return (
        <>    
        <Col className='single-item' span={20}>
            {sigleProduct ? 
            <><Row gutter={[16]} wrap={false} className='single-row'>
                <Col flex='712px' className='single-img'>
                    <img src={sigleProduct.picture}/>
                </Col>
                <Col flex='auto' className='single-info'>
                    <div className="sold-quantity">
                        <p>{sigleProduct.condition} - {sigleProduct.sold_quantity} vendidos</p>
                    </div>
                    <h2>{sigleProduct.title}</h2>
                    <div className="single-item-price">
                        <h1>{ new Intl.NumberFormat("es-AR", {style: "currency", currency: `${sigleProduct.price.currency}`,minimumFractionDigits:0}).format(sigleProduct.price.amount)}</h1>
                        {sigleProduct.price.decimals > 0 && 
                                <span className='decimal'>{sigleProduct.price.decimals.toString().split(".")[1]}</span> }
                    </div>
                    <Button type="primary" >Comprar</Button>
                </Col>
            </Row>
            <Row className='single-row description'>
                <Col flex='680px' className='single-item-description'>
                    <h2>Descripción del producto</h2>
                    <p>{sigleProduct.description}</p>
                </Col>
            </Row></>
            :
            <Error/>
            }
        </Col>
        </>
    )
}