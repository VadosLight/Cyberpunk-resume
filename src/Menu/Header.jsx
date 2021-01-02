import React from "react";
import "./Header.css";

function handleClick(e) {
    e.preventDefault();
    alert("Произошло НАЖАТИЕ!")
}

function myAge(){
        return Math.floor((new Date() - new Date(1997, 12, 9).getTime()) / 3.15576e+10) + 1;  
}

export default function MainMenu(){
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
                    <a href="/about" className="header__menu_unselected"> Обо мне</a>
                    <a href="/skills" className="header__menu_unselected">Навыки</a>
                    <a href="/projects" className="header__menu_unselected">Проекты</a>
                </div>

                <div className="header__right-elements">
                    <div><img class="header__icon icon_weight" 
                    alt="weight"
                    src="https://cdn.iconscout.com/icon/free/png-512/weight-345-1176808.png"/> 70/200</div>
                    <div><img class="header__icon" 
                    alt="salary"
                    src="https://cdn.iconscout.com/icon/free/png-256/bitcoin-1824299-1545921.png"/>50.000</div>
                </div>
            </div>

            <hr className="header__undeline"></hr>
        </div>
    )
}