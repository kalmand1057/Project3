import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 70
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

const Welcome = () => (
    <div style={styles.html}>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Welcome</Header>
        <Button inverted>Current Trip</Button>
        <Button inverted>Saved Destinations</Button>
        <Button inverted>New Destination</Button>
        </Container>
    </Grid>
    <iframe src="https://en.wikipedia.org/wiki/Main_Page" height="500" width="700" title="Wiki"></iframe>
    </div>
);

export default Welcome;