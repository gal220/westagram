import React from 'react'
import './profileImgSmall.scss'
import { useHistory } from 'react-router-dom'

function ProfileImgSmall(props) {

    const history = useHistory();

    const goToProfile = () => {
        history.push(`/profile/${props.userId}`)
    }

    return (
        <div className="profileImgSmallWrap" onClick={goToProfile} style={{cursor:"pointer"}}>
            <img src={props.authorImg}></img>
            <p>{props.authorName}</p>
        </div>
    )
}

export default ProfileImgSmall
