// import CoupleReveal from "./components/CoupleReveal";
import Schedule from "./Schedule";
import Venue from "./Venue";
import CountDown from "./CountDown";
import WelcomeSection from "./WelcomeSection";
import ImageCarousel from "./ImageCarousel";
import ExploreSection from "./ExploreSection";
import DressCodeSection from "./DressCodeSection";
import Footer from "./Footer";
import LinkComponents from "./LinkCompoments";
import Blessing from "./Blessing";

function Home() {


    return (

        <>
            {/* <CoupleReveal /> */}
            <CountDown />
            <WelcomeSection />
            <ImageCarousel />
            <Venue />

            <Schedule />
            <Blessing />
            <LinkComponents />
            {/* <DressCodeSection /> */}
            {/* <ExploreSection /> */}
            <Footer />
        </>

    );
}

export default Home;