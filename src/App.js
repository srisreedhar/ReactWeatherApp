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

  getDatafromAPI = async(event)=>{
    event.preventDefault();
    const city= event.target.elements.cityForm.value;
    const country=event.target.elements.formCountry.value;
    // secure API key before pushing
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&mode=json&units=metric&APPID=2d80cf7142a085e6c34f383205d35118`;
    const apiresponse= await fetch(apiUrl);
    const jsondata= await apiresponse.json();
    console.log(jsondata);
    this.setState({
      temparature:jsondata.list[0].temp.day,
      maxTemp:jsondata.list[0].temp.max,
      minTemp:jsondata.list[0].temp.min,
      description:jsondata.list[0].weather[0].description,
      city:jsondata.city.name,
      mapLon:jsondata.city.coord.lon,
      mapLat:jsondata.city.coord.lat,
      country:jsondata.city.country,
      error:"API Error - check Inputs provided"
    })
  }


  render() { 
    return (
      <Fragment>
            <Navbar/>
            <UserInput getData={this.getDatafromAPI} />
            <WeatherToday/>
      </Fragment>
            );
  }
}
 
export default HomePage;
