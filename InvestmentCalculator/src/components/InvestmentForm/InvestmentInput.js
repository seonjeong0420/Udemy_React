import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
`;

const LabelStyle = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const InvestmentInput = (props) => {
  return (
    <div>
      <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
      <InputStyle type="number" value={props.value} onChange={props.onChange} id={props.id} />
    </div>
  )
}

export default InvestmentInput