import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Comments from "../components/Comments"
import { Container, Grid, Header } from 'semantic-ui-react';

const styles = {
    heading: {
        marginTop: 140
    },
    fix: {
        height: "100vh",
      },
      big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969",
        textAlign: "centered"
    },
}

export default function Comment () {
    const [newComment, setNewComment] = useState()
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    }, [])

    const handleSetComment = (e) => {
        setNewComment(e.target.value)
    }
    const getComments = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/api/user",
        }).then((res) => {
              const user = res.data.username
              Axios({
                method: "GET",
                withCredentials: true,
                url: `/api/${user}`
            })
            .then((result) => {
                setComments(result.data.comment)
            })
        })
    }

    const handleNewComment = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `/api/user`
        }).then((user) => {
            Axios.put(`/api/${user.data.username}`, {
                "comment": [...comments, newComment]
            }).then((result) => getComments())
        })
    }
    return(
        <div style={styles.fix}>
            <Grid centered>
                <Container centered style={styles.heading}>
                    <Header as='h1' inverted dividing style={styles.big}>Itinerary/Notes</Header>
                    <Comments comments={comments} handleComment={handleSetComment} handleSubmit={handleNewComment}/>
                </Container>
            </Grid>
        </div>
    );
    
}