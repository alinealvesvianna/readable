import React from 'react'

const Comment = props => {

    const {comment} = props

    return(
        <div>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <span>{comment.timestamp}</span>
            <span>{comment.voteScore}</span>
        </div>
    )

}

export default Comment