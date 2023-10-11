import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeSelectFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeSelectFilter={changeSelectFilter} />

        {props.items.map((item) => {
          return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        })}
        
        {/* 방법2) 구조분해할당으로 데이터 props 전달 받는 방식 */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
      </Card>
    </div>
  )
}

export default Expenses