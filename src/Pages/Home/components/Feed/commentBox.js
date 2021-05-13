import React, {useState} from 'react'
import './commentBox.scss'
import FeedComment from './feedComment';
import Comment from './comment'

function CommentBox(props) {

    const [comment, setComment] = useState("");
    
    const [commentList, setCommentList] = useState(props.commentList);

    const [changeColor, setChangeColor] = useState({opacity:".3"});

    const onChange = (event) => {
        setComment(event.target.value);
        setChangeColor({opacity:"1"});
    }

    const addComment = () => {
        setCommentList([...commentList, 
            {author:"jeremy", 
            content: comment,
            isLiked: false }])
        setComment('')
    }

    return (
        <div className="commentCouunSet">
            <div className="commentCount">
                댓글 {commentList.length}개 모두 보기
            </div>
            <ul>
                {commentList.map((reply) => {
                    return (
                       <Comment data={reply}></Comment>
                    )
                })}
            </ul>
            <div className="dayCount">
                1일 전
            </div>
            <div className="inputSet">
                <img src="/img/smile.png"></img>
                <input value={comment} onChange={onChange} placeholder="댓글 달기..."></input>
                <button onClick={addComment} style={changeColor}>게시</button>
            </div>
        </div>
    )
}

export default CommentBox
