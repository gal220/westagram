import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import reportWebVitals from './reportWebVitals';
import Home from '../src/Pages/Home/home'
import ProfileImgSmall from './Components/ProfileImgSmall/profileImgSmall';
import Feed from './Pages/Home/components/Feed/feed';
import ProfileInfo from './Pages/Profile/components/profileInfo';
import StoryBox from './Pages/Home/storyBox/storyBox';
import Profile from './Pages/Profile/profile'
import Routes from './Routes';

ReactDOM.render(
    <Routes></Routes>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
