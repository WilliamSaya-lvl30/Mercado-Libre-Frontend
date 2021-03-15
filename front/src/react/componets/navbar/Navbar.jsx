import React from 'react';
import { Row, Col,Input } from 'antd';
import "./navbar.scss";


export default ({Logo, handleSubmit, search, handleInputChange})=>{
  const { Search } = Input;
    return (
      <>
      <Row gutter={[16]} className='ant-row-nav'>
        <Col span={20} className='col-search'>
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