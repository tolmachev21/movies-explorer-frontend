import React from "react";
import './Main.css';

import NavTab from '../Main/NavTab/NavTab';
import Promo from '../Main/Promo/Promo';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe.jsx';
import Portfolio from "./Portfolio/Portfolio";


function Main() {
  return (
    <main className="main">
      <NavTab />
      <Promo />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
};

export default Main;