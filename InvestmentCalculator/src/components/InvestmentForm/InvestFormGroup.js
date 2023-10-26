import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  &+* {
    margin-top: 2rem;
  }
`;

const InvestFormGroup = (props) => {
  return (
    <FormGroup>{props.children}</FormGroup>
  )
}

export default InvestFormGroup