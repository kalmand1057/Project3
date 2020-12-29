import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';
import "./forma.css";

// const styles = {
//     input: {
//         backgroundColor: "white",
//     }
// }

export default function FormA(props) {
    return (
        <div style={{textAlign: "center"}}>
            <Header as='h1' inverted>Getaway Guru</Header>
            <Header as='h2' inverted>{props.title}</Header>
            <Form>
                <Form.Group widths="equal">
                    <Form.Field fluid className="input">
                        <input placeholder="email" onChange={props.handleEmail}></input>
                    </Form.Field>
                    <Form.Field fluid>
                    <input placeholder="password" onChange={props.handlePassword}></input>
                    </Form.Field>
                </Form.Group>
            </Form>
            {/* <input type="text" placeholder="email" onChange={props.handleEmail}></input>
            <input type="password" placeholder="password" onChange={props.handlePassword}></input> */}
            <br />
            <Button inverted type="button" onClick={props.handleSubmit}>{props.submit}</Button>
        </div>
    )
}

{/* <Form>
            <Form.Group>
              <Form.Input 
              fluid
              id='subcomponent-shorthand-input-username'
              handleEmail={(e) => setLoginUsername(e.target.value)}
              placeholder='Email'
              />
              <Form.Input 
              fluid
              id='subcomponent-shorthand-input-password'
              handlePassword={(e) => setLoginPassword(e.target.value)}
              placeholder='Password'
              />
            </Form.Group>
</Form>
<Button inverted submit="Log in" handleSubmit={login}>Login</Button> */}