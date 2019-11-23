import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Label,FormGroup, Input, Container} from 'reactstrap';

// gets current day's weather from the api

class weatherToday extends Component {
    
    render() { 
        return ( 
            <Container>
            <h4>Hello from weatherToday Component</h4>
            </Container>
         );
    }
}
 
export default weatherToday;