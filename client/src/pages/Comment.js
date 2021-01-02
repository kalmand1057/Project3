import React, { Component } from 'react'
import axios from "axios";
import CommentAdd from "../components/Comments/CommentAdd";
import CommentList from "../components/Comments/CommentList";

export default function Comment () {

    const Array = ["Hello", "Good bye"]
    return(
        <div>
            {Array.map(comment => (
                <CommentList body={comment}/> 
            ))}
            <CommentAdd handleCommentSubmit={console.log("yes")}/>
        </div>
    );
    
}


