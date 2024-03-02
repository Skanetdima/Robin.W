import { dataSecondContainer } from "./data/dataSecondContainer";
export const SecondContainer = ({ className }) => {
  const divItems = dataSecondContainer.map((item) => (
    <div key={item.id}>
      <span className="label1">{item.idOfName}</span>
      <h3>
        <span
          style={
            item.company === "Google"
              ? { color: "green" }
              : item.company === "Facebook"
              ? { color: "blue" }
              : { color: "red" }
          }
        >
          {item.company}
        </span>
        {item.name}
      </h3>
      <p className="body1">{item.text}</p>
    </div>
  ));
  return (
    <div className={className}>
      <span className="overline">work experience</span>
      <h2 className="heading2">
        Companies I have worked <br /> for in the past
      </h2>
      <div className="secondContainerItems">{divItems}</div>
    </div>
  );
};
