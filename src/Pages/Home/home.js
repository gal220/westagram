import React, { useEffect, useState } from 'react'
import Feed from './components/Feed/feed'
import Loading from '../../Components/loading'
import { feedData } from './components/Feed/feedData'
import './home.scss'
import Nav from '../../Components/Nav/nav'
import firestore from '../../firebase'

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

    const getFeedData = () => {
		firestore
	      .collection('feed')  // restaurants 컬렉션의 정보를 가져오겠다.
	      .get()
	      .then(querySnapshot => {
	        const arr = [];
	        querySnapshot.forEach(doc => {
	          arr.push(doc.data());
	        });
					console.log("데이터가 배열에 어떻게 들어오는지,", arr)
	      });
  };


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
            </div>
            <button onClick={getFeedData}>데이터 가져오기</button>
        </div>
    )
}

export default Home
