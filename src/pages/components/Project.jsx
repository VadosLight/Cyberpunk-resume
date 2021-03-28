import React from "react";

import "./Project.css";

export default function Project(params) {
  return (
    // eslint-disable-next-line
    <a href={params.href} className="project" target="_blank">
      <div className="project__description">{params.text}</div>
      <img src={params.image} alt="Проект" />
    </a>
  );
}
