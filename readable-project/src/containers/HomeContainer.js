// import React, { Component } from 'react'
// import Post from '../components/Post'
// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'

// class HomeContainer extends Component {

//     render(){

//        const  {allPostsQuery} = this.props

//         if (allPostsQuery && allPostsQuery.loading) {
//             return <div>Loading</div>
//         }


//         if (allPostsQuery && allPostsQuery.error) {
//             return <div>erro ${allPostsQuery.error} </div>
//         }

//         return (
//             <div>
//                 {allPostsQuery.allPosts.map(post => <Post key={post.id} post={post} /> )}
//             </div>
//         )
//     }
// }
// const ALL_POSTS_QUERY = gql`
//   query allPostsQuery {
//     allPosts {
//       id
//       createdAt
//       body
//       title
//     }
//   }
// `

// export default graphql(ALL_POSTS_QUERY, { name: 'allPostsQuery' }) (HomeContainer)


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