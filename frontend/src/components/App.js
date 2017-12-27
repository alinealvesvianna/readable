import React, { Component } from 'react';
import IndexContainer from '../containers/IndexContainer'
import PostContainer from '../containers/PostContainer'
import { getAllPostsAction } from '../actions/post-info-actions'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';



class App extends Component {

    componentDidMount(){
        this.props.getAllPostsAction()
     }
 

  render() {
    return (
        <div className="App">
            <main className="container">
                <Route exact path="/"
                    render={() => (<IndexContainer />)}/>

                <Route
                    exact
                    path="/post/:id"
                    render={
                    ({match}) => {
                    let id = match.params.id;
                    return (
                        <PostContainer id={id} />
                    )
                }}/>
            </main>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.postInfo.allPosts,
        loading: state.postInfo.loading,
        error: state.postInfo.error
    };
};


export default withRouter(connect(mapStateToProps, {
    getAllPostsAction,
  })(App))

