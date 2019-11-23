import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherToday from './components/WeatherToday';
import UserInput from './components/UserInputForm';
import Navbar from './components/Navbar';


class HomePage extends Component {
  
  render() { 
    return (
      <Fragment>
            <Navbar/>
            <UserInput />
            <WeatherToday/>
      </Fragment>
            );
  }
}
 
export default HomePage;
