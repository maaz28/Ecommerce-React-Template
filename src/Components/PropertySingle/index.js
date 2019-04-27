import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Title from './Title';
import Slider from './Slider';
import Container from './Container';

class PropertySingle extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <Title/>
          <Slider/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default PropertySingle;
