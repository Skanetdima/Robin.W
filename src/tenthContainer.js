import { dataTenthContainer } from "./data/dataTenthContainer";
export const TenthContainer = ({ className }) => {
  const dataItems = dataTenthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
    </li>
  ));
  return (
    <div className={className}>
      <div>
        <h2 className="heading2">Photography</h2>
        <p className="pargraph">
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.
        </p>
      </div>
      <ul>{divItems}</ul>
    </div>
  );
};
