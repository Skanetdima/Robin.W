import footerLogo from "./images/Vector_2_.svg";
import { dataFooterImg } from "./data/dataFooter";

export const Footer = () => {
  const imgItems = dataFooterImg.map((object) => (
    <li key={object.id}>
      <a href="#">
        <img src={object.image} />
      </a>
    </li>
  ));
  return (
    <footer>
      <div>
        <img src={footerLogo} />
        <ul>{imgItems}</ul>
      </div>
      <ul></ul>
      <ul></ul>
    </footer>
  );
};
