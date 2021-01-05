import React, { Component } from 'react'
import axios from "axios";
import CommentAdd from "../components/Comments/CommentAdd";
import CommentList from "../components/Comments/CommentList";
import { Header } from 'semantic-ui-react';

const styles = {
    heading: {
        margin: 130
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    },
    // html: {
    //     height: "100vh",
    // },
    box: {
        opacity: 0.7
    }
}

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


