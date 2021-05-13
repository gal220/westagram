import React, { useState }from 'react'
import './iconSet.scss'

function IconSet() {

const [isLiked, setIsLiked] = useState(false);

const clickEvent = () => {
    setIsLiked(!isLiked);
}

    return (
        <div className="iconWrap">
            <span className="iconSet">
                <img onClick={clickEvent} src={isLiked ? "/img/heartRed.png":"/img/heart.png"}></img>
                <img src="/img/comment.png"></img>
                <img src="/img/dm.png"></img>
            </span>
            <span className="saveIcon"><img src="/img/save.png" style={{marginLeft:'auto'}}></img></span>
        </div>
    )
}

export default IconSet
