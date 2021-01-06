import React, { useState } from "react";
import FormA from "../components/FormA";
import Axios from "axios";
import { Container, Grid, Header} from 'semantic-ui-react';


const styles = {
  heading: {
      margin: 130
  },
  fix: {
    height: "100vh",
  }
}

export default function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "/api/login",
        }).then(window.location.replace("/welcome"))
      };
    return (
      <div style={styles.fix}>
        <Grid centered columns={2}>
          <Container style={styles.heading}>
            <FormA 
            title="Log In"
            submit="Log in"
            handleEmail={(e) => setLoginUsername(e.target.value)}
            handlePassword={(e) => setLoginPassword(e.target.value)}
            handleSubmit={login}
            />
            <Header as='h4' inverted style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></Header>
          </Container>
        </Grid>    
      </div>
    )
}
