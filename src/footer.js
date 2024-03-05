import footerLogo from "./images/Vector_2_.svg";
import { dataFooterImg, dataFooterLinks } from "./data/dataFooter";

export const Footer = () => {
  const imgItems = dataFooterImg.map((object) => (
    <li key={object.id}>
      <a href="#">
        <img src={object.image} />
      </a>
    </li>
  ));
  const linksItems = dataFooterLinks.map((object) => (
    <li key={object.id}>
      <a href="#">{object.name}</a>
    </li>
  ));
  return (
    <footer>
      <div>
        <img src={footerLogo} />
        <ul>{imgItems}</ul>
      </div>
      <ul>{linksItems}</ul>

      <span className="body2">
        Not Copyright 2020 • Robin Williams. Webflow cloneable
      </span>
    </footer>
  );
};
