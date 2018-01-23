import React, {Component} from 'react'
import {connect} from 'react-redux'
import {putDataPostAction} from '../actions/post-info-actions'
import {putDataCommentAction} from '../actions/comments-info-action'
import Form from '../components/Form'
import {getTimestamp} from '../utils/utils'
import { Redirect} from 'react-router-dom'

class EditContainer extends Component {

    handleSubmitPost = event => {
        event.preventDefault()

        let values = {}

        for (let input of event.target) {
            if(input.name !== ""){
                values = {
                   ...values,
                   [input.name] : input.value
               }
            }
            if(input.name === "voteScore"){
                values = {
                   ...values,
                   [input.name] : parseInt(input.value, 10)
               }
            }        
        } 

        let valuesConsolidate = {
                ...values,
                id: this.props.idPost,
                timestamp: getTimestamp(),
        }
        
        this.props.putDataPostAction(this.props.idPost, valuesConsolidate)
    } 

    handleSubmitComment = event => {
        event.preventDefault()

        let values = {}

        for (let input of event.target) {
            if(input.name !== ""){
                values = {
                   ...values,
                   [input.name] : input.value
               }
            }
            if(input.name === "voteScore"){
                values = {
                   ...values,
                   [input.name] : parseInt(input.value, 10)
               }
            }        
        } 

        let valuesConsolidate = {
                ...values,
                id: this.props.idComment,
                timestamp: getTimestamp(),
        }
        
        this.props.putDataCommentAction(this.props.idComment, valuesConsolidate)
    }    

    render(){
        const {allPosts, allCategories, idPost, errorPost, postSuccess, loadingPost, allComments, idComment, errorComments, loadingComments, postCommentsSuccess } = this.props

        return(
            <div>
                {loadingPost && (<div>Carregando!!!!</div>)}

                <h2 className="titlePage">Editar</h2>

                {(allPosts && idPost) &&
                    allPosts.map(post => {
                        if(post.id === idPost){
                            return(<Form key={idPost} post={post} allCategories={allCategories} type="post" onSubmit={this.handleSubmitPost} />)
                        }
                    })}
                    {errorPost && (<div>{errorPost}</div>)}
                    {postSuccess && (<Redirect to={`/post/:category/${idPost}`}/>)}


                    {(allComments && idComment) &&
                        allComments.map(comment => {
                            if(comment.id === idComment){
                                return(<Form key={idComment} comment={comment} type="comment" onSubmit={this.handleSubmitComment} />)
                            }
                    })}
                    {errorComments && (<div>{errorComments}</div>)}
                    {postCommentsSuccess && (<div>Comentário editado com sucesso!</div>)}
    
            </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        allComments: state.commentsInfo.allComments,
        allCategories: state.categoryInfo.allCategories,
        loadingPost: state.postInfo.loading,
        errorPost: state.postInfo.error,
        postSuccess: state.postInfo.postSuccess,
        loadingComments: state.commentsInfo.loading,
        errorComments: state.commentsInfo.error,
        postCommentsSuccess: state.commentsInfo.postCommentsSuccess,
    };
};

export default connect(mapStateToProps, {
    putDataPostAction,
    putDataCommentAction
})(EditContainer)