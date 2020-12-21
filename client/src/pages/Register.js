import React, { useState } from "react";
import Form from "../components/Form";
import Axios from "axios";

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "/api/register",
        }).then((res) => {console.log(res); window.location.replace("/login");});
      };
    return (
        <div>
            <Form 
              title="Sign Up"
              submit= "Sign up"
              handleEmail={(e) => setRegisterUsername(e.target.value)}
              handlePassword={(e) => setRegisterPassword(e.target.value)}
              handleSubmit={register}
              />
         </div>
    )
}