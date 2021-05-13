import React from 'react'
import './likeCount.scss'

function LikeCount(props) {
    return (
        <div className="likeCountWrap">
            <img className="likeProfile" src={props.profileImg}></img>
            <span style={{fontWeight:'bold'}}>{props.userName}</span>
            <span>님 외 {props.count}명이 좋아합니다.</span>
        </div>
    )
}

export default LikeCount
