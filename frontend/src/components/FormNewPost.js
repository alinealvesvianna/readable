import React, {Component} from 'react'
import Field from '../components/Field'
import { connect } from 'react-redux';


class FormNewPost extends Component {

  state = {
    inputValues: {},
    submit: false,
  }

  handleChange = (event) => {
    this.setState({
      inputValues: {
        ...this.state.inputValues,
       [event.target.name] : event.target.value
      }
    })
  }


  render(){

    const {allCategories, onSubmit, isPost} = this.props
    const {inputValues} = this.state

    return (
        <form onSubmit={onSubmit}>
            <Field
                name="title"
                type="text"
                label="Título"
                value={inputValues.title}
                onChange={this.handleChange}
            />
            <Field
                name="author"
                type="text"
                label="Autor"
                value={inputValues.author}
                onChange={this.handleChange}        
            />
            <Field
                name="body"
                type="text"
                label="Texto do Post"
                value={inputValues.body}
                onChange={this.handleChange}    
            />
            <div>
                <label htmlFor="category" className="label">Categoria</label>
                <select className="select" name="category" 
                    value={inputValues.category} 
                    onChange={this.handleChange}>
                    <option value="" key={'selectOption'}>Select a category</option>
                        {allCategories && 
                        (allCategories.categories.map((category) => (
                            <option key={category.path} value={category.path}>{category.name}</option>)
                        ))
                    }
                </select>
            </div>
            <button type="submit" disabled={!this.state.inputValues.body && !this.state.inputValues.title} className="buttonSubmit">
                Enviar
            </button>
        </form>
    )
  }
}

 const mapStateToProps = (state, ownProps) => {
    return {
        allCategories: state.categoryInfo.allCategories,
    };
};

export default connect(mapStateToProps)(FormNewPost)