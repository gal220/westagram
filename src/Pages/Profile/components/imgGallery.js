import React from 'react'
import ContentImg from './contentImg'
import './imgGallery.scss'
import profileContentImg from './profileData'

function ImgGallery(props) {
    console.log(props);
    return (
        <div>
            {props.galleryImg.map((contentImg)=>{
                return(
                    <ContentImg
                        img1={contentImg.img1}
                        img2={contentImg.img2}
                        img3={contentImg.img3}
                        ></ContentImg>
                )
            })}
        </div>
    )
}

export default ImgGallery
