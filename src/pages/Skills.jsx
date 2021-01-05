import "./Skills.css";

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".parallax").forEach((parallax) => {
    const speed = parallax.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function Skills() {
  return (
    <div className="skills parallax" data-speed="1">
      Навыки
    </div>
  );
}

export { Skills };
