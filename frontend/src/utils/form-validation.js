export const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.author) {
    errors.author = 'Required'
    }
    if (!values.category) {
        errors.category = 'Required'
    }      
    if (!values.body) {
        errors.body = 'Required'
    }        
    return errors
  }