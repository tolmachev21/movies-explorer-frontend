import React, { useState } from "react";
import './Register.css';
import SectionRegisterOrLogin from "../MyComponents/SectionRegisterOrLogin/SectionRegisterOrLogin";

function Register({ nameForm, handleRegister, loading, setErrorForm, errorForm }) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [errorInput, setErrorInput] = useState({});

  function handleChangeName(evt) {
    setUserName(evt.target.value);
    setErrorInput((allInputBefore) => { return { ...allInputBefore, [evt.target.name]: handleValidateInput(evt) } });
    handleVaildateForm(evt);
  };

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

  function onRegister(event) {
    event.preventDefault();
    handleRegister({
      email: email,
      password: password,
      name: userName,
    })
  };

  return (
    <SectionRegisterOrLogin
      nameForm={nameForm}
      userName={userName}
      email={email}
      password={password}
      handleChangeName={handleChangeName}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      onSubmit={onRegister}
      loading={loading}
      errorInput={errorInput}
      valid={valid}
      setErrorForm={setErrorForm}
      errorForm={errorForm}
    />
  );
};

export default Register;