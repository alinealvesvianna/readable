import React, {Component} from 'react'
import Field from '../components/Field'
import {validate} from '../utils/form-validation'



class Form extends Component {

  state = {
    inputValues: {}
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

    const {allCategories, submitting, onSubmit} = this.props
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

          <label htmlFor="category" className="form-control-label">Categoria:</label>
          <select name="category" 
            value={inputValues.category} 
            onChange={this.handleChange}>
              <option value="" key={'selectOption'}>Select a category</option>
              {allCategories && 
              (allCategories.categories.map((category) => (
                  <option key={category.path} value={category.path}>{category.name}</option>)
              ))
              }
          </select>

          <button type="submit" disabled={submitting}>
          Submit
        </button>

        </form>
    )

  }

}


  export default Form