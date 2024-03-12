import { dataFifthContainer } from "./data/dataFifthContainer";
export const FifthContainer = ({ className }) => {
  const divItems = dataFifthContainer.map((object) => (
    <img key={object.id} src={object.image} />
  ));
  return (
    <div className={className}>
      <ul className="logosSlider">{divItems}</ul>
      <ul className="logosSlider">{divItems}</ul>
    </div>
  );
};
