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

const CurrentlyLogged = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted style={styles.big}>You are Currently Logged In!</Header>
        <Header as='h3' inverted style={styles.shadow}>You may logout or redirect</Header>
        <Link to="/welcome">
            <button className="ui inverted button">Welcome</button>
        </Link>
        <Link to="/destinations">
            <button className="ui inverted button">Destination</button>
        </Link>
        <Link to="/">
            <button className="ui inverted button">Home</button>
        </Link>
        </Container>
    </Grid>
    </div>
);

export default CurrentlyLogged;