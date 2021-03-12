import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col,Input,Button } from 'antd';
import "./navbar.scss";


export default ({Logo, handleSubmit, search, handleInputChange})=>{
  const { Search } = Input;
    return (
      <>
      <Row gutter={[16]} className='ant-row-nav'>
        <Col span={20}>
          <header>
            <img src={Logo} />
            <Search 
            placeholder="Nunca dejes de buscar" 
            onSearch={handleSubmit} 
            enterButton 
            bordered={false}
            value={search}
            onChange={handleInputChange}
            />
          </header>
        </Col>
    </Row>
      </>
    )
}