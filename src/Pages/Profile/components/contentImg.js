import React from 'react'
import './contentImg.scss'

function ContentImg(props) {
    return (
        <div className="contentImg">
            <div className="canvas" style={{marginRight:"28px"}}>
                <img className="firstImg" src={props.img1}></img>
            </div>
            <div className="canvas" style={{marginRight:"28px"}}>
                <img className="secondImg" src={props.img2}></img>
            </div>
            <div className="canvas">
                <img className="thirdImg" src={props.img3}></img>
            </div>
        </div>
    )
}

export default ContentImg
