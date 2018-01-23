import React, { Component } from 'react'
import Post from '../components/Post'
import Order from '../components/Order'
import { connect } from 'react-redux'
import {orderPostAction} from '../actions/post-info-actions'
import {postVoteAction, deleteDataPostAction} from '../actions/post-info-actions'
import {Link} from 'react-router-dom'

class IndexContainer extends Component {

    handleVotePost = (event, id) => {
        this.props.postVoteAction(
            id,
            {
                'option': event.target.className
            }
        )
    }

    handleDelete = (event) => {
        this.props.deleteDataPostAction(event.target.id)
    }

    orderPost = (event, type) => {
        this.props.orderPostAction(event.target.className, type)
    }
    
    render(){
        const {loading, allPosts, error, filterName, isPostDeleted} = this.props
        return(
                <div>
                    <section className="orderPosts">
                        <h5>Ordernar Postagem</h5>
                        <Order onClick={this.orderPost} type="timestamp" orderNameUp="mais recente" orderNameDown="menos recente"  />
                        <Order onClick={this.orderPost} type="voteScore" orderNameUp="mais votada" orderNameDown="menos votada"  />
                    </section>
                    {loading && (<div>Carregando!!!!</div>)}
                    {isPostDeleted && (<div>Seu post foi deletado com sucesso!</div>)}
                    {allPosts  && (
                        filterName ? 
                        (allPosts.filter(post => post.category === filterName).map(post =>
                            {
                                return(
                                    <div>
                                        <Post key={post.id} post={post} onClick={this.handleVotePost} />
                                        <div className="buttonsPost">
                                            <Link
                                                to={{
                                                pathname: `/edit-post/${post.category}/${post.id}`}}
                                                className="linkEdit">
                                                Editar
                                            </Link>
                                            <a className="linkEraser" id={post.id} onClick={this.handleDelete}>Excluir</a>                
                                        </div>                                        
                                    </div>
                                )
                            })) :
                            (allPosts.map(post => {
                                return(
                                    <div>                                  
                                        <Post key={post.id} post={post} onClick={this.handleVotePost} />
                                        <div className="buttonsPost">
                                            <Link
                                                to={{
                                                pathname: `/edit-post/${post.category}/${post.id}`}}
                                                className="linkEdit">
                                                Editar
                                            </Link>
                                            <a className="linkEraser" id={post.id} onClick={this.handleDelete}>Excluir</a>                
                                        </div>                                          
                                    </div>
                                )
                            }))
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
        filterName: ownProps.filterName,
        isPostDeleted: state.postInfo.isPostDeleted
    };
};

export default connect(mapStateToProps, {
    orderPostAction,
    postVoteAction,
    deleteDataPostAction
})(IndexContainer)

