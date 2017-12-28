import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAllCommentsAction} from '../actions/comments-info-action'
import Comment from '../components/Comment'

class PostContainer extends Component {

    componentDidMount(){
        this.props.getAllCommentsAction(this.props.id)
    }

    render(){
        const {id, allPosts, allComments} = this.props

        return(
            <div>
            {allPosts &&
                (allPosts.map((post => {
                    if (post.id === id) {
                        return (
                            <div key={id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                                <p>{post.category}</p>
                                <p>{post.author}</p>
                                <p>{post.voteScore}</p>
                                <span>{post.timestamp}</span>
                            </div>
                        )
                    }
                })))
            } 
            {allComments &&
                allComments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        allComments: state.commentsInfo.allComments
    };
};


  export default connect(mapStateToProps,{
    getAllCommentsAction
  })(PostContainer)