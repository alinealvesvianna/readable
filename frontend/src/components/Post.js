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
                <span>id:{id}</span>
                <h1>title:{title}</h1>
                <p>vote score: {voteScore}</p>
                <p>timestamp: {timestamp}</p>
                <p>author: {author}</p>
            </Link>
        </div>
    )
}

export default Post