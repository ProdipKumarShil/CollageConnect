import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/clgIMGS/clg1.jpg'
import img2 from '../../assets/clgIMGS/clg2.jpg'
import img3 from '../../assets/clgIMGS/clg3.jpg'
import img4 from '../../assets/clgIMGS/clg4.jpg'

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} onClickItem={true} swipeable={true}>
      <div>
        <img className="h-[100vh] object-cover" src={img1} />
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img2} />
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img3} />
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img4} />
      </div>
    </Carousel>
  );
};

export default Banner;