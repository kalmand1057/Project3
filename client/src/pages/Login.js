import React, { useState } from "react";
import Form from "../components/Form";
import Axios from "axios";

export default function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:3001/api/login",
        }).then((res) => console.log(res));
      };
    return (
        <div>
            <Form 
            title="Log In"
            submit="Log in"
            handleEmail={(e) => setLoginUsername(e.target.value)}
            handlePassword={(e) => setLoginPassword(e.target.value)}
            handleSubmit={login}
            />
            <p style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></p>
         </div>
    )
}
