import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 250
    }
    // html: {
    //     backgroundImage: "url(/sunsetriver.jpeg)",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     width: '101vw',
    //     height: '102vh'
    // }
}

const Home = () => (
    <div>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Start your adventure with us.</Header>
        <Button inverted href="/register">START HERE</Button>
        </Container>
    </Grid>
    </div>
);

export default Home;
