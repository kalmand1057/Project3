import React, { Component } from 'react'
import axios from "axios";
import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";

export default function Comment (props) {

    return(
        <div>
            {props.comments.map(comment => (
                <CommentList body={comment}/> 
            ))}
            <CommentAdd handleOnChange={props.handleComment} handleClick={props.handleSubmit}/>
        </div>
    );
    
}