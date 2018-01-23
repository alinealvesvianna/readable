import React, {Component} from 'react'
import Field from '../components/Field'

class FormEditPost extends Component {

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
        const {post} = this.props
        this.setState({
            inputValues:{
                title : post.title,
                author: post.author,
                body: post.body,
                category: post.category,
                voteScore: post.voteScore,
            } 
        })
    }


  render(){

    const {allCategories, onSubmit} = this.props
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
                name="voteScore"
                type="hidden"
                value={inputValues.voteScore}
            />

        <Field
            name="body"
            type="text"
            label= "Texto do Post"
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


  export default FormEditPost