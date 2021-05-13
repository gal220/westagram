import React, { useEffect, useState } from 'react'
import ProfileInfo from './components/profileInfo'
import './profile.scss'
import StoryBox from '../Home/storyBox/storyBox'
import ImgGallery from '../Profile/components/imgGallery'
import { profileData } from './components/profileData'
import { useParams } from 'react-router-dom'
import Loading from '../../../src/Components/loading'
import Nav from '../../Components/Nav/nav'
import TagGallery from './components/tagGallery'

function Profile() {

    const [proData, setProData] = useState();
    const params = useParams();

    const getProfileData = () => {
        setProData(profileData[params.id]);
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProfileData();
        }, 200);

        return () => {
            console.log("Profile will unmount")
        }
    },[]);

    const menuTab = {
        0 : <ImgGallery galleryImg={proData ? proData.contentImgData : null}></ImgGallery>,
        1 : <TagGallery tagGalleryData={proData ? proData.tagImgData : null}></TagGallery>,
    }

    const [tab, setTab] = useState(0);
    const [contentsBasicColor, setContentsBasicColor] = useState(2);
    const [tagBasicColor, setTagBasicColor] = useState(3);

    const tabColor = {
        2: { color:"gray", borderTop:"solid 1px"},
        3: { color:"black", borderTop:""}
    }

    const clickTag = () => {
        setTab(1);
        setContentsBasicColor(3);
        setTagBasicColor(2);
    }

    const clickContent = () => {
        setTab(0);
        setContentsBasicColor(2);
        setTagBasicColor(3);
    }

    return (
        <div>
            <Nav></Nav>
            {proData ?
            <div className="profileWrap">
                <ProfileInfo
                    infoImg={proData.profileInfoImg}
                    profileUserName={proData.profileUserName}
                    countContents={proData.countContents}
                    countFollowers={proData.countFollowers}
                    following={proData.following}
                    profileInfoName={proData.profileInfoName}
                    profileInfoCategory={proData.profileInfoCategory}
                    profileInfoContent={proData.profileInfoContent}
                    profileInfoWebName={proData.profileInfoWebName}
                    profileInfoWebUrl={proData.profileInfoWebUrl}
                    ></ProfileInfo>
                <StoryBox storyData={proData.storyBoxDatas}></StoryBox>
                <div className="contentCheckBox">
                    <div className="contentCheck">
                        <div className="contents" onClick={clickContent} style={tabColor[contentsBasicColor]}>게시물</div>
                        <div className="tags" onClick={clickTag} style={tabColor[tagBasicColor]}>태그됨</div>
                    </div>
                </div>
                <div>
                    {menuTab[tab]}
                </div>
            </div> : <Loading/> }
        </div>
    )
}

export default Profile
