import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux';



class IndexContainer extends Component {

    render(){
        const {loading, allPosts, error} = this.props
      return(
          <div>
            {loading && (<div>Carregando!!!!</div>)}
            {allPosts && allPosts.map(post => (<Post key={post.id} post={post}/>))}
            {error && (<div>{error}</div>)}
          </div>
          
      )   
    }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.postInfo.allPosts,
        loading: state.postInfo.loading,
        error: state.postInfo.error
    };
};

export default connect(mapStateToProps)(IndexContainer)



