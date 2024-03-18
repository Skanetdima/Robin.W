import headerLogo from "./images/Vector_2_.svg";
import { dataNav } from "./data/dataNav.js";
export const Header = ({ className }) => {
  const listItems = dataNav.map((person) => (
    <li key={person.id}>
      <a href="#">{person.name}</a>
    </li>
  ));
  return (
    <header className={className}>
      <div className="logo">
        <img src={headerLogo} />
      </div>
      <ul>{listItems}</ul>
      <div
        onClick={() => {
          const body = document.querySelector("body");
          const navMenu = document.querySelector("body .header ul");
          navMenu.classList.toggle("active");
          body.classList.toggle("scrollActive");
        }}
        className="hamburger"
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};
