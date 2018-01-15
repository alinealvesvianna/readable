import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAllCommentsAction, postDataCommentsAction, postVoteCommentAction} from '../actions/comments-info-action'
import Comment from '../components/Comment'
import Vote from '../components/Vote'
import {postVoteAction} from '../actions/post-info-actions'
import Form from '../components/Form'
import {idGenerator, getTimestamp} from '../utils/utils'



class PostContainer extends Component {

    handleVotePost = (event) => {
        event.preventDefault()
        this.props.postVoteAction(
            this.props.id,
            {
                'option': event.target.className
            }
        )
    }


    handleVoteComment = (event, idComment) => {
        event.preventDefault()
        console.log(idComment)
        console.log(event.target.className)

        this.props.postVoteCommentAction(
            idComment,
            {
                'option': event.target.className
            }
        )
    }
    


    handleSubmit = event => {


        event.preventDefault()
 
        let values = {}

        for (let input of event.target) {
            if(input.name !== ""){
                values = {
                   ...values,
                   [input.name] : input.value
               }
            }       
        } 

        let valuesConsolidate = {
                ...values,
                id: idGenerator(),
                timestamp: getTimestamp(),
                parentId: this.props.id
        }
        
        this.props.postDataCommentsAction(valuesConsolidate)

    }



    componentDidMount(){
        this.props.getAllCommentsAction(this.props.id)
    }

    render(){
        const {id, allPosts, allComments, loadingComments, errorComments, postCommentsSuccess} = this.props

        return(
            <div>
            {allPosts &&
                (allPosts.map((post => {
                    if (post.id === id) {
                        return (
                            <div key={id}>
                                <span>id: {id}</span>
                                <h1>title: {post.title}</h1>
                                <p>body: {post.body}</p>
                                <p>category: {post.category}</p>
                                <p>author: {post.author}</p>
                                <p>voteScore: {post.voteScore}</p>
                                <span>timestamp: {post.timestamp}</span>
                            </div>
                        )
                    }
                })))
            } 
            <Vote onClick={this.handleVotePost}/>

            <hr />

            <Form onSubmit={this.handleSubmit} type="comment" />
            {loadingComments && (<div>Carregando!!!!</div>)}
            {errorComments && (<div>{errorComments}</div>)}
            {postCommentsSuccess && (<div>Post feito com sucesso!</div>)}
            
             <h1> Comentários</h1>
            {allComments &&
                allComments.map(comment => <Comment key={comment.id} comment={comment} onClick={this.handleVoteComment}/>)
            }

            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        allComments: state.commentsInfo.allComments,
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        loadingComments: state.commentsInfo.loading,
        errorComments: state.commentsInfo.error,
        postCommentsSuccess: state.commentsInfo.postCommentsSuccess
    };
};


  export default connect(mapStateToProps,{
    getAllCommentsAction,
    postVoteAction,
    postDataCommentsAction,
    postVoteCommentAction
  })(PostContainer)