import { useEffect, useState } from "react";
import HeaderWithIMG from "../HeaderWithIMG/HeaderWithIMG";
import CollegeCard from "../CollegeCard/CollegeCard";
import Loader from "../Loader/Loader";


const Colleges = () => {
  const [colleges, setColleges] = useState(null)
  useEffect( () => {
    fetch('https://collegeconnect-server.onrender.com/colleges')
      .then(res => res.json())
      .then(data => setColleges(data))
  }, [])

  console.log(colleges)
  if(!colleges){
    return <Loader />
  }
  return (
    <div>
      <HeaderWithIMG content={'Discover Worlds Top Colleges'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
        {
          colleges.map(college => <CollegeCard key={college._id} img={college.collegeImage} clgName={college.collegeName} id={college._id}/>)
        }
      </div>
    </div>
  );
};

export default Colleges;