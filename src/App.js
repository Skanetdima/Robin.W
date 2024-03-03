import "./styles/style.css";
import { Header } from "./header";
import { FirstContainer } from "./firstContainer";
import { SecondContainer } from "./secondContainer";
import { ThirdContainer } from "./thirdContainer";
import { FourthContainer } from "./fourthContainer";
export default function App() {
  return (
    <>
      <Header className="header" />
      <main>
        <FirstContainer className="firstContainer" />
        <SecondContainer className="secondContainer" />
        <ThirdContainer className="thirdContainer" />
        <FourthContainer className="fourthContainer" />
      </main>
    </>
  );
}
