import React from 'react'
import Vote from '../components/Vote'


const Comment = props => {

    const {comment} = props

    const handleVote = (event, id) => {
        props.onClick(event, comment.id)
    }

    return(
        <div>
            <hr />
            <span>id comment: {comment.id}</span>            
            <span>timestamp comment: {comment.timestamp}</span>
            <span> comment votescore: {comment.voteScore}</span>
            <p>comment author: {comment.author}</p>
            <p>comment body: {comment.body}</p>
            <Vote onClick={handleVote}/>
        </div>
    )

}

export default Comment