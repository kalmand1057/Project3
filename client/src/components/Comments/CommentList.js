import React from 'react'

const styles = {
    box: {
        opacity: 0.7,
    },
    font: {
        color: "black"
    },
}

function CommentList (props) {

    return(
        <div style={styles.box}>
            <div className="comment card mb-2">
                <div className="card-body" style={styles.font}>
                    {props.body}
                </div>
            </div>
        </div>
    );
    
}

export default CommentList