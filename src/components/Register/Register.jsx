import React, { useState } from "react";
import './Register.css';
import SectionRegisterOrLogin from "../MyComponents/SectionRegisterOrLogin/SectionRegisterOrLogin";

function Register({ nameForm, handleRegister }) {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(evt) {
    setUserName(evt.target.value)
  };

  function handleChangeEmail(evt) {
    setEmail(evt.target.value)
  };

  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  };

  function onRegister(event) {
    event.preventDefault();
    handleRegister()
  };

  return (
    <SectionRegisterOrLogin nameForm={nameForm} userName={userName} email={email} password={password} handleChangeName={handleChangeName} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} onSubmit={onRegister} />
  );
};

export default Register;