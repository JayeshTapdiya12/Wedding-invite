import { useState, useRef } from "react";
import CoupleReveal from "./components/CoupleReveal";
import Flowers from "./components/Flowers";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Invitation from "./components/Invitation";
// import Countdown from "./components/CountDown";

function App() {
  const [stage, setStage] = useState("envelope");
  const audioRef = useRef(null);

  // const startExperience = () => {
  //   audioRef.current.play().catch(err => {
  //     console.log("Autoplay blocked:", err);
  //   });
  //   setStage("reveal");
  // };
  const startExperience = () => {
    audioRef.current.play().catch(err => console.log(err));
    setStage("reveal");
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {stage === "envelope" && (
        <Invitation onOpen={startExperience} />
      )}

      {stage === "reveal" && (
        <>
          <CoupleReveal onComplete={() => setStage("main")} />
        </>
      )}

      {stage === "main" && (
        <>
          {/* <Countdown /> */}

          <Flowers />
          <Hero />
          <Schedule />
          <Gallery />
          <Venue />
          <RSVP />
        </>
      )}
    </>
  );
}

export default App;