import React from 'react'
import './feedText.scss'

function FeedText(props) {
    return (
        <div className='wrap'>
          <span style={{fontWeight:'bold', marginRight:'5px'}}>{props.userName}</span>
          <span>{props.text}</span>
        </div>
    )
}

export default FeedText
