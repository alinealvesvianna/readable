import React, {Component} from 'react'
import Field from '../components/Field'

class FormNewComment extends Component {

  state = {
    inputValues: {},
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

    const { onSubmit} = this.props
    const {inputValues} = this.state

    return (
        <form onSubmit={onSubmit}>
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
                label="Texto do Comentário"
                value={inputValues.body}
                onChange={this.handleChange}    
            />
            <button type="submit" disabled={!this.state.inputValues.body && !this.state.inputValues.title} className="buttonSubmit">
                Enviar
            </button>
        </form>
    )
  }
}

export default FormNewComment