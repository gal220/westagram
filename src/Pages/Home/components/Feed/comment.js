import React, { useState } from 'react'
import './comment.scss'

function Comment(props) {

    const [isLiked, setIsLiked] = useState(props.data.isLiked);

    const changeImg = () => {
        setIsLiked(!isLiked)
    }

    return (
            <li className="commentSet">
                <span>
                    <span className="author">
                        {props.data.author}
                    </span>
                    <span className="content"> 
                        {props.data.content}
                    </span>
                </span>
                <img onClick={changeImg} src={isLiked ? '/img/heartRed.png':'/img/heart.png'}></img>
            </li>
    )
}

export default Comment
