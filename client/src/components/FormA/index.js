import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Header } from 'semantic-ui-react';
import "./forma.css";

export default function FormA(props) {
    return (
        <div style={{textAlign: "center"}}>
            <Header as='h1' inverted>Getaway Guru</Header>
            <Header as='h2' inverted>{props.title}</Header>
            <Form>
                <Form.Group widths="equal">
                    <Form.Field>
                        <input class="box" type="text" placeholder="email" onChange={props.handleEmail}></input>
                    </Form.Field>
                    <Form.Field>
                        <input class="box" type="password" placeholder="password" onChange={props.handlePassword}></input>
                    </Form.Field>
                </Form.Group>
            </Form>
            <br />
            <Button inverted type="button" onClick={props.handleSubmit}>{props.submit}</Button>
        </div>
    )
}
