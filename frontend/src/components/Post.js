import React from 'react'
import { Link } from 'react-router-dom'
import {dateFilter} from '../utils/utils'


const Post = (props) => {
    const {id, title, voteScore, timestamp, author, category} = props.post

    return(
        <article className="postPreview">
            <Link
            role="button"
            to={{
            pathname: `/post/${category}/${id}`,
            }}>
                <h2>{title}</h2>
                <p>votos: {voteScore || 'Sem votos'}</p>
                <p>{dateFilter(timestamp) || 'Sem data'}</p>
                <p>autor: {author || 'Sem autor'}</p>
            </Link>
        </article>
    )
}

export default Post