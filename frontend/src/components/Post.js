import React from 'react'
import { Link } from 'react-router-dom';
import {dateFilter} from '../utils/utils'


const Post = (props) => {
    const {id, title, voteScore, timestamp, author, category} = props.post

    return(
        <div>
            <Link
            role="button"
            to={{
            pathname: `/post/${category}/${id}`,
            }}>
                <span>id:{id}</span>
                <h1>title:{title}</h1>
                <p>vote score: {voteScore}</p>
                <p>timestamp: {dateFilter(timestamp)}</p>
                <p>author: {author}</p>
            </Link>
        </div>
    )
}

export default Post