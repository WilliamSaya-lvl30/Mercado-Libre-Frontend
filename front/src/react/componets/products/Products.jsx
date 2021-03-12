import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import './products.scss'

export default ({products})=>{
    return (
        <>
        <Col className='item' span={20}>

        {products.items ? 
        <>
        {products.items.map(item=>(   
            <>
            <Link 
                to={`/items/${item.id}`} 
                key={item.id} 
                className='link' 
            >
                <Row>
                    <Col span={12}>
                    <img src={item.picture}/>
                    </Col>
                    <Col span={12}>
                    <div className='price'>
                        <h3>{ new Intl.NumberFormat("es-AR", {style: "currency", currency: `${item.price.currency}`}).format(item.price.amount)}</h3>
                        <p>{item.title}</p>
                    </div>
                    <div className='address'>
                        <p >{item.address}</p>
                    </div>
                    </Col>
                </Row>
            </Link>
            <div className='border-botton'></div>
            </>
        ))}
        </> 
        :
        <div></div>
        }
        </Col>

        </>
    )
}