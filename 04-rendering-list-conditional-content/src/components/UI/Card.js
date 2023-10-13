import React from 'react'
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return (
    // props.children : children은 예약어
    <div className={classes}>{props.children}</div>
  )
}

export default Card