import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherToday from './components/WeatherToday';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <WeatherToday/>
    </div>

  );
}

export default App;
