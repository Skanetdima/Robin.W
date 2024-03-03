import {
  dataSixthContainer,
  dataSixthContainer1,
} from "./data/dataSixthContainer";

export const SixthContainer = ({ className }) => {
  const chooseFunc = (variable) => {
    return variable.map((object) => (
      <li key={object.id}>
        <img src={object.image} />
        <h3 className="heading3">{object.name}</h3>
        <p>{object.text}</p>
      </li>
    ));
  };
  return (
    <div className={className}>
      <div>
        <span className="overline">MY PROJECTS</span>
        <h2 className="heading2">Work that I’ve done for the past 8 years</h2>
        <ul>{chooseFunc(dataSixthContainer)}</ul>
      </div>
      <div>
        <ul>{chooseFunc(dataSixthContainer1)}</ul>
      </div>
    </div>
  );
};
