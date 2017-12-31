import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderField} from '../components/RenderField'
import {validate} from '../utils/form-validation'

let Form = props => {

    const {handleSubmit, allCategories, submitting} = props

    return (
        <form onSubmit={handleSubmit}>

            <Field
            name="title"
            type="text"
            component={renderField}
            label="Título"
          />

          <Field
          name="author"
          type="text"
          component={renderField}
          label="Autor"
        />

        <Field
        name="body"
        type="text"
        component={renderField}
        label="Texto do Post"
      />

            <label htmlFor="category" className="form-control-label">Categoria:</label>
            <Field name="category" component="select">
                <option value="">Select a category</option>
                {allCategories && 
                (allCategories.categories.map((category) => (
                    <option key={category.path} value={category.path}>{category.name}</option>)
                ))
                }
          </Field>

          <button type="submit" disabled={submitting}>
          Submit
        </button>

        </form>
    )
}

//  Form = reduxForm({
//     // a unique name for the form
//     form: 'contact'
//   })(Form)

  export default reduxForm({
    form: 'form', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
  })(Form)

//   export default Form
