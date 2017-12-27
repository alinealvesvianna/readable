import React, { Component } from 'react';
import IndexContainer from '../containers/IndexContainer'
import PostContainer from '../containers/PostContainer'
import { getAllPostsAction } from '../actions/post-info-actions'
import { getAllCategoriesAction } from '../actions/category-info-action'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from  '../components/Header'



class App extends Component {

    componentDidMount(){
        this.props.getAllPostsAction()
        this.props.getAllCategoriesAction()
     }
 

  render() {
    return (
        <div className="App">
            <nav>
                <Header />
            </nav>
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

                <Route
                exact
                path="/:path"
                render={
                ({match}) => {
                let path = match.params.path;
                return (
                    <IndexContainer filterName={path} />
                )
            }}/>

            </main>
        </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         allPosts: state.postInfo.allPosts,
//         loading: state.postInfo.loading,
//         error: state.postInfo.error
//     };
// };


export default withRouter(connect(null, {
    getAllPostsAction,
    getAllCategoriesAction
  })(App))

