import { useContext, useEffect, useState } from "react";
import HeaderWithIMG from "../../shared/HeaderWithIMG/HeaderWithIMG";
import { AuthContext } from "../../provider/AuthProvider";
import MyClgTd from "./MyClgTd";
import Loader from "../../shared/Loader/Loader";

const MyCollege = () => {
  const {user} = useContext(AuthContext)
  const [colleges, setColleges] = useState(null)
  useEffect( () => {
    fetch(`https://collegeconnect-server.onrender.com/myCollege/${user?.email}`)
      .then(res => res.json())
      .then(data => setColleges(data))
  } , [user.email])

  if(!colleges){
    return <Loader />
    
  }
  
  return (
    <div>
      <HeaderWithIMG content="Applied Colleges"/>
      <table className="table p-8">
        {/* head */}
        <thead>
          <tr>
            <th>College Img</th>
            <th>College Name</th>
            <th>Admission Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            colleges.map((college, index) => <MyClgTd img={college.collegeImg} idx={college._id} adDate={college.admission} name={college.college} num={index} key={college._id}/>)
          }
          
        </tbody>


      </table>
    </div>
  );
};

export default MyCollege;