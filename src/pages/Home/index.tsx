import React, { Component } from 'react';
//elements
import Header from '../../elements/Header';

import './styles.css'
import CurlvertForm from '../../elements/CurlvertForm';

class Home extends Component {

  render(){
    return (
      <div>
        <Header />
        <CurlvertForm />
      </div>
    );
  }
}

export default Home;