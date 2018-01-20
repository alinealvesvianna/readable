import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux';



class IndexContainer extends Component {
    
    render(){
     const {loading, allPostsOrderVote, error, filterName, isPostDeleted} = this.props
      return(
          <div>
            {loading && (<div>Carregando!!!!</div>)}
            {isPostDeleted && (<div>Seu post foi deletado com sucesso!</div>)}

            {allPostsOrderVote && filterName  && (
                filterName !== 'all' ? 
                (allPostsOrderVote.filter(post => post.category === filterName).map(post => <Post key={post.id} post={post} />)) :
                (allPostsOrderVote.map(post => <Post key={post.id} post={post} />))
            )}

            {error && (<div>{error}</div>)}

          </div>
          
      )   
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allPostsOrderVote: state.postInfo.allPostsOrderVote,
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        filterName: ownProps.filterName,
        isPostDeleted: state.postInfo.isPostDeleted
    };
};

export default connect(mapStateToProps)(IndexContainer)

