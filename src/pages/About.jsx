import "./About.css";
import myAvatar from "./img/me.jpg";
import shackNewsLogo from "./img/shack-news.png";

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".parallax").forEach((parallax) => {
    let speed = parallax.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

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
