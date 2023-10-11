import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // title = "Updated ! ";
    setTitle('Updated');
  }

  return (
    <Card className="expense-item">
      
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}

      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button className="" onClick={clickHandler}>Change Title</button>
    </Card>

    // <div className="expense-item">
    //   <div>{props.expense.date.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{props.expense.title}</h2>
    //     <p className="expense-item__price">${props.expense.amount}</p>
    //   </div>
    // </div>
  )
}


// 방법2) 구조분해할당으로 데이터 props 전달 받는 방식
// function ExpenseItem({date, title, amount}) {
//   return (

//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <p className="expense-item__price">${amount}</p>
//       </div>
//     </div>
//   )
// }

export default ExpenseItem