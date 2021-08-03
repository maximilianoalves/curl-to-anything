import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SchemaJSON from './pages/SchemaJSON';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path={["/curl-to-anything"]} exact={true} component={App} />
        <Route path="/curl-to-anything/schema-json" component={SchemaJSON} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
