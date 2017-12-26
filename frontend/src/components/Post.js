import React from 'react'
import {  Link } from 'react-router-dom';

const Post = (props) => {
    const {id, title} = props.post
    return(
        <div>
            <Link
            role="button"
            to={{
            pathname: `/post/${id}`,
            }}>

                <h1>{title}</h1>
            </Link>
        </div>
    )
}

export default Post