import React from "react";
import "./Header.css";

export default function MainMenu(){
    return (
        <div className="header">
            <div className="header__top-elements">

                <div className="header__left-elements">
                    <div className="header__level">
                        <div className="header__level__number">23</div>
                        <div className="header__level__text">Уровень</div>
                    </div>

                    <div className="header__name">Вадим Татаринцев</div>
                </div>

                <div className="header__menu">
                    <div className="header__menu_unselected">Об о мне</div>
                    <div className="header__menu_unselected">Навыки</div>
                    <div className="header__menu_unselected">Проекты</div>
                </div>

                <div className="header__right-elements">
                    <div>70/200</div>
                    <div>50.000</div>
                </div>

            </div>

            <hr className="header__undeline"></hr>
        </div>
    )
}