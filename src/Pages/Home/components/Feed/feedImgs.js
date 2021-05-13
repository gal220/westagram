import React from 'react'
import { useState } from 'react'
import './feedImgs.scss'


function FeedImgs(props) {

    const [index, setIndex] = useState(0);

    const nextButton = () => {
        if(index < props.imgs.length-1) {
            setIndex(index+1)
        }
    }

    const preButton = () => {
        if(index > 0) {
            setIndex(index-1)
        }
    }

    return (
        <div className="feedImgWrap">
            <div className="feedImg">
                <img src={props.imgs[index]}/>
                <div className="buttonSet">
                    <button className="preButton" onClick={preButton}>{'<'}</button>
                    <button className="nextButton" onClick={nextButton}>{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default FeedImgs
