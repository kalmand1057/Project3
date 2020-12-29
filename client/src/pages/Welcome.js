import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
<<<<<<< HEAD
        margin: 120
=======
        margin: 250
>>>>>>> main
    }
}

const Welcome = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Welcome</Header>
        <Button inverted>Current Trip</Button>
        <Button inverted>Saved Destinations</Button>
<<<<<<< HEAD
        <Button inverted href="/newdestination">New Destination</Button>
=======
        <Link to="/search">
        <Button inverted>New Destination</Button>
        </Link>
>>>>>>> main
        </Container>
    </Grid>
    </div>
);

export default Welcome;