import "./Projects.css";

import firstImg from "./img/Projects/first.jpg";
import secondImg from "./img/Projects/second.jpg";
// import thirdImg from "./img/Projects/second.jpg";
import lastImg from "./img/Projects/last.png";

function Projects() {
  return (
    <div className="projects parallax" data-speed="1">
      <p className="head">Список проектов</p>
      <div className="projects-list">
        <a href="https://cyberpunk-resume.vercel.app/" className="project">
          <div className="project__description">Сайт - Резюме</div>
          <img src={firstImg} alt="Проект" />
        </a>

        <a
          href="https://github.com/VadosLight?tab=repositories"
          className="project"
        >
          <div className="project__description">Прочие проекты</div>
          <img src={secondImg} alt="Проект" />
        </a>

        <a href="/" className="project">
          <div className="project__description">В разработке</div>
          <img src={lastImg} alt="Проект" />
        </a>

        <a href="/" className="project">
          <div className="project__description">В разработке</div>
          <img src={lastImg} alt="Проект" />
        </a>
      </div>
    </div>
  );
}

export { Projects };
