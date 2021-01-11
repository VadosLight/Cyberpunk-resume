import "./About.css";
import myAvatar from "./img/me.png";
import shackNewsLogo from "./img/shack-news.png";

function About() {
  return (
    <div className="parallax about" data-speed="1">
      <div className="about__first-third">
        <img
          className="shack-news-logo"
          src={shackNewsLogo}
          alt="shack-news-logo"
        />
        <p className="myName">Татаринцев Вадим - Frontend разработчик</p>
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
      <img
        className="about__second-third"
        src={myAvatar}
        alt="Тут должен быть я"
      />
      <div className="about__last-third">
        <p>Контакты:</p>
      </div>
    </div>
  );
}

export { About };
