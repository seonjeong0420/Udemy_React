import React from 'react'

const ConceptsList = (props) => {
  return (
    <li ley={props.id} className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}

export default ConceptsList