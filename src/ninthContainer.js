import { dataNinthContainer } from "./data/dataNinthContainer";
export const NinthContainer = ({ className }) => {
  const divItems = dataNinthContainer.map((object) => (
    <li key={object.id}>
      <img src={object.image} />
      <div>
        <h3 className="heading3">{object.text}</h3>
        <h4>{object.name}</h4>
        <span>{object.company}</span>
      </div>
    </li>
  ));
  return (
    <div className={className}>
      <div>
        <h2 className="heading2">This is what people say about me</h2>
        <p>
          Here are a few lines from people who I have worked with over the past
          8+ years in my design career.
        </p>
        <a href="#">See all testimonials</a>
      </div>
      <ul>{divItems}</ul>
    </div>
  );
};
