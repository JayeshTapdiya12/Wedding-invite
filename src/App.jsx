import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CoupleReveal from "./components/CoupleReveal";
// import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Invitation from "./components/Invitation";
// import CountDown from "./components/CountDown";
// import WelcomeSection from "./components/WelcomeSection";
// import ImageCarousel from "./components/ImageCarousel";
import ExploreSection from "./components/ExploreSection";
import DressCodeSection from "./components/DressCodeSection";
import Gallery from "./components/Gallery";
import Navbar from './components/NavBar';
import './App.css';
import Home from "./components/Home";
import Travelling from "./components/Travelling";
import Schedule from "./components/Schedule";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [stage, setStage] = useState(() => {
    return window.location.pathname !== "/" ? "reveal" : "envelope";
  });

  const audioRef = useRef(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
    setStage("reveal");
  };


  return (
    <Router>
      <ScrollToTop />
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Stage 1: The Invitation Envelope */}
      {stage === "envelope" && (
        <Invitation onOpen={startExperience} />
      )}

      {/* Stage 2: The Main Application (After Open) */}
      {stage === "reveal" && (
        <div className="app-main-layout">
          <Navbar />

          <Routes>
            {/* Home Route: Landing view with Hero and Reveal */}
            <Route path="/" element={
              <>
                <CoupleReveal />
                {/*<CountDown />
                <WelcomeSection />
                <ImageCarousel />
                <Schedule />
                <DressCodeSection />
                <Venue />
                <ExploreSection /> */}
                <Home />
              </>
            } />


            {/* Fallback to Home */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/wardrobe" element={<DressCodeSection />} />
            <Route path="/explore" element={<ExploreSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/guide" element={<Travelling />} />
            <Route path="*" element={<>
              <CoupleReveal />
              <Home /></>} />
          </Routes>

          {/* Persistent Footer Carousel (Optional) */}
        </div>
      )}
    </Router>
  );
}

export default App;