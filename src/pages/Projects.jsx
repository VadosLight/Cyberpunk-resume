import "./Projects.css";

import firstImg from "./img/Projects/first.jpg";
import secondImg from "./img/Projects/second.jpg";
import thirdImg from "./img/Projects/second.jpg";
import lastImg from "./img/Projects/last.png";

function Projects() {
  return (
    <div className="projects parallax" data-speed="1">
      <p className="head">Список проектов</p>
      <div className="projects-list">
        <a href="/" className="project">
          <div className="project__description">
            <p className="project__description__name">Сайт - Резюме</p>
          </div>
          <img src={firstImg} alt="Проект" />
        </a>

        <a
          href="https://github.com/VadosLight?tab=repositories"
          className="project"
        >
          <div className="project__description">
            <p className="project__description__name">Прочие проекты</p>
          </div>
          <img src={secondImg} alt="Проект" />
        </a>

        {/* <a href="/" className="project">
          <div className="project__description">
            <p className="project__description__name">Some name</p>

          </div>
          <img src={thirdImg} alt="Проект" />
        </a> */}

        <a href="" className="project">
          <div className="project__description">
            <p className="project__description__name">В разработке</p>
          </div>
          <img src={lastImg} alt="Проект" />
        </a>
      </div>
    </div>
  );
}

export { Projects };
