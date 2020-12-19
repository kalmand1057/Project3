import React, { useContext } from "react";
import { myContext } from "../utils/LoginContext";

export default function Home() {
    const ctx = useContext(myContext);
    console.log(ctx)
    return (
        <div>
            <p>Home</p>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
        </div>
    )
}