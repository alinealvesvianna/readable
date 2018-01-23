import React, {Component} from 'react'
import {connect} from 'react-redux'
import {putDataCommentAction} from '../actions/comments-info-action'
import FormEditComment from '../components/FormEditComment'
import {getTimestamp} from '../utils/utils'
import { Redirect} from 'react-router-dom'

class EditCommentContainer extends Component {

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
        const {allComments, idComment, errorComments, loadingComments, postCommentsSuccess } = this.props

        return(
            <div>
                <h2 className="titlePage">Editar</h2>

                    {(allComments && idComment) &&
                        allComments.map(comment => {
                            if(comment.id === idComment){
                                return(<FormEditComment key={idComment} comment={comment} onSubmit={this.handleSubmitComment} />)
                            }
                    })}
                    {errorComments && (<div>{errorComments}</div>)}
                    {postCommentsSuccess && (<div>Comentário editado com sucesso!</div>)}
    
            </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allComments: state.commentsInfo.allComments,
        loadingComments: state.commentsInfo.loading,
        errorComments: state.commentsInfo.error,
        postCommentsSuccess: state.commentsInfo.postCommentsSuccess,
    };
};

export default connect(mapStateToProps, {
    putDataCommentAction
})(EditCommentContainer)