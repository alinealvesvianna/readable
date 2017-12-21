import React, { Component } from 'react'
import Comment from '../components/Comment'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CommentsContainer extends Component {

    render(){

       const  {allCommentsQuery} = this.props

        if (allCommentsQuery && allCommentsQuery.loading) {
            return <div>Loading</div>
        }


        if (allCommentsQuery && allCommentsQuery.error) {
            return <div>erro ${allCommentsQuery.error} </div>
        }

        return (
            <div>
                {allCommentsQuery.allComments.map(comment => <Comment key={comment.id} comment={comment} /> )}
            </div>
        )
    }
}
const ALL_COMMENTS_QUERY = gql`
  query allCommentsQuery {
    allComments {
      id
      createdAt
      body
      title
    }
  }
`

export default graphql(ALL_COMMENTS_QUERY, { name: 'allCommentsQuery' }) (CommentsContainer)