import React, {Component} from 'react'
import {connect} from 'react-redux'
import {putDataPostAction} from '../actions/post-info-actions'
import Form from '../components/Form'
import {getTimestamp} from '../utils/utils'


class EditContainer extends Component {

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
            if(input.name === "voteScore"){
                values = {
                   ...values,
                   [input.name] : parseInt(input.value, 10)
               }
            }        
        } 

        let valuesConsolidate = {
                ...values,
                id: this.props.id,
                timestamp: getTimestamp(),
        }
        
        this.props.putDataPostAction(this.props.id, valuesConsolidate)

    }    



    render(){
        const {allPosts, allCategories, id, errorPost, postSuccess, loadingPost } = this.props

        return(
            <div>
            {loadingPost && (<div>Carregando!!!!</div>)}

                {allPosts &&
                    allPosts.map(post => {
                        if(post.id === id){
                            return(<Form key={id} post={post} allCategories={allCategories} type="post" onSubmit={this.handleSubmit} />)
                        }
                    })}
                    {errorPost && (<div>{errorPost}</div>)}
                    {postSuccess && (<div>Post feito com sucesso!</div>)}
    
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
        postCommentsSuccess: state.commentsInfo.postCommentsSuccess
    };
};

export default connect(mapStateToProps, {
    putDataPostAction
})(EditContainer)