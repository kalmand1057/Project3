import React from "react";

export default function Form(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Getaway Guru</h1>
            <h3>{props.title}</h3>
            <input type="text" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <br />
            <button type="button">{props.submit}</button>
        </div>
    )
}