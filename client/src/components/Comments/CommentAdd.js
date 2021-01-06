import React, { useState } from "react";
import { Button, Header } from 'semantic-ui-react';

function CommentAdd(props) {
    
    return ( 

        <div>
            <div className="card mt-4 mb-3">
                <Header className="card-header"><strong>Comments</strong></Header>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                    onChange={props.handleOnChange}></textarea>
                </div>
            </div>
        <div>
            <Button className="btn btn-primary mr-3" onClick={props.handleClick}>Comment</Button>
            <Button className="btn btn-warning">Close issue</Button>
        </div>
        </div>
    );
}

export default CommentAdd;