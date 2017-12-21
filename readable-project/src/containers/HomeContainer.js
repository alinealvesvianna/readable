
import React, { Component } from 'react'
import Post from '../components/Post'
import PropTypes from 'prop-types'

class HomeContainer extends Component {

    render(){
        const {posts} = this.props


        if (posts && posts.loading) {
            return <div>Loading</div>
        }


        if (posts && posts.error) {
            return <div>erro ${posts.error} </div>
        }

        return (
            <div>
                {posts.allPosts.map(post => <Post key={post.id} post={post} /> )}
            </div>
        )
    }
}


HomeContainer.propTypes = {
    posts: PropTypes.object
  }

export default HomeContainer