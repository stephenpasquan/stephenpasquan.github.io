import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { HomePage } from './Components/homePage/homePage';
import { LocalGuide } from './Components/LocalGuide/LocalGuide';
import { ContactUs } from './Components/ContactUs/ContactUs';
import {AboutUs} from './Components/AboutUs/AboutUs';
function App() {
  return (
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/contactus" component={ContactUs}/>
    <Route exact path="/aboutus" component={AboutUs}/>
    <Route exact path="/localguide" component={LocalGuide}/>
    </div>
  );
}

export default App;
