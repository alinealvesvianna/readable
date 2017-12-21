import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const POST_QUERY = gql`
query postsQuery {
  Post(id: $id) {
    id
    createdAt
    body
    title
  }
}`

export default graphql(POST_QUERY, { name: 'postQuery' }) 