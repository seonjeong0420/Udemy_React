import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: linear-gradient(180deg, #1f584b, #17493d);
  color: #c2e9e0;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  &:hover {
    background: linear-gradient(180deg, #1b5346, #113c32);
  }
  &.buttonAlt {
    background: transparent;
    &:hover {
      background: transparent;
      color: #91e1d0;
    }
  }
`;

const Button = (props) => {
  return (
    <ButtonStyle type={props.type} className={props.className} onClick={props.onClick}>{props.text}</ButtonStyle>
  )
}

export default Button;