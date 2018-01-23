import React from 'react'
import { Link } from 'react-router-dom'
import {dateFilter} from '../utils/utils'
import Vote from '../components/Vote'

const Post = (props) => {
    const {id, title, voteScore, timestamp, author, category, commentCount} = props.post

    const handleClick = (event, idPost) => {
        props.onClick(event, id)
    }

    return(
        <article className="postPreview">
            <Link
            role="button"
            to={{
            pathname: `/${category}/${id}`,
            }}>
                <h2>{title}</h2>
                <p>votos: {voteScore || 'Sem votos'}</p>
                <p>{dateFilter(timestamp) || 'Sem data'}</p>
                <p>autor: {author || 'Sem autor'}</p>
                <p>categoria: {category || 'Sem categoria'}</p>
                <p>comentários: {commentCount|| 'Nenhum comentário'}</p>
            </Link>
            <Vote onClick={handleClick} />
        </article>
    )
}

export default Post
