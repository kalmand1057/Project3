import React from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 250
    },
}

const Search = () => (
    <div style={styles.html}>
    <Grid centered columns={2}>
        <Container style={styles.heading}>
        <Header as='h1' inverted>Search</Header>
        <Button inverted>submit</Button>
        </Container>
    </Grid>
    </div>
);

export default Search;