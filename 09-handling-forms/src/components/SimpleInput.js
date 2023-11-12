import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  /* 유효성 검증
  1. 사용자의 모든 키 입력마다 확인하고, 이 값들을 어떤 상태 변수에 저장하여 검증하는 방법 (useState)
  2. ref를 이용하여 사용자가 입력값을 모두 입력했을 때 입력 값을 받아와서 검증하는 방법 (useRef)
  */

  /**
   * useState와 useRef 중 어떤 Hook으로 유효성 검증을 할까?
   * 폼이 제출되었을 때, 한번만 필요한 데이터라면 모든 키 입력마다 상태값을 업데이트 하기엔 조금 지나치고 불필요하므로 ref가 낫다.
   * 
   * 반면에 즉각적인 유효성 검증을 위해 키 입력마다 입력값이 필요하다면 useState를 사용하는 것이 낫다.
   * 또한 입력값을 초기화 하고 싶을 경우에도 useState가 낫다. setEnteredName('') + <input value={enteredName} />
   */

  /** 커스텀훅 사용하기
   * 재사용이 가능한 function들을 use-input.js에 넣고 재사용하기
   */
  const { value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput} = useInput(value => value.trim() !== '');
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false); // 사용자가 input을 건드렸는지 여부 check
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const { value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput } = useInput(value => value.includes("@"));
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  
  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // }
  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    /**
     * 입력값일 없을 때 유효성 검증
     */
    if(!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    /** input값 초기화 */
    resetNameInput();
    // setEnteredName("");
    // setEnteredNameTouched(false);

    resetEmailInput();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
        
        {/* 입력값일 없을 때 유효성 검증 - useState 사용 */}
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        
        {/* 입력값일 없을 때 유효성 검증 - useState 사용 */}
        {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
