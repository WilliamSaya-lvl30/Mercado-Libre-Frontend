import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import { RecoilRoot } from "recoil";
import App from "./react/App"

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('app')
);
