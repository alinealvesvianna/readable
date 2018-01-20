import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAllCommentsAction, postDataCommentsAction, postVoteCommentAction, deleteCommentAction} from '../actions/comments-info-action'
import Comment from '../components/Comment'
import Vote from '../components/Vote'
import {postVoteAction, deleteDataPostAction} from '../actions/post-info-actions'
import Form from '../components/Form'
import {idGenerator, getTimestamp} from '../utils/utils'
import {Link, Redirect} from 'react-router-dom'


class PostContainer extends Component {

    state = {
        redirect: false,
    }

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

    handleDelete = () => {
        this.props.deleteDataPostAction(this.props.id)
        this.setState({
            redirect: true,
        })
    }

    handleDeleteComment = (event) => {
        this.props.deleteCommentAction(event.target.id)
    }

    componentDidMount(){
        this.props.getAllCommentsAction(this.props.id)
    }

    render(){
        const {id, category, allPosts, allCommentsOrderVote, loadingComments, errorComments, postCommentsSuccess, postSuccess, isCommentDeleted} = this.props
        const {redirect} = this.state

        return(
            <div>
                {postSuccess && (<div>Post editado com sucesso</div>)}
                <Link
                to={{
                pathname: `/edit-post/${category}/${id}`,
                }}>Editar</Link>
                <button onClick={this.handleDelete}>Excluir</button>
                {redirect && <Redirect to="/"/>}
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
                {postCommentsSuccess && (<div>Comentário feito com sucesso!</div>)}
                
                <h1> Comentários</h1>
                {allCommentsOrderVote &&
                    allCommentsOrderVote.map(comment => <Comment key={comment.id} comment={comment} onClick={this.handleVoteComment}>
                            <button onClick={this.handleDeleteComment} id={comment.id}>Excluir</button>            
                        </Comment>
                    )
                }

                {isCommentDeleted && (<div>Comentário deletado com sucesso!</div>)}

            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        allCommentsOrderVote: state.commentsInfo.allCommentsOrderVote,
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        loadingComments: state.commentsInfo.loading,
        errorComments: state.commentsInfo.error,
        postCommentsSuccess: state.commentsInfo.postCommentsSuccess,
        postSuccess: state.postInfo.postSuccess,
        isCommentDeleted: state.commentsInfo.isCommentDeleted,
    };
};


  export default connect(mapStateToProps,{
    getAllCommentsAction,
    postVoteAction,
    deleteDataPostAction,
    postDataCommentsAction,
    postVoteCommentAction,
    deleteCommentAction
  })(PostContainer)