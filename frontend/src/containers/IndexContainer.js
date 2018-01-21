import React, { Component } from 'react'
import Post from '../components/Post'
import Order from '../components/Order'
import { connect } from 'react-redux'
import {orderPostAction} from '../actions/post-info-actions'



class IndexContainer extends Component {

    orderPost = (event, type) => {
        this.props.orderPostAction(event.target.className, type)
    }
    
    render(){
        const {loading, allPostsOrderVote, error, filterName, isPostDeleted} = this.props
        return(
                <div>
                    <section className="orderPosts">
                        <h5>Ordernar Postagem</h5>
                        <Order onClick={this.orderPost} type="timestamp" orderNameUp="mais recente" orderNameDown="menos recente"  />
                        <Order onClick={this.orderPost} type="voteScore" orderNameUp="mais votada" orderNameDown="menos votada"  />
                    </section>
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

export default connect(mapStateToProps, {
    orderPostAction
})(IndexContainer)

