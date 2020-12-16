import React from "react";

export default function Form(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Getaway Guru</h1>
            <h3>{props.title}</h3>
            <input type="text" placeholder="email" onChange={props.handleEmail}></input>
            <input type="password" placeholder="password" onChange={props.handlePassword}></input>
            <br />
            <button type="button" onClick={props.handleSubmit}>{props.submit}</button>
        </div>
    )
}