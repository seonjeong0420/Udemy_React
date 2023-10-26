import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

const StyleErrorModal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,.25);
.inner {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 200px;
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
}
header {
  padding: 10px;
  background-color: #7142ff;
  color: #fff;
}
section {
  padding: 10px;
}
.txt {
  margin: 20px 0;
  text-align: center;
}
`;

const ErrorModal = (props) => {
  const modalRef = useRef(null); // currentTarget을 지정하기 위한 useRef()
  const modalOutsideClick = (event) => {
    if(modalRef.current === event.target) {
      props.closeModalClickHandler(false);
    }
  }

  const closeModalClickHandler = () => {
    props.closeModalClickHandler(false);
  }

  return (
    <StyleErrorModal ref={modalRef} onClick={(event) => modalOutsideClick(event)}>
      <div className="inner">
        <header>
          <h1>Invalid Data</h1>
        </header>
        <section>
          <p className="txt">Please Enter a valid name and age (non-empty values).</p>
          <Button btnType="button" onClick={closeModalClickHandler}>OKAY</Button>
        </section>
      </div>
    </StyleErrorModal>
  )
}

export default ErrorModal