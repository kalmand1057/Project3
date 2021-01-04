import React, { useState } from "react";
import FormA from "../components/FormA";
import Axios from "axios";
import { Container, Grid } from 'semantic-ui-react';

const styles = {
  heading: {
      margin: 190
  },
  html: {
    height: "100vh",
  }
}

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "/api/register",
        }).then((res) => {console.log(res); window.location.replace("/login");});
      };
    return (
      <div style={styles.html}>
        <Grid centered columns={2}>
          <Container style={styles.heading}>
            <FormA 
              title="Sign Up"
              submit= "Sign up"
              handleEmail={(e) => setRegisterUsername(e.target.value)}
              handlePassword={(e) => setRegisterPassword(e.target.value)}
              handleSubmit={register}
            />
          </Container>
        </Grid>
      </div>
    )
}