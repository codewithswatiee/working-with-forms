// import { useRef } from "react";
import { useState } from "react";

export default function StateLogin() {
  
  // const [enteredEmail, setEnterredEmail] = useState('');
  // const [enteredPassword, setEnterredPassword] = useState('');

  const [enteredValues, setEnterredValues] = useState({
    email: '', 
    password: '',
  })
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  // function handleEmailChange(event){
  //   setEnterredEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setEnterredPassword(event.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnterredValues(prevValues => ({
      ...prevValues,
      [identifier]: value,
    }))

    setDidEdit(prevEdit => ({
      ...prevEdit, 
      [identifier]: false,
    }))
  } 


  // const email = useRef();
  // const password = useRef();
  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }))
  }


  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    // const enteredEmail = email.current.value;
    // const enteredPassword = password.current.value;


  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
