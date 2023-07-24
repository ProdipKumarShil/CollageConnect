import Lottie from "lottie-react";
import animation from '../../assets/lottie/Login.json'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";



const Singnup = () => {
  const { googlePopUpSignin, emailSignUp, updateUser, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGooglePopUpSignUp = () => {
    googlePopUpSignin()
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSignup = e => {
    e.preventDefault();
    const form = e.target
    console.log(form)
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photoUrl = form.photo.value

    emailSignUp(email, password)
      .then(result => {
        const userInfo = {displayName: name, photoURL: photoUrl}
        updateUser(userInfo)
        const user = result.user
        setUser(user)
        navigate('/')
      })
      .catch(err => {
        console.log(err)
      })
    
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4">
      <div className="">
        <h1 className="text-5xl font-bold text-center mb-8">Sing Up Here</h1>
        <form onSubmit={handleSignup} className="flex flex-col items-center justify-center gap-4 px-8" >
          <input name="name" type="text" placeholder="Name" className="input input-bordered input-info w-full " />
          <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered input-info w-full " />
          <input name="email" type="email" placeholder="Email" className="input input-bordered input-info w-full " />
          <input name="password" type="password" placeholder="Password" className="input input-bordered input-info w-full " />
          <p className="text-center text-slate-500 my-4">Already have an account <Link to='/signin'>sign in</Link></p>
          <button className="btn btn-info w-full">Sign up</button>
        </form>

        {/* social services */}
        <div className="">
          <p className="text-center text-slate-500 my-4">or <br /> continue with social media</p>
          <div className="px-8">
            <button onClick={handleGooglePopUpSignUp} className="btn w-full ">Google</button>
          </div>
        </div>

      </div>
      <div className="hidden md:block">
        <Lottie className="" animationData={animation} />
      </div>
    </div>
  );
};

export default Singnup;