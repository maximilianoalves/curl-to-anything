import React, { Component } from 'react';
//elements
import Header from '../../elements/Header';
import MyForm from '../../elements/MyForm';

import './styles.css'

class Home extends Component {
  render(){
    return (
      <div>
        <Header />
        <MyForm />
      </div>
    );
  }
}

export default Home;