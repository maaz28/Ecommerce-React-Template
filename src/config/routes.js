import React from 'react';
import {
  Router,
  Route,
  HashRouter
} from 'react-router-dom';
import history from './history';
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import We from '../Components/We'
import Properties from '../Components/Properties'
import PropertySingle from '../Components/PropertySingle'


const Routing = () => {
  return (
    <HashRouter>
      <Structure/>
    </HashRouter>
  )
}

const Structure = () => {
  return( <div>
  <Main/>
  </div>
  )
}

const Main = () => {
  history.listen(_ => {
    window.scrollTo(0, 0)  
    })
  return (
    <Router history={history}>
    <div>
   <Route exact path = '/' component={Home}/>
   <Route path = '/contact' component={Contact}/>
   <Route path = '/we' component={We}/>
   <Route path = '/properties' component={Properties}/>
   <Route path = '/property-single' component={PropertySingle}/>
    </div>
    </Router> 
  )
}

export default (Routing);