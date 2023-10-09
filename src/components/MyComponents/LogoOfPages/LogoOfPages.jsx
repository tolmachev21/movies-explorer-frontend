import React from "react";
import './LogoOfPages.css';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.svg'

function LogoOfPages() {
  return (
      <Link to="/" className="component__logo-link">
        <img className="component__logo" src={logo} alt="Логотип" />  
      </Link> 
  );
};

export default LogoOfPages;