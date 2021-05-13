import React from 'react'
import MoreIcon from '../../../Components/Icon/moreIcon'
import ProfileImgBig from '../../../Components/ProfileImgBig/ProfileImgBig'
import StoryBox from '../../Home/storyBox/storyBox'
import ContentImg from './contentImg'
import ImgGallery from './imgGallery'
import './profileInfo.scss'


function ProfileInfo(props) {
    return (
        <div>
            <div className="profileInfo">
                <div className="profileInfoImg">
                    <img src={props.infoImg}></img>
                </div>
                <div className="profileInfoDetail">
                    <div className="infoButton">
                        <h2>{props.profileUserName}</h2>
                        <div className="buttonSet">
                            <button className="buttonOne">메시지 보내기</button>
                            <button className="buttonTwo"><img src="/img/follower.png" style={{width: "15px"}}></img></button>
                            <button className="buttonThree">▽</button> 
                        </div>  
                        <MoreIcon></MoreIcon>
                    </div>  
                    <div className="countInfo">
                        <div className="countInfoOne">
                            <span>게시물</span><span style={{marginLeft:"5px", fontWeight:"600"}}>{props.countContents}</span>
                        </div>
                        <div className="countInfoTwo">
                            <span>팔로워</span><span style={{marginLeft:"5px", fontWeight:"600"}}>{props.countFollowers}</span>
                        </div>
                        <div>
                            <span>팔로우</span><span style={{marginLeft:"5px", fontWeight:"600"}}>{props.following}</span>
                        </div>
                    </div>
                    <div className="profileInfoContent">
                        <div className="userName">{props.profileInfoName}</div>
                        <div className="category">{props.profileInfoCategory}</div>
                        <div>{props.profileInfoContent}</div>
                        <a href={props.profileInfoWebUrl}>{props.profileInfoWebName}</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
