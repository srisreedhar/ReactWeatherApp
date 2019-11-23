import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherToday from './components/WeatherToday';
import UserInput from './components/UserInputForm';
import Navbar from './components/Navbar';


class HomePage extends Component {

  state={
    temparature:0,
    maxTemp:0,
    minTemp:0,
    description:"Cannot Find Description, No data !",
    city:"Hyderabad",
    mapLon:undefined,
    mapLat:undefined,
    country:"India",
    error:"API Error - check Inputs provided"
  }

  getData = async(event)=>{
    event.preventDefault();
    const city= event.target.elements.formCity.value;
    
  }

  
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
