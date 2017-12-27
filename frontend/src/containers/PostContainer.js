import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


class PostContainer extends Component {

    render(){
        const {id, allPosts} = this.props

        return(
            <div>
            {allPosts &&
                (allPosts.map((post => {
                    if (post.id === id) {
                        return (
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        )
                    }
                })))
            }            
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts
    };
};


  export default connect(mapStateToProps)(PostContainer)