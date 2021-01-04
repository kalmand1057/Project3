import React, { Component } from 'react'
import axios from "axios";
import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {id: 1, body: "This is my first comment"},
                {id: 2, body: "This is my second comment"}
            ]
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(data) {
        const postData = {
            comment: data
        };
        axios.post("/api/user", postData).then((response) => {

            console.log("handleCommentSubmit", data);

            let comments = this.state.comments;
            comments.unshift({
                id: comments.lenth + 1,
                body: response.data.Comment
            });
            this.setState({ comments: comments });
        });
    }
    renderComments() {
        const { comments } = this.state;
        return comments.map(comment => {
            const { id, body } = comment;
            return (
                <CommentList key={id} body={body}/>
                // <div className="comment" key={id}>{body}</div>
            );
        })
    }

    render() {
        return(
            <div>
                {this.renderComments()}
                <CommentAdd handleCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

export default Comment

