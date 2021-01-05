import "./About.css";
import myAvatar from "./img/me.jpg";
import shackNewsLogo from "./img/shack-news.png";

function About() {
  return (
    <div className="parallax about" data-speed="1">
      <div className=" about__third">
        <img
          className=" shack-news-logo"
          src={shackNewsLogo}
          alt="shack-news-logo"
        />
      </div>
      <img className=" about__third_my-photo" src={myAvatar} alt="Я" />
      <div className=" about__third">12345678901234567890-01234567</div>
    </div>
  );
}

export { About };
