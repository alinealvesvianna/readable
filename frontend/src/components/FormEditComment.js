import React, {Component} from 'react'
import Field from '../components/Field'


class FormEditComment extends Component {

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

  componentWillMount(){
      const {comment} = this.props
      if (this.props.comment){
        this.setState({
            inputValues:{
                author: comment.author,
                body: comment.body,
                voteScore: comment.voteScore,
            }
      })
    }
  }

  render(){

    const {onSubmit} = this.props
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
                name="voteScore"
                type="hidden"
                value={inputValues.voteScore}      
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



  export default FormEditComment