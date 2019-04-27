import React, { Component } from 'react';
import Home from './Components/Home';
//CSS
import './css/bootstrap.css';
import './css/style.css';
import Contact from './Components/Contact';
import We from './Components/We';
import Properties from './Components/Properties';
import PropertySingle from './Components/PropertySingle';
// import './icons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PropertySingle/>
      </div>
    );
  }
}

export default App;
