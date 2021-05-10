import { ImageSlideshow } from "./ImageSlideshow";
import { TypeAnimation } from "./TypeAnimation";
import Confetti from "react-confetti";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <TypeAnimation className="typeanimation" />
      </div>
      <div>
        <ImageSlideshow className="imageslider" />{" "}
      </div>
      <Confetti />
    </div>
  );
}
