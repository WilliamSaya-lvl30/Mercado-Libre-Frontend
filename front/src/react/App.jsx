import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../stylesheet/stylesheet.scss";
import { Layout, Breadcrumb, Row, Col } from 'antd';
import NavbarContainer from '../react/containers/NavbarContainer';
import ProductsContainer from '../react/containers/ProductsContainer'

export default function () {
  const { Content } = Layout;

  return (
    <>
    <Layout className="layout">
        <NavbarContainer/>
      <Content className='contenedor'>
        <Row gutter={[16]}>
          <Col span={20}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Col> 
        </Row>
        <Row gutter={[16]}>
          <Switch>
            <Route path="/items/:id" component={()=><h1>single product</h1>}/>
            <Route path="/items" component={ProductsContainer}/>
          </Switch>
        </Row>
      </Content>
    </Layout>

      {/* <NavbarContainer/>
      <div className='contenedor'>
        <Switch>
          <Route path="/items/:id" component={()=><h1>single product</h1>}/>
          <Route path="/items" component={()=><h1>all products</h1>}/>
        </Switch>
      </div> */}
    </>  
  );
}