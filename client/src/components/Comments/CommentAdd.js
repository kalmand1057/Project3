import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Header } from 'semantic-ui-react';


function CommentAdd(props) {
    const { handleCommentSubmit } = props;
    let comment ="";
    
    const [comment, setComment] = useState([]);

    useEffect(() => {
    API.getComment()
    .then(res => 
        setComments(res.data)
      )
      .catch(err => console.log(err));
  }, [])


  function handleDeleteSubmit(id) {
    API.deleteComment(id)

    setBooks(comment.filter((comment) => {
        return comment._id != id;
    }))
  }


    return ( 

        <div>
            <div className="card mt-4 mb-3">
                <Header className="card-header"><strong>Comments</strong></Header>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                    onChange={event => comment = event.target.value}></textarea>
                </div>
            </div>
        <div>
            <Button className="btn btn-primary mr-3" onClick={event => handleCommentSubmit(comment)}>Comment</Button>
            <Button className="btn btn-warning">Close issue</Button>
        </div>
        </div>
    );
}

export default CommentAdd;