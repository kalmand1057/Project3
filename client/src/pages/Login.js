import React, { useState } from "react";
import Form from "../components/Form";
import Axios from "axios";
import { Button, Container, Grid, Header} from 'semantic-ui-react';

const styles = {
  heading: {
      margin: 200
  },
  html: {
      backgroundImage: "url(/sunsetriver.jpeg)",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '101vw',
      height: '102vh'
  }
  //W3SCHOOLS How to full page image
  //W3SCHOOLS How to half page image
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
        }).then((res) => console.log(res));
      };
    return (
      <div style={styles.html}>
        <Grid centered columns={2}>
        <Container style={styles.heading}>
            <Form 
            title="Log In"
            submit="Log in"
            handleEmail={(e) => setLoginUsername(e.target.value)}
            handlePassword={(e) => setLoginPassword(e.target.value)}
            handleSubmit={login}
            />
            <p style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></p>
            </Container>
        </Grid>    
      </div>
    )
}
