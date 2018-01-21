import React, { Component } from 'react'
import IndexContainer from '../containers/IndexContainer'
import PostContainer from '../containers/PostContainer'
import NewPostContainer from '../containers/NewPostContainer'
import { getAllPostsAction } from '../actions/post-info-actions'
import { getAllCategoriesAction } from '../actions/category-info-action'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import EditContainer from '../containers/EditContainer'
import Header from  '../components/Header'


class App extends Component {

    componentDidMount(){
        this.props.getAllPostsAction()
        this.props.getAllCategoriesAction()
     }
 

  render() {
    return (
        <div className="App">
            <Header />
            <main className="container">
                <Route exact path="/"
                    render={() => (<Redirect to="/all" />)}/>

                <Route
                    exact
                    path="/post/:category/:id"
                    render={
                    ({match}) => {
                    let id = match.params.id;
                    let category = match.params.category;
                    return (
                        <PostContainer id={id} category={category} />
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

                <Route
                    exact
                    path="/add-post/post"
                    render={() => (<NewPostContainer />)}/>

                <Route
                    exact
                    path="/edit-post/:category/:id"
                    render={
                    ({match}) => {
                        let id = match.params.id;
                        let category = match.params.category;
                        return (
                            <EditContainer idPost={id} category={category} />
                        )
                }}/>          
            
                <Route
                    exact
                    path="/edit-comment/:id"
                    render={
                    ({match}) => {
                        let id = match.params.id;
                        return (
                            <EditContainer idComment={id} />
                        )
                }}/>                   
            </main>
        </div>
    );
  }
}


export default withRouter(connect(null, {
    getAllPostsAction,
    getAllCategoriesAction
  })(App))

