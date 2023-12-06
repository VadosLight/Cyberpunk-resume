import "./Projects.css";
import Project from "./components/Project";

import firstImg from "./img/Projects/first.jpg";
import calcImg from "./img/Projects/calc.jpg";
// import thirdImg from "./img/Projects/second.jpg";
// import lastImg from "./img/Projects/last.png";

function Projects() {
  return (
    <div className="projects parallax" data-speed="1">
      <p className="head">Список проектов</p>
      <div className="projects-list">
        <Project
          text={"СБЕР аналитика"}
          href={"https://sberanalytics.ru/"}
          image={'https://sberanalytics.ru/uploads/logo_landing_7a77a234d6.png'}
        />
        <Project
          text={"X5 Dialog/Logistics"}
          href={"https://dialog.x5.ru/logistics"}
          image={'https://dialog.x5.ru/images/LogisticsPage/logistics-mobile.png'}
        />
        <Project
          text={"Сайт - Резюме"}
          href={"https://cyberpunk-resume.vercel.app/"}
          image={firstImg}
        />
        <Project
          text={"Калькулятор с самописной математикой"}
          href={"https://vadoslight.github.io/Andersen_lab_7/"}
          image={calcImg}
        />
        {/* <Project
          text={"Поиск фильмов (React + Redux)"}
          href={"https://react-cinema.vercel.app/"}
          image={lastImg}
        /> */}
        {/* <Project
          text={"Прочие проекты"}
          href={"https://github.com/VadosLight?tab=repositories"}
          image={secondImg}
        />
        <Project
          text={"В разработке"}
          href={"/"}
          image={lastImg}
        />
        <Project
          text={"В разработке"}
          href={"/"}
          image={lastImg}
        /> */}
      </div>
    </div>
  );
}

export { Projects };
