import React from 'react';
import { Breadcrumb, Col } from 'antd';
import './breadcrumb.scss'

export default ({categories})=>{
    const topCategories = categories ? categories.slice(0,5) : [];
    return (
          <Col span={20} className='breadcrumb'>
            <Breadcrumb separator=">">
                {topCategories && topCategories.map(category =>{
                    return <Breadcrumb.Item>{category}</Breadcrumb.Item>
                })}
            </Breadcrumb>
          </Col> 
    )
}
