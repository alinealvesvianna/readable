import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PostContainer extends Component {

    render(){
        const {id, title, body} = this.props.post
        return(
            <div>
                <h1> essa a página do post {id}</h1>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
            </div>
        )
    }

}

// PostContainer.propTypes = {
//     post: PropTypes.object
//   }


  export default PostContainer
