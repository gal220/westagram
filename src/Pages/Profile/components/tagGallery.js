import React from 'react'
import './tagGallery.scss'
import TagImg from './tagImg'

function TagGallery(props) {
    return (
        <div>
            {props.tagGalleryData.map((tagImg)=>{
                return(
                    <TagImg
                        img1={tagImg.img1}
                        img2={tagImg.img2}
                        img3={tagImg.img3}
                        ></TagImg>
                )
            })}
        </div>
    )
}

export default TagGallery
