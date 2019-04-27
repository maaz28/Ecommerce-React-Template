import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import TitleBar from './TitleBar';
import Description from './Description';
import Container from './Container';

class We extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <TitleBar value = "Nosotros"/>
          <Description/>
          <TitleBar value = "Equipo"/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default We;
