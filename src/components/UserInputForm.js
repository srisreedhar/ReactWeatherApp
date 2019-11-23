import React, { Component } from 'react';
import {Form,Label,Button,FormGroup, Input, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// this for captures user input for city / country / zipcode

class UserInput extends Component {
    render() { 
        return ( 
            
            <Form onSubmit={this.props.getData}>
                <Container>
                <FormGroup>
                    <Label for="Enter City"> City </Label> 
                    <Input type="text" name="cityForm" id="formCity"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Enter Country"> Country </Label> 
                    <Input type="text" name="countryForm" id="formCountry"></Input>
                </FormGroup>
                <FormGroup>
                    <Button>
                        Submit
                    </Button>
                </FormGroup>
                </Container>
            </Form>
            
         );
    }
}
 
export default UserInput;