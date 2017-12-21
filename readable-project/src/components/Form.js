import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class Form extends Component {
    state = {
        body: '',
        title: ''
    }

    handleChangeBody = (e) => {
        this.setState({ body: e.target.value })
    }

    handleChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    _submitForm = async () => {
    const { body, title } = this.state
    await this.props.createCommentMutation({
        variables: {
        body,
        title
        }
    })
    }

    render() {
        return (
            <div>
              <div className='flex flex-column mt3'>
                <input
                  className='mb2'
                  value={this.state.description}
                  onChange={this.handleChangeBody}
                  type='text'
                  placeholder='A description for the link'
                />
                <input
                  className='mb2'
                  value={this.state.url}
                  onChange={this.handleChangeTitle}
                  type='text'
                  placeholder='The URL for the link'
                />
              </div>
              <button
                onClick={this._submitForm}
              >
                Submit
              </button>
            </div>
          )
    }
}

const CREATE_COMMENT_MUTATION = gql`
  mutation createCommentMutation($body: String!, $title: String!) {
    createComment(
      body: $body,
      title: $title,
    ) {
      id
      createdAt
      title
      body
    }
  }
`

export default graphql(CREATE_COMMENT_MUTATION, { name: 'createCommentMutation' })(Form)