import React, { Component } from 'react';
// import Form from './components/Form'
import HomeContainer from './containers/HomeContainer';
import PostContainer from './containers/PostContainer'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Route } from 'react-router-dom';

class App extends Component {

  render() {

    const  {allPostsQuery} = this.props

    return (

      <div className="App">

      <main className="container">

      <Route
        exact
        path="/"
        render={
          () => (
            <HomeContainer posts={allPostsQuery} />
          )
        }
      />
      <Route
        exact
        path="/post/:id"
        render={
          ({match}) => {
            let id = match.params.id;
            let post;

            if(allPostsQuery.allPosts){
                 post = allPostsQuery.allPosts.find((post) => {
                    if (post.id === id) {
                        return post
                    }
                })
            } 
            return (
              <PostContainer id={id} post={post ? post : id}/>
            )
          }
        }
      />
    </main>
      </div>
    );
  }
}

const ALL_POSTS_QUERY = gql`
  query allPostsQuery {
    allPosts {
      id
      createdAt
      body
      title
    }
  }
`

export default graphql(ALL_POSTS_QUERY, { name: 'allPostsQuery' }) (App)
