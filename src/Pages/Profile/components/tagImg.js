import React from 'react'
import './tagImg.scss'

function TagImg(props) {
    return (
        <div className="tagImg">
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

export default TagImg
