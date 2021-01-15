import "./Skills.css";

function Skills() {
  return (
    <div className="skills parallax" data-speed="1">
      <div className="content-block">
        <div className="content-block__header">Front-end</div>
        <div className="content-block__content">
          <p>HTML5/CSS</p>
          <p>JavaScript</p>
          <p>React/Redux</p>
          <p>TypeScript</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Back-end</div>
        <div className="content-block__content">
          <p>Node.js</p>
          <p>123</p>
          <p>123</p>
        </div>
      </div>


      <div className="content-block">
        <div className="content-block__header">Базы данных</div>
        <div className="content-block__content">
          <p>PostgreSQL</p>
          <p>SQLite</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Дополнительно</div>
        <div className="content-block__content">
          <p>Методолгоия БЭМ</p>
          <p>SPA</p>
          <p>Photoshop</p>
        </div>
      </div>


    </div>
  );
}

export { Skills };
