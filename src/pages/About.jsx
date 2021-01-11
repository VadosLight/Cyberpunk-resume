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
        <p>
          Обо мне
        </p>
      </div>
      <img className="about__second-third" src={myAvatar} alt="Тут должен быть я" />
      <div className="about__last-third">
        <p>
          Контакты:
        </p>
      </div>
    </div>
  );
}

export { About };
