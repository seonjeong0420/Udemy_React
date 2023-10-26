import React, { useState } from 'react';
import styled from 'styled-components';
import InvestmentInput from './InvestmentInput';
import InvestFormGroup from './InvestFormGroup';
import Button from '../UI/Button';

const FormStyle = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

const initialUserInput = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10 //저축기간
}

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [input]: +value // '+'는 문자열 값을 숫자로 변환
      }
    });
  }

  const calculateHandler = (event) => {
    event.preventDefault();

    // 부모 App.js로 데이터 전달
    props.onCalculate(userInput);
  };

  const formResetHandler = () => {
    setUserInput(initialUserInput)
  }

  return (
    <FormStyle onSubmit={calculateHandler}>
      
      <InvestFormGroup>
        <InvestmentInput id="current-savings" value={userInput['current-savings']} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} label="Current Savings ($)" />
        <InvestmentInput id="yearly-contribution" value={userInput['yearly-contribution']} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} label="Yearly Savings ($)" />
      </InvestFormGroup>

      <InvestFormGroup>
      <InvestmentInput id="expected-return" value={userInput['expected-return']} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} label="Expected Interest (%, per year)" />
        <InvestmentInput id="duration" value={userInput['duration']} onChange={(event) => inputChangeHandler('duration', event.target.value)} label="Investment Duration (years)" />
      </InvestFormGroup>
      
      <div className="actions">
        <Button type="reset" text="Reset" onClick={formResetHandler} className="buttonAlt" />
        <Button type="submit" text="Calculate" className="button" />
      </div>

    </FormStyle>
  )
}

export default InvestmentForm