import Lottie from "lottie-react";
import loader from '../../assets/lottie/loader.json'
const Loader = () => {
  return (
    <div className="flex w-full">

      <Lottie className="mx-auto w-1/3" animationData={loader}/>
    </div>
  );
};

export default Loader;