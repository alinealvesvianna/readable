import React, { Component } from 'react';
import IndexContainer from '../containers/IndexContainer'
import PostContainer from '../containers/PostContainer'
import { getAllPostsAction } from '../actions/post-info-actions'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux';



class App extends Component {

    componentDidMount(){
        this.props.getAllPostsAction()
     }
 

  render() {
    const  {allPosts} = this.props
    return (
      <div className="App">
        <Route exact path="/" render={() => <IndexContainer/>}/>
        <Route
        exact
        path="/post/:id"
        render={
          ({match}) => {
            let id = match.params.id;
            let post;

            if(allPosts){
                 post = allPosts.find((post) => {
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.postInfo.allPosts,
    };
};

export default connect(mapStateToProps, {
    getAllPostsAction,
  })(App)

// export default App;
