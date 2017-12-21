import React from 'react'
import PropTypes from 'prop-types'


const Comment = props => {
    const {comment} = props

    return(
        <div>
            <h1>{comment.title}</h1>
            <p>{comment.body}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object
  }
  

export default Comment