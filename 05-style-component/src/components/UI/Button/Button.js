import React from 'react';
import styles from'./Button.module.css'; // css모듈을 사용하기 위해 css파일을 import하는 방법

// // Styled Component 방식으로 버튼 스타일링하기
// // unique한 클래스 네이밍을 지정할 수 있음
// import styled from 'styled-components';
// const Button = styled.button`
//   font:inherit;
//   width: 100%;
//   padding: .5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background-color: #8b005d;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {outline: focus;}
//   &:hover, &:active {
//     background-color: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    // className :: css module을 사용하는 방법
    // 클래스명을 카멜케이스 또는 언더바는 그대로 사용 가능
    // 클래스명을 하이픈 사용하는 경우 : className={styles['button-new']}
    <button type={props.type} className={styles.button_new} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
