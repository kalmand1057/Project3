import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';


const styles = {
    heading: {
        margin: 130
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    },
    fix: {
        height: "100vh",
    }
}

const Welcome = () => (
    <div style={styles.fix}>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted style={styles.big}>Welcome</Header>
        <Button inverted href="/destinations">Current Trip</Button>
        <Button inverted href="/newdestination">New Destination</Button>
        </Container>
    </Grid>
    </div>
);

export default Welcome;