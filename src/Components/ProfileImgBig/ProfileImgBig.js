import React from 'react'
import './profileImgBig.scss'

function ProfileImgBig(props) {
    return (
        <div>
            <div className="profileImgBig">
                <div className="backCircle" style={{width:props.circleWidth, height:props.circleHeight}}>
                    <div className="cicleImg">
                        <img className="imgCircle" src={props.imgUrl} style={{width:props.imgWidth, height:props.imgHeight}}></img>
                    </div>
                </div>
                <div className="storyUserName">{props.storyUserName}</div>
            </div>
        </div>
    )
}

export default ProfileImgBig
