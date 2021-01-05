import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Comments from "../components/Comments"

export default function Comment () {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/api/user",
          }).then((res) => {
              const user = res.data.username
              Axios({
                method: "GET",
                withCredentials: true,
                url: `/api/${user}`
            })
            .then((result) => {
                setComments(result.data.comment)
            })
          })
      }

    const handleNewComment = () => {
        console.log("whatever")
    }
    const Array = ["Hello", "Good bye"]
    return(
        <Comments comments={comments} handleSubmit={handleNewComment}/>
    );
    
}