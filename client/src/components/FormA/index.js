import React from "react";
import { Button, Form, Header } from 'semantic-ui-react';
import "./forma.css";

const styles = {
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    }
}

export default function FormA(props) {
    return (
        <div style={{textAlign: "center"}}>
            <Header as='h1' inverted style={styles.big}>{props.title}</Header>
            <Form>
                <Form.Group widths="equal">
                    <Form.Field>
                        <input className="box" type="text" placeholder="email" onChange={props.handleEmail}></input>
                    </Form.Field>

                    <Form.Field fluid>
                        <input className="box" placeholder="password" type="password" onChange={props.handlePassword}></input>
                    </Form.Field>
                </Form.Group>
            </Form>
            <br />
            <Button inverted type="button" onClick={props.handleSubmit}>{props.submit}</Button>
        </div>
    )
}
