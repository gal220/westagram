import React from 'react'
import { useHistory } from 'react-router'
import ProfileImgSmall from '../ProfileImgSmall/profileImgSmall'
import './nav.scss'

function Nav() {

    const history = useHistory();

    const goToHome = () => {
        history.push('/')
    }

    return (
            <div className="navOutsideWrap">
                <div className="navWrap">
                    <div className="navImg">
                        <img src="/img/instagramLogo.png" onClick={goToHome} style={{cursor:"pointer"}}></img>
                    </div>
                    <div className="navInput">
                        <input></input>
                    </div>
                    <div className="navIconSet">
                        <img src="/img/home.png"></img>
                        <img src="/img/dm.png"></img>
                        <img src="/img/direction.png"></img>
                        <img src="/img/heart.png"></img>
                        <ProfileImgSmall authorImg="/img/artreeCircle.png"></ProfileImgSmall>
                    </div>  
                </div>
            </div>
    )
}

export default Nav
