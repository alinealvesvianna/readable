import React, {Component} from 'react'
import { connect } from 'react-redux';
import Form from '../components/Form'
import {postDataPostAction} from '../actions/post-info-actions'
import {idGenerator, getTimestamp} from '../utils/utils'

class NewPostContainer extends Component {

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
                timestamp: getTimestamp()
        }
        
        this.props.postDataPostAction(valuesConsolidate)

    }


    render(){
        const {loading, error, postSuccess, allCategories} = this.props

        return(
            <div>
                {loading && (<div>Carregando!!!!</div>)}
                <Form onSubmit={this.handleSubmit} allCategories={allCategories} />
                {error && (<div>{error}</div>)}
                {postSuccess && (<div>Post feito com sucesso!</div>)}

            </div>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        allCategories: state.categoryInfo.allCategories,
        postSuccess: state.postInfo.postSuccess,
    };
};

export default connect(mapStateToProps, {
    postDataPostAction
})(NewPostContainer)