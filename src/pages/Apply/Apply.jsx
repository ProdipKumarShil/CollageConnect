import { useLoaderData } from "react-router-dom";
import HeaderWithIMG from "../../shared/HeaderWithIMG/HeaderWithIMG";
import Lottie from "lottie-react";
import admission from '../../assets/lottie/admission.json'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Apply = () => {
  const college = useLoaderData()
  const {user} = useContext(AuthContext)
  console.log(college)
  const theCollegeId = college._id
  const theClgImg = college.collegeImage
  const theAdmissionDate = college.admissionDates

  const handleAdmission = e => {
    e.preventDefault()
    const form = e.target
    const collegeId = theCollegeId
    const collegeImg = theClgImg
    const admission = theAdmissionDate
    const name = form.name.value
    const college = form.college.value
    const subject = form.subject.value
    const email = form.email.value
    const phone = form.phone.value
    const address = form.address.value
    const dob = form.dob.value
    const img = form.img.value

    const admissionData = { collegeId, collegeImg, admission, name, college, subject, email, phone, address, dob, img}

    fetch('https://collegeconnect-server.onrender.com/admission',{
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(admissionData)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insert){
          Swal.fire({
            icon: 'success',
            title: 'Congratulation',
            text: 'Successfully applied!',
            footer: '<a href="/">Go to HOME</a>'
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="/">Go to HOME</a>'
          })
        }
      })

  }
  
  return (
    <div>
      <HeaderWithIMG content="Give your accurate info"/>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
        <Lottie animationData={admission}/>
        <form onSubmit={handleAdmission} className="flex flex-col gap-4">
          <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
          <input name="college" type="text" defaultValue={college?.collegeName} placeholder="Your college" className="input input-bordered w-full " />
          <input name="subject" type="text" placeholder="Favorite subject" className="input input-bordered w-full " />
          <input name="email" type="text" defaultValue={user?.email} placeholder="Personal email" className="input input-bordered w-full " />
          <input name="phone" type="text" placeholder="Phone number" className="input input-bordered w-full " />
          <input name="address" type="text" placeholder="Full address" className="input input-bordered w-full " />
          <input name="dob" type="text" placeholder="Date of birth" className="input input-bordered w-full " />
          <input name="img" type="text" defaultValue={user?.photoURL} placeholder="Image link" className="input input-bordered w-full " />
          <input className="btn" type="submit" name="Submit" id="" />
        </form>
      </div>
    </div>
  );
};

export default Apply;