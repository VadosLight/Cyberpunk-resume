import "./Skills.css";
const CODE_WARS = "https://www.codewars.com/users/VadosLight/badges/large";

function Skills() {
  return (
    <div className="skills parallax" data-speed="1">
      <div className="content-block">
        <div className="content-block__header">Front-end</div>
        <div className="content-block__content">
          <p>HTML5 / CSS3 </p>
          <p>JavaScript </p>
          <p>React / Redux </p>
          <p>TypeScript </p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Back-end</div>
        <div className="content-block__content">
          <p>Node.js </p>
          <p>Express.js</p>
          <p>Web Socket</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Базы данных</div>
        <div className="content-block__content">
          <p>PostgreSQL </p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Дополнительно</div>
        <div className="content-block__content">
          <p>Основная методолгоия: БЭМ</p>
          <p>SPA</p>
          <p>Photoshop</p>
          <a href="https://www.codewars.com/users/VadosLight" target="_blank">
            <img src={CODE_WARS} alt="code_wars" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Skills };
