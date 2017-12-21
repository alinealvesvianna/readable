import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PostContainer extends Component {

    render(){
        const {post, id} = this.props
        console.log(post)
        return(
            <div>
                <h1> essa a página do post {id}</h1>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    }

}

PostContainer.propTypes = {
    post: PropTypes.object
  }

export default PostContainer


