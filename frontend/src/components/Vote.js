import React from 'react'


const Vote  = props => {
 return(
     <div className="voteContainer">
        <a className="downVote" onClick={props.onClick}>down vote</a>
        <a className="upVote" onClick={props.onClick}>up vote</a>
     </div>
 )
}

export default Vote