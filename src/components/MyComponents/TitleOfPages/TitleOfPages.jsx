import React from "react";
import './TitleOfPages.css';

function TitleOfPages({ title, name }) {
  return (
    <h2 className={`${name}__title`}>{title}</h2>
  )
};

export default TitleOfPages;