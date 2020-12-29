import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import Wiki from "../components/Wiki"

const styles = {
    heading: {
        margin: 120
    }
}

const Welcome = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Welcome</Header>
        <Button inverted>Current Trip</Button>
        <Button inverted>Saved Destinations</Button>
        <Button inverted href="/newdestination">New Destination</Button>
        <Wiki></Wiki>
        </Container>
    </Grid>
    </div>
);

export default Welcome;