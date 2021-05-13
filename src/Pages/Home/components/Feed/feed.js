import React from 'react'
import IconSet from '../../../../Components/Icon/iconSet'
import MoreIcon from '../../../../Components/Icon/moreIcon'
import ProfileImgSmall from '../../../../Components/ProfileImgSmall/profileImgSmall'
import FeedImgs from '../Feed/feedImgs'
import './feed.scss'
import FeedComment from './feedComment'
import FeedText from './feedText'
import LikeCount from './likeCount'
import CommentBox from './commentBox'


function Feed(props) {
    return (
        <div className="feedWholeWrap">
            <div className="feedWrap">
                <div className="upper">
                <ProfileImgSmall
                        authorImg={props.data.authorImg}
                        authorName={props.data.authorName}
                        userId={props.data.user.id}
                        ></ProfileImgSmall>
                    <MoreIcon></MoreIcon>
                </div>
                <div className="mainImg">
                    <FeedImgs
                        imgs={props.data.feedImgs}></FeedImgs>
                </div>
                <div className="iconSet">
                    <IconSet></IconSet>
                </div>
                <div className="profile">
                    <LikeCount 
                        profileImg={props.data.LikeProfileImg}
                        userName={props.data.LikeUserName}
                        count={props.data.LikeCount}
                        ></LikeCount>
                </div>
                <div className="text">
                    <FeedText
                        userName={props.data.authorName}
                        text={props.data.text}></FeedText>
                </div>
                <div className="commentInput">
                    <CommentBox
                        commentList={props.data.commentList}></CommentBox>
                </div>
            </div>
        </div>
    )
}

export default Feed
