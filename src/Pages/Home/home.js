import React, { useEffect, useState } from 'react'
import Feed from './components/Feed/feed'
import Loading from '../../Components/loading'
import { feedData } from './components/Feed/feedData'
import './home.scss'
import Nav from '../../Components/Nav/nav'

function Home() {

    const [data, setData] = useState([]);

    const getData = () => {
        setData(feedData);
    }

    useEffect(() => {
        setTimeout(()=>{
            getData();
        }, 200);

        return () => {
            console.log("Home will unmount")
        }
    },[]);

    return (
        <div>
            <Nav></Nav>
            <div className="homeWrap">
                <div className="feedWholeWrap">
                    {data.length > 0 ? 
                    data.map((feed)=>{
                        return (
                            <Feed data={feed}></Feed>
                        )
                    }) : <Loading loadingContent="지금은 로딩 중입니다..."/>}
                </div>
                <div>
                    회원님을 위한 추천
                </div>
            </div>
        </div>
    )
}

export default Home
