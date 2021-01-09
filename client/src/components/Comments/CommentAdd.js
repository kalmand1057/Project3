import React from "react";
import { Button } from 'semantic-ui-react';


function CommentAdd(props) {
    
    return ( 

    <div>
        <div className="card mt-4 mb-3 box">
            <div className="card-body">
                <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                    onChange={props.handleOnChange}></textarea>
            </div>
        </div>
        <div>
            <Button inverted className="btn btn-primary mr-3" onClick={props.handleClick}>Comment</Button>
        </div>
    </div>
    );
}

export default CommentAdd;