import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



class Header extends Component {

    render(){
        const {allCategories, loading, error} = this.props
            return(
                <header className="header">
                    <nav>
                        <ul>
                            {allCategories &&
                                (allCategories.categories.map(category => 
                                    (<li key={category.name}>
                                        <NavLink to={ `/${category.path}`} strict>{category.name}
                                        </NavLink>
                                    </li>)
                                ))
                            }
                            <li key={"all"}>
                                <NavLink to={"/"} strict>all posts</NavLink>
                            </li>
                            <li>
                                <NavLink to ={'/add-post/post'} strict>Incluir Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allCategories: state.categoryInfo.allCategories,
        loading: state.categoryInfo.loading,
        error: state.categoryInfo.error
    }
}



export default connect(mapStateToProps)(Header)
