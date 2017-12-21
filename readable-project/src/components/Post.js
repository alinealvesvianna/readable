// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom';
import React from 'react'


// class Post extends Component {

//     render(){
//         const {post} = this.props
//         return(
//             <div>
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//             </div>
//         )
//     }

// }

const Post = props => {
    const {post} = props

    return(
        <div>
            <Link
                role="button"
                to={{
                pathname: `/post/${post.id}`,
            }}>
                <h1>{post.title}</h1>
            </Link>
        </div>
    )
}


Post.propTypes = {
    post: PropTypes.object
  }
  

export default Post


