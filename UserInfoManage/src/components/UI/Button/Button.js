import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 17px 0;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  background-color: #111;
  &:active {
    background-color: #555;
  }
`;

const Button = ({btnType, children, onClick}) => {
  return (
    <StyleButton type={btnType} onClick={onClick}>{children}</StyleButton>
  )
}

export default Button;