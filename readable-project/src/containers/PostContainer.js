import React, { Component } from 'react'
import PropTypes from 'prop-types'




class PostContainer extends Component {

    render(){
        const {post} = this.props
        return(
            <div>
                <h1> essa a página do post {post.id}</h1>
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


// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import POST_QUERY from '../queries/PostQuery'



// class PostContainer extends Component {

//     state = {
//         post: {}
//     }

//     componentDidMount() {
//         console.log(this.props.id)
//         if (this.props.post) {
//           this.setState({post:this.props.post})
//         } 
//         // else {
//         //     POST_QUERY(this.props.id).then(response => {
//         //     this.setState({post:response});
//         //   })
//         // }
//         console.log(this.props.id)
//       }

//     // render(){
//     //     console.log(this.props.location)
//     //     const {post} = this.state
//     //     return(
//     //         <div>
//     //             <h1> essa a página do post {post.id}</h1>
//     //             <h1>{post.title}</h1>
//     //             <p>{post.body}</p>
//     //         </div>
//     //     )
//     // }

// }




// PostContainer.propTypes = {
//     post: PropTypes.object
//   }


// // const POST_QUERY = gql`
// // query postsQuery {
// //   Post(id: $id) {
// //     id
// //     createdAt
// //     body
// //     title
// //   }
// // }
// // `



// // export default graphql(POST_QUERY, { name: 'postQuery' }) (PostContainer)
// export default PostContainer



