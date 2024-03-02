import "./styles/style.css";
import { Header } from "./header";
import { FirstContainer } from "./firstContainer";
export default function App() {
  return (
    <>
      <Header className="header" />
      <main>
        <FirstContainer className="firstContainer" />
      </main>
    </>
  );
}
