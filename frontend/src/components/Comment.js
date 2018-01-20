import React from 'react'
import Vote from '../components/Vote'
import {Link} from 'react-router-dom'
import {dateFilter} from '../utils/utils'

const Comment = props => {

    const {comment} = props

    const handleVote = (event, id) => {
        props.onClick(event, comment.id)
    }

    return(
        <div>
            <Link
                to={{
                pathname: `/edit-comment/${comment.id}`,
                }}>Editar
            </Link>
            <hr />
            <span>id comment: {comment.id}</span>            
            <span>timestamp comment: {dateFilter(comment.timestamp)}</span>
            <span> comment votescore: {comment.voteScore}</span>
            <p>comment author: {comment.author}</p>
            <p>comment body: {comment.body}</p>
            <Vote onClick={handleVote}/>
            {props.children}
        </div>
    )

}

export default Comment