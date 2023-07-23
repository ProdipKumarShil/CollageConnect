import Lottie from "lottie-react";
import error from '../../assets/lottie/error.json'

const Error = () => {
  return (
    <div className="h-100vh ">
      <h1 className="text-5xl text-center mt-4">Page Not Found!</h1>
      <Lottie className="w-10/12 h-[90vh] mx-auto" animationData={error} />
    </div>
  );
};

export default Error;