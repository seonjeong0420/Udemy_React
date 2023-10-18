import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span className={styles.checkbox__item}>{props.title}</span>
    </label>
  )
}

export default Checkbox