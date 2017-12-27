import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



class Header extends Component {

    render(){
        const {allCategories, loading, error} = this.props
        return(
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
                <NavLink to={"/all"} strict>all posts</NavLink>
            </li>
            </ul>       
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
