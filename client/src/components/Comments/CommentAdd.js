import React, { useState } from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    box: {
        opacity: 0.7
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969",
        textAlign: "centered"
    },
}

function CommentAdd(props) {
    const { handleCommentSubmit } = props;

    const [comment, setComment] = useState("");
    
    return ( 

        <div>
            <Header as='h1' inverted dividing style={styles.big}>Comments</Header>
            <div className="card mt-4 mb-3 box">
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                    onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>
            </div>
        <div>
            <Button inverted className="btn btn-primary mr-3" onClick={event => {
                handleCommentSubmit(comment);
                setComment("");
            }}>Comment</Button>
            <Button inverted className="btn btn-warning">Close issue</Button>
        </div>
        </div>
    );
}

export default CommentAdd;