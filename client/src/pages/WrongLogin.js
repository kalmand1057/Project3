import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 250
    },
    // html: {
    //     backgroundImage: "url(/sunsetriver.jpeg)",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     width: '101vw',
    //     height: '102vh'
    // }
    //W3SCHOOLS How to full page image
    //W3SCHOOLS How to half page image
}

const WrongLogin = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>You are Not Logged In!</Header>
        <Header as='h3' inverted>Your Email or Password may be incorrect</Header>
        <Link to="/login">
            <Button inverted>Log in</Button>
        </Link>
        <Link to="/register">
            <Button inverted>Register</Button>
        </Link>
        <Link to="/">
            <Button inverted>Home</Button>
        </Link>
        </Container>
    </Grid>
    </div>
);

export default WrongLogin;