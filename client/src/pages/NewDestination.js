import React, { useState } from "react";
import axios from "axios";
import Conditions from "../components/Conditions/Conditions";
import { Button, Container, Grid, Header, Form } from 'semantic-ui-react';


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
  //  <div className="App">
  //    <header className="App-header">
  //      <h1>Select your destination!</h1>
  //    </header>
  //    <main>
  //    <form onSubmit={getDestination}>
  //               <input
  //                   type="text"
  //                   placeholder="Enter City"
  //                   maxLength="50"
  //                   value={city}
  //                   onChange={(e) => setCity(e.target.value)}
  //                   />
  //               <button inverted type="submit">Bon Voyage</button>
  //           </form>
  //           <Conditions
  //               responseObj={responseObj}
  //               />
  //    </main>
  //  </div>


    <div>
      <Grid centered columns={2}>
        <Container style={styles.heading}>
          <Header as='h1' inverted style={styles.big}>Select your destination</Header>
          <Form>
                <Form.Group widths="equal">
                    <Form.Field>
                        <input
                        type="text"
                        placeholder="Enter City"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Field>
                    <Button inverted type="submit">Bon Voyage</Button>
                </Form.Group>
            </Form>
        </Container>
      </Grid>
    </div>
 );
}

export default NewDestination;