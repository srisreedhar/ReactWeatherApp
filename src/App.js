import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherToday from './components/WeatherToday';
import Navbar from './components/Navbar';


class HomePage extends Component {
  
  render() { 
    return (
      <Fragment>
            <Navbar/>
            <WeatherToday/>
      </Fragment>
            );
  }
}
 
export default HomePage;
