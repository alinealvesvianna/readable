import React, { Component } from 'react'
import { connect } from 'react-redux'
import { putDataPostAction } from '../actions/post-info-actions'
import FormEditPost from '../components/FormEditPost'
import { getTimestamp } from '../utils/utils'
import { Redirect } from 'react-router-dom'

class EditPostContainer extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.setState({
      redirect: false
    })
  }

  handleSubmitPost = event => {
    event.preventDefault()

    let values = {}

    for (let input of event.target) {
      if (input.name !== '') {
        values = {
          ...values,
          [input.name]: input.value
        }
      }
      if (input.name === 'voteScore') {
        values = {
          ...values,
          [input.name]: parseInt(input.value, 10)
        }
      }
    }

    let valuesConsolidate = {
      ...values,
      id: this.props.idPost,
      timestamp: getTimestamp()
    }

    this.props.putDataPostAction(this.props.idPost, valuesConsolidate)
    this.setState({
        redirect: true,
    })
  }

  render() {
    const {
      allPosts,
      allCategories,
      idPost,
      errorPost,
      postSuccess,
      loadingPost,
      category
    } = this.props

    return (
      <div>
        {loadingPost && <div>Carregando!!!!</div>}

        <h2 className="titlePage">Editar</h2>

        {allPosts &&
          idPost &&
          allPosts.map(post => {
            if (post.id === idPost) {
              return (
                <FormEditPost
                  key={idPost}
                  post={post}
                  allCategories={allCategories}
                  onSubmit={this.handleSubmitPost}
                />
              )
            }
          })}
        {errorPost && <div>{errorPost}</div>}
        {(postSuccess && this.state.redirect) && <Redirect to={`/${category}/${idPost}`} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allPosts: state.postInfo.allPosts,
    allCategories: state.categoryInfo.allCategories,
    loadingPost: state.postInfo.loading,
    errorPost: state.postInfo.error,
    postSuccess: state.postInfo.postSuccess
  }
}

export default connect(mapStateToProps, {
  putDataPostAction
})(EditPostContainer)
