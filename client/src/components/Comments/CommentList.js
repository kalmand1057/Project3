import React, { Component } from 'react'

function CommentList (props) {

        return(
            <div className="comment card mb-2">
                <div className="card-body">
                {props.body}
                </div>
            </div>
        );
    
}

export default CommentList