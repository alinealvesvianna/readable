import React from 'react'

const Field = props => {
  
  return (
    <div>
    <label>{props.label}</label>
    <div>
      <input placeholder={props.label} name={props.name} 
        type={props.type} 
        onChange={props.onChange} />
    </div>
  </div>
  )
}
 

export default Field