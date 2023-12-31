import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
  const { user, googleSignOut } = useContext(AuthContext)

  const handleSignOut = () => {
    googleSignOut()
      .then(result => {console.log(result)})
      .catch(err => console.log(err))
  }

  const links = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/colleges">Colleges</Link></li>
    <li><Link to="/admission">Admission</Link></li>
    <li><Link to={`/myCollege`}>My College</Link></li>
    {!user && <li><Link to="/signin">Sign in</Link></li> }
    {user && <li><Link to="/profile">{user.displayName}</Link></li>}
    {user && <li ><button onClick={handleSignOut}>Sign out</button></li>}
  </>
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">College Connect</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;