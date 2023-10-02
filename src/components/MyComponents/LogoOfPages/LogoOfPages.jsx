import React from "react";
import './LogoOfPages.css';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.svg'

function LogoOfPages() {
  return (
      <Link to="/">
        <img className="register__logo" src={logo} alt="Логотип" />  
      </Link> 
  );
};

export default LogoOfPages;