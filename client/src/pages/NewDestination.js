import React, { useState } from "react";
import Axios from "axios";
import Wiki from "../components/Wiki";
import { Button, Form, Header, Grid, Container } from 'semantic-ui-react'

const styles = {
  heading: {
      margin: 100
  },
  big: {
      fontSize: 35,
      textShadow: "0 0 3px #696969"
  },
  fix: {
    height: "100vh"
  },
  box: {
    opacity: 0.7
  },
  color: {
    color: "white"
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
   <div style={styles.heading}>
     <Grid centered columns={2}>
      <Container>
        <Header as='h1' inverted style={styles.big}>Set Your Destination!</Header>
        <Form>
          <Form.Field>
            <input 
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={handleSetCity}
            style={styles.box}
            />
          </Form.Field>
        </Form>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label style={styles.color}>Month</label>
              <input type="number" name="month" placeHolder="MM" onChange={handleSetDate} style={styles.box}/>
            </Form.Field>
            <Form.Field>
              <label style={styles.color}>Day</label>
              <input type="number" name="day" placeHolder="DD" onChange={handleSetDate} style={styles.box}/>
            </Form.Field>
            <Form.Field>
              <label style={styles.color}>Year</label>
              <input type="number" name="year" placeHolder="YYYY" onChange={handleSetDate} style={styles.box}/>
            </Form.Field>
          </Form.Group>
        </Form>
        <Button inverted onClick={handleSetDestination}>Bon Voyage!</Button>
        <Header as='h2' inverted style={styles.big}>Research Your Destination Here!</Header>
        <Wiki />
      </Container>
     </Grid>
   </div>
 );
}

export default NewDestination;