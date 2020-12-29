import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 250
    }
    //W3SCHOOLS How to full page image
    //W3SCHOOLS How to half page image
}

const Welcome = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Welcome</Header>
        <Button inverted>Current Trip</Button>
        <Button inverted>Saved Destinations</Button>
        <Button inverted>New Destination</Button>
        </Container>
    </Grid>
    </div>
);

export default Welcome;