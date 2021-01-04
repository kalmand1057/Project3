import React, { useState } from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

function CommentAdd(props) {
    const { handleCommentSubmit } = props;

    const [comment, setComment] = useState("");
    
    return ( 

        <div>
            <div className="card mt-4 mb-3">
                <Header className="card-header"><strong>Comments</strong></Header>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                    onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>
            </div>
        <div>
            <Button className="btn btn-primary mr-3" onClick={event => {
                handleCommentSubmit(comment);
                setComment("");
            }}>Comment</Button>
            <Button className="btn btn-warning">Close issue</Button>
        </div>
        </div>
    );
}

export default CommentAdd;