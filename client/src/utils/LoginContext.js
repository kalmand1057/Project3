import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext()
export default function LoginContext({...props}) {
    const [user, setUser] = useState();
    useEffect(() => {
        Axios.get("http://localhost:3001/api/user", {withCredentials: true})
        .then(res => {
            setUser(res.data)
        })
    }, [])
    return (
        <myContext.Provider value={user} {...props}></myContext.Provider>
    )
}