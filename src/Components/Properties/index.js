import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Search from './Search';
import Container from './Container';

class Properties extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <Search/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default Properties;
