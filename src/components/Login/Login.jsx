import React, { useState } from "react";
import './Login.css';

import SectionRegisterOrLogin from "../MyComponents/SectionRegisterOrLogin/SectionRegisterOrLogin";

function Login({ nameForm, handleLogin, loading, setErrorForm, errorForm,  }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [errorInput, setErrorInput] = useState({});

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setErrorInput((allInputBefore) => { return { ...allInputBefore, [evt.target.name]: handleValidateInput(evt) } });
    handleVaildateForm(evt);
  };

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setErrorInput((allInputBefore) => {
      return { ...allInputBefore, [evt.target.name]: handleValidateInput(evt) }
    });
    handleVaildateForm(evt);
  };

  function handleVaildateForm(evt) {
    setValid(evt.target.form.checkValidity());
    setErrorForm(false);
  };

  function handleValidateInput(evt) {
    const validInput = !evt.target.validity.valid;
    return validInput;
  };

  function onLogin(event) {
    event.preventDefault();
    handleLogin({
      email: email,
      password: password,
    })
  };

  return (
    <SectionRegisterOrLogin
      nameForm={nameForm}
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      onSubmit={onLogin}
      loading={loading}
      errorInput={errorInput}
      valid={valid}
      setErrorForm={setErrorForm}
      errorForm={errorForm}
    />
  );
};

export default Login;