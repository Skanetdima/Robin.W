import { dataFourthContainer } from "./data/dataFourthContainer";
export const FourthContainer = ({ className }) => {
  const divItems = dataFourthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
      <h3 className="heading3">{object.name}</h3>
      <p className="body2">{object.text}</p>
    </li>
  ));
  return (
    <div className={className}>
      <div className="fourthContainerHeaderContainer">
        <h2 className="heading2">Skillset</h2>
        <p className="pargraph">
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </p>
      </div>
      <ul className="fourthContainerItems">{divItems}</ul>
    </div>
  );
};
