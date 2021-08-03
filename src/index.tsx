import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SchemaJSON from './pages/SchemaJSON';
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <Route path={["/", "/curl-to-anything"]} exact={true} component={App} />
        <Route path="/schema-json" component={SchemaJSON} />
    </HashRouter>,
  document.getElementById('root')
);
