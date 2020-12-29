import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import {useSpring, animated } from 'react-spring'

const styles = {
    heading: {
        margin: 250
    },
    big: {
        fontSize: 60
    }
}

export default function Home() {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: { mass: 1, tension: 170, friction: 180 },
    })

    return (
    <div>
        <Grid centered columns={2}>
            <Container style={styles.heading}>
            <animated.div style={props}>
                <Header as='h1' inverted style={styles.big}>Start your adventure with us.</Header>
            </animated.div>
                <Button inverted href="/register">START HERE</Button>
            </Container>
        </Grid>
    </div>
    )
};
