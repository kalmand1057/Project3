import React from 'react'
import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";

export default function Comment (props) {

    const Array = ["Hello", "Good bye"]
    return(
        <div>
            {props.comments.map(comment => (
                <CommentList body={comment}/> 
            ))}
            <CommentAdd handleCommentSubmit={props.handleSubmit}/>
        </div>
    );
    
}