import React from 'react';
import { Col, Skeleton, Divider } from 'antd';
import './Loading.scss';

export default ({isSingleItem})=>{
    const products = [1,2,3,4]
    return (
        <>
        <Col className='loading-products' span={20}>
           {isSingleItem ?
           <>
           <Skeleton active avatar={{shape:"square",size:680}} paragraph={{ rows: 3 }}/>
           <Divider />
           <Skeleton active paragraph={{ rows: 5 }}/>
           </>
           :
           products.map(item=>{
              if(item === 4){
                return (
                <Skeleton active avatar={{shape:"square",size:180}} paragraph={{ rows: 3 }} shape='square'/>)
              }else{
                return<>
                <Skeleton active avatar={{shape:"square",size:180}} paragraph={{ rows: 3 }} shape='square'/>
                <Divider />
               </>
              }
           })
            
           }
        </Col>
        </>
    )
}
