import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
// import { ReactDOM } from 'react-dom/client';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}


const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* 첫번째 인자 : 렌더링 되어야 하는 리액트 노드 */}
      {/* 두번째 인자 : 포인터, 실제로 렌더링 되어야 하는 노드 */}
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
