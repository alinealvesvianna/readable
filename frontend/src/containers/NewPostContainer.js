import React, {Component} from 'react'
import { connect } from 'react-redux';
import Form from '../components/Form'
import {postDataPostAction} from '../actions/post-info-actions'
import {idGenerator, getTimestamp} from '../utils/utils'

class NewPostContainer extends Component {

    state = {
        selectValue:''
    }

    handleSelectChange = event => {
        this.setState({
            selectValue: event.target.value
        })
      }

    handleSubmit = values => {
        values.id = idGenerator()
        values.timestamp = getTimestamp();
        console.log('são os valores', values)
        this.props.postDataPostAction(values)
      }

    render(){
        const {allCategories, loading, error, postSuccess} = this.props

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
        allCategories: state.categoryInfo.allCategories,
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        postSuccess: state.postInfo.postSuccess,
    };
};

export default connect(mapStateToProps, {
    postDataPostAction
})(NewPostContainer)
