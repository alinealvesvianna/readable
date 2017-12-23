import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { getAllPostsAction } from '../actions/post-info-actions'

// import {getAllPostsApi} from '../utils/api'


class IndexContainer extends Component {

    state = {

    }

    componentDidMount(){
        const {getAllPostsAction} = this.props
        getAllPostsAction()
        // getAllPostsApi()
    }

    render(){
      return(<div></div>)   
    }
}

const mapStateToProps = (state, props) => ({
    allPosts: state.postInfo.allPosts
})


// const mapDispatchToProps = dispatch => ({
//     getAllPosts: () => dispatch(getAllPostsAction)
// })


// export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)

export default connect(mapStateToProps, {
    getAllPostsAction,
  })(IndexContainer)

// export default IndexContainer




