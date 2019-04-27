import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import MapContainer from './MapContainer';
import Container from './Container';

class Contact extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <MapContainer/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default Contact;
