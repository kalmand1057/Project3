import React, { useState } from "react";
import Axios from "axios";
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
  const [date, setDate] = useState({month: 0, day: 0, year: 0});

  const handleSetCity = (e) => {
    setCity(e.target.value)
  }

  const handleSetDestination = (e) => {
    e.preventDefault();
    Axios({
      method: "GET",
      withCredentials: true,
      url: `/api/user`
    }).then((user) => {
        Axios.put(`/api/${user.data.username}`, {
            "city": city,
            "date": date
        }).then((result) => window.location.replace("/destinations"))
    })
  }

  const handleSetDate = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
        setDate({...date, [name]: 0});
    } else {
        setDate({...date, [name]: value});
    }
  }

 return (
   <div>
     <Grid centered columns={2}>
      <Container style={styles.heading}>
        <Header as='h1' inverted>Select Your Destination!</Header>
        <Form onSubmit={handleSetDestination}>
          <Form.Field>
            <input 
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={handleSetCity}
            />
          </Form.Field>
          <Button inverted type='submit'>Bon Voyage!</Button>
        </Form>
        <div>
            <input type="number" name="month" placeHolder="00" onChange={handleSetDate}/>
            <input type="number" name="day" placeHolder="00" onChange={handleSetDate}/>
            <input type="number" name="year" placeHolder="0000" onChange={handleSetDate}/>
        </div>
        <Header as='h2' inverted>Research Your Destination Here!</Header>
        <Wiki>
        </Wiki>
      </Container>
     </Grid>
   </div>
 );
}

export default NewDestination;