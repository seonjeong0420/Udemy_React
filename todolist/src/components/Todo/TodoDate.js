import React from 'react';
import styles from './TodoDate.module.scss';

function TodoDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: 'long'});

  return (
    <header className={styles.header}>
      <h1 className={styles.header__date}>{dateString}</h1>
      <span className={styles.header__day}>{dayName}</span>
    </header>
  )
}

export default TodoDate