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

  componentWillMount(){
      const {post, comment} = this.props
      if (this.props.post){
          this.setState({
              inputValues:{
                  title : post.title,
                  author: post.author,
                  body: post.body,
                  category: post.category
              } 
        })
      }
      if (this.props.comment){
        this.setState({
            inputValues:{
                title : comment.title,
                author: comment.author,
                body: comment.body,
            } 
      })
    }
  }

  render(){

    const {allCategories, submitting, onSubmit, type, post, comment} = this.props
    const {inputValues} = this.state

    return (
        <form onSubmit={onSubmit}>

        {type === 'post' && (

          <Field
            name="title"
            type="text"
            label="Título"
            value={inputValues.title}
            onChange={this.handleChange}
          />
        )}
          <Field
            name="author"
            type="text"
            label="Autor"
            value={inputValues.author}
            onChange={this.handleChange}        
        />

        {(post && comment) && (
            <Field
                name="voteScore"
                type="hidden"
                value={post ? post.voteScore : comment.voteScore}      
            />
        )}

        <Field
            name="body"
            type="text"
            label={type === 'post' ? 'Texto do Post' : 'Texto do Comentário'}
            value={inputValues.body}
            onChange={this.handleChange}    
        />

        {type === 'post' && (
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
        )}

          <button type="submit" disabled={submitting} className="buttonSubmit">
              Enviar
         </button>

        </form>
    )

  }

}

Form.defaultProps = {
    type: 'post',
  };


  export default Form