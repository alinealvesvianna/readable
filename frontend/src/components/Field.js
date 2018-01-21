import React from 'react'

const Field = props => {
  
  return (
    <div className="container-form">
        <label className="label">{props.label}</label>
        <input className="input" placeholder={props.label} name={props.name} 
            type={props.type} 
            value={props.value}
            onChange={props.onChange} />
  </div>
  )
}
 

export default Field