// import { useRef } from "react";
// import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation,js'
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  
  // const [enteredEmail, setEnterredEmail] = useState('');
  // const [enteredPassword, setEnterredPassword] = useState('');

  // const [enteredValues, setEnterredValues] = useState({
  //   email: '', 
  //   password: '',
  // })
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // })

  // function handleEmailChange(event){
  //   setEnterredEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setEnterredPassword(event.target.value);
  // }

  
  const {value: emailValue, 
    handleInputBlur: handleEmailBlur, handleInputChange:handleEmailInput, 
    hasError: emailHasError,
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {value: passwordValue, 
    handleInputBlur: handlePasswordBlur, handleInputChange:handlePasswordInput,
    hasError: passwordHasError
   } = useInput('', (value) => {
    return hasMinLength(value, 8);
  });


  // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 8) ;
  
  
  function handleSubmit(event) {
    event.preventDefault();
    // const enteredEmail = email.current.value;
    // const enteredPassword = password.current.value;

    if(emailHasError || passwordHasError){
      return;
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label='Email' id='email' name='email' type='email' 
        onBlur={handleEmailBlur} 
        onChange={handleEmailInput}
        value={emailValue}
        error={emailHasError && 'Please enter a valid email!'}/>

        <Input label='Password' id='password' name='password' type='password' 
        onBlur={handlePasswordBlur} 
        onChange={handlePasswordInput}
        value={passwordValue}
        error={passwordHasError && 'Please enter a valid password!'}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
