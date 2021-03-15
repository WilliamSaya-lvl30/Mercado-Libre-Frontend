import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import "../stylesheet/stylesheet.scss";
import { Layout, Row } from 'antd';
import NavbarContainer from '../react/containers/NavbarContainer';
import ProductsContainer from '../react/containers/ProductsContainer';
import SingleProducContainer from '../react/containers/SingleProductContainer'

export default function () {
  const { Content } = Layout;

  return (
    <>
    <Layout className="layout">
        <NavbarContainer/>
      <Content className='contenedor'>
        <Row gutter={[16]}>
          <Switch>
            <Route path="/items/:id" component={SingleProducContainer}/>
            <Route path="/items" component={ProductsContainer}/>
            <Redirect from="/" to="/" />
          </Switch>
        </Row>
      </Content>
    </Layout>
    </>  
  );
}