import "./Skills.css";

function getNStars(n = 0) {
  return "";//убираю вездочки
  // eslint-disable-next-line
  return 0 <= n && n <= 5
    ? String.fromCodePoint(9733).repeat(n) +
        String.fromCodePoint(9734).repeat(5 - n)
    : "";
}

function Skills() {
  return (
    <div className="skills parallax" data-speed="1">
      <div className="content-block">
        <div className="content-block__header">Front-end</div>
        <div className="content-block__content">
          <p>HTML5 / CSS3 {getNStars(3)}</p>
          <p>JavaScript {getNStars(2)}</p>
          <p>React / Redux {getNStars(3)}</p>
          <p>TypeScript {getNStars(2)}</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Back-end</div>
        <div className="content-block__content">
          <p>Node.js {getNStars(1)}</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Базы данных</div>
        <div className="content-block__content">
          <p>PostgreSQL {getNStars(2)}</p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block__header">Дополнительно</div>
        <div className="content-block__content">
          <p>Основная методолгоия: БЭМ</p>
          <p>SPA</p>
          <p>Photoshop</p>
        </div>
      </div>
    </div>
  );
}

export { Skills };
