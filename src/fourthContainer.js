import { dataFourthContainer } from "./data/dataFourthContainer";
export const FourthContainer = ({ className }) => {
  const divItems = dataFourthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
      <h3 className="heading3">{object.name}</h3>
      <p className="pargraph">{object.text}</p>
    </li>
  ));
  return (
    <div className={className}>
      <div className="fourthContainerHeaderContainer"></div>
      <ul className="fourthContainerItems">{divItems}</ul>
    </div>
  );
};
