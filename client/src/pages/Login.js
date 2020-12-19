import React from "react";
import { Button, Container, Grid, Header, Form} from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 250
    },
    html: {
        backgroundImage: "url(/moped.jpeg)",
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // width: '101vw',
        height: '102vh'
    }
}

export default function Login(props) {
    return (
        <div style={styles.html}>
        <Grid centered columns={2}>
            <Container style={styles.heading}>
                <Header as='h1' inverted>Getaway Guru</Header>
                <Header as='h3' inverted>{props.title}</Header>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-email'
                            // label='email'
                            placeholder='Email'
                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-password'
                            // label='password'
                            placeholder='Password'
                        />
                    </Form.Group>
                </Form>
                <Button inverted>{props.submit}</Button>
            </Container>
        </Grid>
        </div>
    )
}
