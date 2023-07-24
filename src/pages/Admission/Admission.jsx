import HeaderWithIMG from "../../shared/HeaderWithIMG/HeaderWithIMG";
import { useEffect, useState } from "react";
import MyTd from "../../shared/MyTd/MyTd";

const Admission = () => {

  const [college, setCollege] = useState(null)
  useEffect( () => {
    fetch('https://collegeconnect-server.onrender.com/colleges')
      .then(res => res.json())
      .then(data => setCollege(data))
  }, [])
  console.log(college)
  if (!college) {
    return <h1 className="text-8xl font-extrabold">alkdsfjaoisdf</h1>
  }
  return (
    <div>
      <HeaderWithIMG content="Apply your dream college"/>
      <div className="overflow-x-auto m-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>College Img</th>
              <th>College Name</th>
              <th>Admission Date</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              college.map(item => <MyTd id={item._id} clgName={item.collegeName} clgImg={item.collegeImage} date={item.admissionDates[0]} key={item._id} />)
            }
            
          </tbody>
          

        </table>
      </div>
    </div>
  );
};

export default Admission;