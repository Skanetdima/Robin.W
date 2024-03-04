import { dataTenthContainer } from "./data/dataTenthContainer";
export const TenthContainer = ({ className }) => {
  const ulItems = (name) => {
    return (
      <li>
        <a className="button" href="#">
          {name}
        </a>
      </li>
    );
  };
  const divItems = dataTenthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
    </li>
  ));
  return (
    <div className={className}>
      <div>
        <h2 className="heading2">Photography</h2>
        <p className="body1">
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.
        </p>
        <ul>
          {ulItems("ITALY")}
          {ulItems("AUSTRALIA")}
          {ulItems("INDIA")}
          {ulItems("BRAZIL")}
        </ul>
      </div>
      <ul>{divItems}</ul>
    </div>
  );
};
