import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAllCommentsAction} from '../actions/comments-info-action'
import Comment from '../components/Comment'
import Vote from '../components/Vote'
import {postVoteAction} from '../actions/post-info-actions'

class PostContainer extends Component {

    handleVote = (event) => {
        event.preventDefault()
        this.props.postVoteAction(
            this.props.id,
            {
                'option': event.target.className
            }
        )
    }



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
                                <span>id: {id}</span>
                                <h1>title: {post.title}</h1>
                                <p>body: {post.body}</p>
                                <p>category: {post.category}</p>
                                <p>author: {post.author}</p>
                                <p>voteScore: {post.voteScore}</p>
                                <span>timestamp: {post.timestamp}</span>
                            </div>
                        )
                    }
                })))
            } 
            {allComments &&
                allComments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
            <Vote onClick={this.handleVote}/>
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        allComments: state.commentsInfo.allComments,
        loading: state.postInfo.loading,
        error: state.postInfo.error
    };
};


  export default connect(mapStateToProps,{
    getAllCommentsAction,
    postVoteAction
  })(PostContainer)