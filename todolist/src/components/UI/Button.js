import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
  return (
    <button type={props.type} className={styles[props.class]}>{props.text}</button>
  )
}

export default Button