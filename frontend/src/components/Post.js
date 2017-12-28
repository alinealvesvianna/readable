import React from 'react'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id, title, voteScore, timestamp, author} = props.post

    return(
        <div>
            <Link
            role="button"
            to={{
            pathname: `/post/${id}`,
            }}>
                <h1>{title}</h1>
                <p>{voteScore}</p>
                <p>{timestamp}</p>
                <p>{author}</p>
            </Link>
        </div>
    )
}

export default Post