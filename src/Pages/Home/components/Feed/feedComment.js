import React from 'react'
import './feedComment.scss'

function FeedComment(props) {
    return (
        <div className="feedCommentWrap">
            <span>
                <span style={{fontWeight:'bold', marginRight:'5px'}}>{props.userName}</span>
                <span>{props.comment}</span>
            </span>
            <span className="heartIcon"><img src="/img/heart.png"></img></span>
        </div>
    )
}

export default FeedComment
