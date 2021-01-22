import React from "react";

import "./Project.css"

export default function Project(params) {
    return(
        <a href={params.href} className="project">
          <div className="project__description">{params.text}</div>
          <img src={params.image} alt="Проект" />
        </a>
    )
}