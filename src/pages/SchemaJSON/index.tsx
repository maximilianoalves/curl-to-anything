import React, { Component } from 'react';
//elements
import Header from '../../elements/Header';
import SchemaJsonForm from '../../elements/SchemaJsonForm';

import './styles.css'


class SchemaJSON extends Component {
  render(){
    return (
      <div>
        <Header />
        <SchemaJsonForm />
      </div>
    );
  }
}

export default SchemaJSON;