import React from 'react'
import ProfileImgBig from '../../../Components/ProfileImgBig/ProfileImgBig'
import './storyBox.scss'

function StoryBox(props) {
    return (
        <div className="storyBox">
            {props.storyData.map((story)=>{
                return (
                    <ProfileImgBig
                        imgUrl={story.imgUrl}
                        imgWidth={story.imgWidth}
                        imgHeight={story.imgHeight}
                        circleHeight={story.circleHeight}
                        circleWidth={story.circleWidth}
                        storyUserName={story.storyUserName}
                    ></ProfileImgBig>
                )
            })}
        </div>
    )
}

export default StoryBox
