import { dataFifthContainer } from "./data/dataFifthContainer";
export const FifthContainer = ({ className }) => {
  const divItems = dataFifthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
    </li>
  ));
  return (
    <div className={className}>
      <ul>{divItems}</ul>
    </div>
  );
};
