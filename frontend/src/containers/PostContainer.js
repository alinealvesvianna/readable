import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getAllCommentsAction, postDataCommentsAction, postVoteCommentAction, deleteCommentAction} from '../actions/comments-info-action'
import Comment from '../components/Comment'
import Vote from '../components/Vote'
import {postVoteAction, deleteDataPostAction} from '../actions/post-info-actions'
import FormNewComment from '../components/FormNewComment'
import {idGenerator, getTimestamp, dateFilter} from '../utils/utils'
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
            <div className="containerPost">
                {postSuccess && (<div>Post editado com sucesso</div>)}
                {redirect && <Redirect to="/"/>}
                {allPosts &&
                    (allPosts.map((post => {
                        if (post.id === id && !post.deleted) {
                            return (
                                <div>
                                    <div className="buttonsPost">
                                        <Link
                                            to={{
                                            pathname: `/edit-post/${post.category}/${post.id}`}}
                                            className="linkEdit">Editar</Link>
                                        <a className="linkEraser" onClick={this.handleDelete}>Excluir</a>                
                                    </div>                                
                                    <article key={id}>
                                        <header>
                                            <h2>{post.title || 'Sem título'}</h2>
                                            <span>{dateFilter(post.timestamp)}</span>
                                            <span>categoria: {post.category || 'Sem categoria'}</span>
                                            <span>autor: {post.author || 'Sem autor'}</span>
                                            <span>votos: {post.voteScore || 'Sem Votos'}</span>
                                            <span>comentários: {post.commentCount || 'Nenhum comentário'}</span>
                                            <Vote onClick={this.handleVotePost}/>
                                        </header>
                                        <p>{post.body}</p>
                                    </article>                                
                                
                                    <h2> Comentários</h2>
                                    <FormNewComment onSubmit={this.handleSubmit}/>
                                    {loadingComments && (<div>Carregando!!!!</div>)}
                                    {errorComments && (<div>{errorComments}</div>)}
                                    {(postCommentsSuccess && !isCommentDeleted) && (<div>Comentário feito com sucesso!</div>)}

                
                                    {allCommentsOrderVote &&
                                        allCommentsOrderVote.map(comment => 
                                            <Comment key={comment.id} comment={comment} idComment={comment.id} onClick={this.handleVoteComment}>
                                                <button onClick={this.handleDeleteComment} id={comment.id}>Excluir</button>            
                                            </Comment>
                                        )
                                    }
                    
                                    {isCommentDeleted && (<div>Comentário deletado com sucesso!</div>)}                                    
                                                    
                                </div>

                            )
                        }
                    })))
                }
                {allPosts && ((allPosts.filter(el => el.id === id).length === 0) && (<div>Esse post não existe!</div>)) }
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