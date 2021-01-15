// import React, { Suspense } from 'react';

import "./About.css";
import myAvatar from "./img/About/me.png";
// const myAvatar = React.lazy(() => import("./img/About/me.png"));
// import shackNewsLogo from "./img/About/shack-news.png";

function About() {
  return (
    <div className="parallax about" data-speed="1">
      <div className="about__first-third">
        {/* <img
          className="shack-news-logo"
          src={shackNewsLogo}
          alt="shack-news-logo"
        /> */}
        <p className="about__first-third__my-name">
          Татаринцев Вадим - Frontend разработчик
        </p>
        {/* --------------------------------------------------------- */}
        <div className="content-block">
          <div className="content-block__header">Стек технологий</div>
          <div className="content-block__content">
            <p>HTML5 + CSS</p>
            <p>React / Redux</p>
            <p>Node.js</p>
          </div>
        </div>
        <div className="content-block">
          <div className="content-block__header">Образование</div>
          <div className="content-block__content">
            <p>Высшее: СПбГТИ(ТУ)</p>
            <p>Факультет: САПРиУ</p>
            <p>Специальность: Прикладная информатика</p>
          </div>
        </div>
        <div className="content-block">
          <div className="content-block__header">Языки</div>
          <div className="content-block__content">
            <p>Русский: родной</p>
            <p>Английский: B2</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <img
        className="about__second-third"
        src={myAvatar}
        alt="Тут должен быть я"
      />
      {/* --------------------------------------------------------- */}
      <div className="about__last-third">
        <div className="content-block">
          <div className="content-block__header">Дополнительно</div>
          <div className="content-block__content">
            <p>Город: Санкт-Петербург</p>

            <p>Текщая должность: Системный администратор</p>
          </div>
        </div>

        <div className="content-block">
          <div className="content-block__header">Контакты</div>
          <div className="content-block__content">
            <p>Телефон: +7(951)672-16-62</p>
            <p>
              <a href="https://t.me/Vados_light">
                Telegram
              </a>
            </p>
            <p>E-mail: it-vadim@inbox.ru</p>
            <p>
              <a href="https://vk.com/vados_light">ВКонтакте</a>
            </p>
            <p>
              <a href="https://github.com/VadosLight">GitHub</a>
            </p>
            <p>
              <a href="https://spb.hh.ru/resume/5dc4b590ff0882f0450039ed1f6d77384f5338">
                Hh.ru
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
