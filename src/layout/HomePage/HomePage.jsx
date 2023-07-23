import About from "../../shared/About/About";
import Banner from "../../shared/Banner/Banner";
import Feedback from "../../shared/Feedback/Feedback";
import Gallery from "../../shared/Gallery/Gallery";


const HomePage = () => {
  return (
    <>
      <Banner />
      <Gallery />
      {/* <About /> */}
      <Feedback />
    </>
  );
};

export default HomePage;