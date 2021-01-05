import "./About.css";
import myAvatar from "./img/me.jpg";
import shackNewsLogo from "./img/shack-news.png"

function About() {
  return (
    <div className="about">
        <div className="about__third">
          <img src={shackNewsLogo} className="shack-news-logo" alt="shack-news-logo"/>
        </div>
        <img src={myAvatar} className="about__third_my-photo" alt="Я"/>
        <div className="about__third">12345678901234567890-01234567</div>
    </div>
  );
}

export { About };
