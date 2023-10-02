import React, { useState } from "react";
import './Login.css';

import SectionRegisterOrLogin from "../MyComponents/SectionRegisterOrLogin/SectionRegisterOrLogin";

function Login({ nameForm, handleLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value)
  };

  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  };

  function onLogin(event) {
    event.preventDefault();
    handleLogin()
  };

  return (
    <SectionRegisterOrLogin nameForm={nameForm} email={email} password={password} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} onSubmit={onLogin} />
  );
};

export default Login;