import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 230
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    },
    shadow: {
        textShadow: "0 0 3px #696969"
    }
}

const WrongLogin = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted style={styles.big}>You are Not Logged In!</Header>
        <Header as='h3' inverted style={styles.shadow}>Your Email or Password may be incorrect</Header>
        <Link to="/login">
            <button className="ui inverted button">Log in</button>
        </Link>
        <Link to="/register">
            <button className="ui inverted button">Register</button>
        </Link>
        <Link to="/">
            <button className="ui inverted button">Home</button>
        </Link>
        </Container>
    </Grid>
    </div>
);

export default WrongLogin;