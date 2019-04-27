import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from './Banner';
import Content from './Content';
import FullWidthSection from './FullWidthSection';
import Container from './Container';
import Blog from './Blog';
import FlipBanner from './FlipBanner';

class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <Banner/>
          <Content/>
          <FullWidthSection/>
          <Container/>
          <Blog/>
          <FlipBanner/>
          <Footer/>
      </div>
    );
  }
}

export default Home;
