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
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img className="h-[100vh] object-cover" src={img4} />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
};

export default Banner;