import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:w-1/2 mx-auto items-center justify-center mt-2 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img className="w-64 rounded-lg" src={user.photoURL} alt="" />
      </div>
      <div className="">
        
        <h1><span className="text-lg font-bold">Name</span>: {user.displayName}</h1>
        <h1><span className="text-lg font-bold">Email</span>: {user.email}</h1>
        <h1><span className="text-lg font-bold">Phone Number</span>: {user.phoneNumber}</h1>
      </div>
    </div>
  );
};

export default Profile;