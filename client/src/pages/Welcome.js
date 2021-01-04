import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Header } from 'semantic-ui-react';


const styles = {
    heading: {
        margin: 150
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    },
    html: {
        height: "100vh",
    }
}

const Welcome = () => (
    <div style={styles.html}>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted style={styles.big}>Welcome</Header>
        <Button inverted href="/destinations">Current Trip</Button>
        <Button inverted>Saved Destinations</Button>
        <Button inverted href="/newdestination">New Destination</Button>
        </Container>
    </Grid>
    </div>
);

export default Welcome;