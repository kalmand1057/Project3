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
    },
    space: {
        margin: "20px"
    }
}

const Welcome = () => (
    <div style={styles.fix}>
        <Grid centered columns={2}>
            <Container style={styles.heading}>
                <Header as='h1' inverted style={styles.big}>Welcome</Header>
                <div style={styles.space}>
                    <Button inverted href="/destinations">Current Trip</Button>
                </div>
                <div style={styles.space}>
                    <Button inverted href="/newdestination">New Destination</Button>
                </div>
            </Container>
        </Grid>
    </div>
);

export default Welcome;