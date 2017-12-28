import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux';



class IndexContainer extends Component {

    render(){
     const {loading, allPosts, error, filterName} = this.props
      return(
          <div>
            {loading && (<div>Carregando!!!!</div>)}

            {allPosts && filterName  && (
                filterName !== 'all' ? 
                (allPosts.filter(post => post.category === filterName).map(post => <Post key={post.id} post={post} />)) :
                (allPosts.map(post => <Post key={post.id} post={post} />))
            )}


            {error && (<div>{error}</div>)}

          </div>
          
      )   
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allPosts: state.postInfo.allPosts,
        loading: state.postInfo.loading,
        error: state.postInfo.error,
        filterName: ownProps.filterName
    };
};

export default connect(mapStateToProps)(IndexContainer)

