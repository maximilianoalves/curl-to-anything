import React, { Component } from 'react';
//elements
import Header from '../../elements/Header';
import Form from '../../elements/Form';

import './styles.css'

class Home extends Component {
  render(){
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Home;