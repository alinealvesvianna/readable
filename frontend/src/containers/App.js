import React, { Component } from 'react'
import IndexContainer from '../containers/IndexContainer'
import PostContainer from '../containers/PostContainer'
import EditPostContainer from '../containers/EditPostContainer'
import NewPostContainer from '../containers/NewPostContainer'
import { getAllPostsAction } from '../actions/post-info-actions'
import { getAllCategoriesAction } from '../actions/category-info-action'
import { withRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import EditCommentContainer from '../containers/EditCommentContainer'
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
                    render={() => (<IndexContainer />)}/>

                <Route
                    exact
                    path="/:category/:id"
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
                    path="/add-post/new-post/post"
                    render={() => (<NewPostContainer />)}/>

                <Route
                    exact
                    path="/edit-post/:category/:id"
                    render={
                    ({match}) => {
                        let id = match.params.id;
                        let category = match.params.category;
                        return (
                            <EditPostContainer idPost={id} category={category} />
                        )
                }}/>          
            
                <Route
                    exact
                    path="/edit-comment/comment/:id"
                    render={
                    ({match}) => {
                        let id = match.params.id;
                        return (
                            <EditCommentContainer idComment={id} />
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

