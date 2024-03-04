import { dataNinthContainer } from "./data/dataNinthContainer";
export const NinthContainer = ({ className }) => {
  const divItems = dataNinthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
      <h3>{object.text}</h3>
      <p>{object.name}</p>
      <span>{object.company}</span>
    </li>
  ));
  return (
    <div className={className}>
      <div></div>
      <ul>{divItems}</ul>
    </div>
  );
};
