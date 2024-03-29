import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import coinIco from "./img/coin.png";
import kgIco from "./img/kg.png";
import shackNewsLogo from "./img/shack-news.png";

function myAge() {
  return Math.floor(
    (new Date() - new Date(1997, 12, 9).getTime()) / 3.15576e10
  );
}

export default function MainMenu() {
  return (
    <div className="header">
      <div className="header__top-elements">
        <div className="header__left-elements">
          <div className="header__level">
            <div className="header__level__number">{myAge()}</div>
            <div className="header__level__text">Уровень</div>
          </div>

          <div className="header__name">Вадим Татаринцев</div>
        </div>

        <div className="header__menu">
          <Link to="/" className="header__menu-unselected">
            Обо мне
          </Link>
          <Link to="/skills" className="header__menu-unselected">
            Навыки
          </Link>
          <Link to="/projects" className="header__menu-unselected">
            Проекты
          </Link>
        </div>

        <div className="header__right-elements">
          <div>
            <img class="header__icon icon-weight" alt="weight" src={kgIco} />
            70/200
          </div>
          <div>
            <img class="header__icon" alt="salary" src={coinIco} />
            330.000
          </div>
        </div>
      </div>
      <hr className="header__underline"></hr>
      <img
        className="shack-news-logo"
        src={shackNewsLogo}
        alt="shack-news-logo"
      />
    </div>
  );
}
