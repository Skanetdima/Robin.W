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
    </header>
  );
};
