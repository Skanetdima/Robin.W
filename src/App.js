import "./styles/style.css";
import { Header } from "./header";
import { FirstContainer } from "./firstContainer";
import { SecondContainer } from "./secondContainer";
import { ThirdContainer } from "./thirdContainer";
import { FourthContainer } from "./fourthContainer";
import { FifthContainer } from "./fifthContainer";
import { SixthContainer } from "./sixthContainer";
import { SeventhContainer } from "./seventhContainer";
import { EighthContainer } from "./eighthContainer";
import { NinthContainer } from "./ninthContainer";
import { TenthContainer } from "./tenthContainer";
import { EleventhContainer } from "./eleventhContainer";
export default function App() {
  return (
    <>
      <Header className="header" />
      <main>
        <FirstContainer className="firstContainer" />
        <SecondContainer className="secondContainer" />
        <ThirdContainer className="thirdContainer" />
        <FourthContainer className="fourthContainer" />
        <FifthContainer className="fifthContainer" />
        <SixthContainer className="sixthContainer" />
        <SeventhContainer className="seventhContainer" />
        <EighthContainer className="eighthContainer" />
        <NinthContainer className="ninthContainer" />
        <TenthContainer className="tenthContainer" />
        <EleventhContainer className="eleventhContainer" />
      </main>
    </>
  );
}
