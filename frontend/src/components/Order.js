import React from 'react'


const Order = props => {

    const handleClick = (event, type) => {
        props.onClick(event, props.type)
    }

    return(
        <div>
            <span className="orderUp" type={props.type} onClick={handleClick}>{props.orderNameUp}</span>
            <br />
            <span className="orderDown" type={props.type} onClick={handleClick}>{props.orderNameDown}</span>
        </div>
    )
}

export default Order