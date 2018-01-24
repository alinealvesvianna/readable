import React from 'react'
import Vote from '../components/Vote'
import {Link} from 'react-router-dom'
import {dateFilter} from '../utils/utils'

const Comment = props => {

    const {comment, idComment} = props

    const handleVote = (event, id) => {
        props.onClick(event, comment.id)
    }

    return(
        <div className="container-comment">
            <Vote onClick={handleVote}/>
            <span>{dateFilter(comment.timestamp)}</span>
            <span> votos: {comment.voteScore}</span>
            <span>autor: {comment.author}</span>
            <p>{comment.body}</p>
            {props.children}
            <Link
                className="edit-comment-button"
                role="button"
                to={{
                pathname: `/edit-comment/${idComment}`,
                }}>Editar
            </Link>            
        </div>
    )

}

export default Comment