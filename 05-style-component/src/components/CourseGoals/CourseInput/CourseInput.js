import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  &:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
}
&.invalid input {
  border-color: red;
  background-color: rgb(255, 202, 196);
}
&.invalid label {
  color: red;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(enteredValue.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
      
      {/* 
      css Module로 스타일 지정하는 방법
      1. import styles from'./CourseInput.module.css'; // css모듈을 사용하기 위해 css파일을 import하는 방법
       */}
      {/* <div className={`${styles['form-control]} ${!isValid && styles.invalid}`} */}
      
      {/* styled Component로 스타일 지정하는 방법 */}
      {/* <FormControl className={!isValid && 'invalid'}> */}

      {/* styled Component에서 props를 사용하여 스타일 지정하는 방법 */}
      <FormControl invalid={!isValid}> 
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
