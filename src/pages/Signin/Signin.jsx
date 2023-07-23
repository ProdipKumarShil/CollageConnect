import Lottie from "lottie-react";
import animation from '../../assets/lottie/Login.json'

const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4">
      <div className="">
        <h1 className="text-5xl font-bold text-center mb-8">Sing In Here</h1>
        <form className="flex flex-col items-center justify-center gap-4 px-8" >
          <input name="email" type="email" placeholder="Email" className="input input-bordered input-info w-full " />
          <input name="password" type="password" placeholder="Password" className="input input-bordered input-info w-full " />
          <button className="btn btn-info w-full">Sign up</button>
        </form>

        {/* social services */}
        <div className="">
          <p className="text-center text-slate-500 my-4">or <br /> continue with social media</p>
          <div className="px-8">
            <button className="btn w-full ">Google</button>
          </div>
        </div>
        
      </div>
      <div className="hidden md:block">
        <Lottie className="" animationData={animation} />
      </div>
      
    </div>
  );
};

export default Signin;