import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        // key 값이 들어가야 react가 개별 아이템을 인지할 수 있음. 목록의 아이템을 매핑할 때는 항상 key를 추가해야 함.
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </ul>
  )
}

export default ExpensesList