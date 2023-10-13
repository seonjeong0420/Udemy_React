 import React, { useState } from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeSelectFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeSelectFilter={changeSelectFilter} />
        
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
        
        {/*  조건부내용 로직 작성하기 1 - 삼항연산자 표기 */}
        {/* {filteredExpenses.length === 0 ? ( expenseContent ) : (filteredExpenses.map((item) => (
            // key 값이 들어가야 react가 개별 아이템을 인지할 수 있음. 목록의 아이템을 매핑할 때는 항상 key를 추가해야 함.
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
          )))
        } */}
        
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