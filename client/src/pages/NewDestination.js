import React, { useState } from "react";
import axios from "axios";
import Conditions from "../components/Conditions/Conditions";
import Wiki from "../components/Wiki";
import { Button, Form, Header, Grid, Container } from 'semantic-ui-react'

const styles = {
  heading: {
      margin: 120
  },
  big: {
      fontSize: 35,
      textShadow: "0 0 3px #696969"
  }
}

const NewDestination = () => {

    let [city, setCity] = useState("");
    let [responseObj, setResponseObj] = useState({});

    const cities = ["Paris", "Los Angleles", "Berlin", "Spain"];

    function getDestination (e) {
        e.preventDefault();
        axios.request(cities).then(function (response) {
            console.log(response.data);
            setResponseObj(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    };

 return (
   <div className="App">
     <Grid centered columns={2}>
     <Container style={styles.heading}>
     <Header as='h1' inverted>Select Your Destination!</Header>
    <Form onSubmit={getDestination}>
    <Form.Field>
      <input 
      type="text"
      placeholder="Enter City"
      maxLength="50"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
    </Form.Field>
    <Button inverted type='submit'>Bon Voyage!</Button>
  </Form>
  <Header as='h2' inverted>Research Your Destination Here!</Header>
    <Conditions
      responseObj={responseObj}/>
    <Wiki>
    </Wiki>
    </Container>
     </Grid>
   </div>
 );
}

export default NewDestination;