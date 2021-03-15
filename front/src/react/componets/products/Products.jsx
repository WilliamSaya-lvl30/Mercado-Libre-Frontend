import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Error from '../error/Error';
import FreeShipping from '../../../../assets/ic_shipping.png';
import './products.scss';

export default ({products})=>{
    return (
        <>
        <Col className='item' span={20}>

        {products.items ? 
        <>
        {products.items.map((item,i)=>(   
            <>
            <Row 
                key={item.id} 
            >
                <Link 
                to={`/items/${item.id}`} 
                className='link' 
                >
                    <Col span={16} className='row-info'>
                    <div className='img'>
                        <img src={item.picture}/>
                    </div>
                    
                    <div className='item-info'>
                        <div className="price">
                            <h3>
                                { new Intl.NumberFormat("es-AR", {style: "currency", currency: `${item.price.currency}`,minimumFractionDigits:0}).format(item.price.amount)}
                            </h3>
                            {item.price.decimals > 0 && 
                            <span className='decimal'>{item.price.decimals.toString().split(".")[1]}</span> }

                            {item.free_shipping && <span><img src={FreeShipping} className='shipping'/></span>}
                        </div>
                        <p>{item.title}</p>
                    </div>
                    </Col>
                    <Col span={4}>
                    <div className='address'>
                        <p >{item.address}</p>
                    </div>
                    </Col>
                </Link>
            </Row>
            
            <div className='border-botton' key={i}></div>
            </>
        ))}
        </> 
        :
        <Error/>
        }
        </Col>

        </>
    )
}