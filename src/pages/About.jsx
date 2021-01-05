import "./About.css";
import myAvatar from "./img/me.jpg";
import shackNewsLogo from "./img/shack-news.png";

document.addEventListener("mousemove", parallax);
function parallax(e) {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

    this.querySelectorAll(".parallax").forEach((parallax) => {
      let speed = 0;
      if (width >= 800) {
          speed = parallax.getAttribute("data-speed");
      }
      const x = (width - e.pageX * speed) / 100;
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
