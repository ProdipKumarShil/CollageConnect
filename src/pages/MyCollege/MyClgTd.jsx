import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const MyClgTd = ({img, name, adDate,  idx}) => {
  const {user} = useContext(AuthContext)

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFeedback = e => {
    e.preventDefault()
    const feedback = e.target.feedbackTxt.value
    const feedbackObj = {feedback, name:user.displayName, photo:user.photoURL}

    fetch('https://collegeconnect-server.onrender.com/feedback', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(feedbackObj)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insert){
          Swal.fire(
            'Good job!',
            'Your feedback submitted successfully!',
            'success'
          )
        }
        else{
          Swal.fire(
            'Opps!',
            'Something Went Wrong!',
            'error'
          )
        }
      })
  }

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td>{adDate[0]}</td>
        <th>
          <div>
            <button className="btn btn-xs" onClick={openModal}>
              Give your feedback
            </button>

            {showModal && (
              <dialog id={`my_modal_${idx}`} className="fixed bg-black bg-opacity-50 w-full h-[100vh] inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <form onSubmit={handleFeedback} method="dialog" className="modal-box w-full">
                  <h3 className="font-bold text-lg mb-4">Your Feedback</h3>
                  
                    <input name="feedbackTxt" type="text" placeholder="Type here" className="input mb-4 input-bordered input-md w-full " />
                  <input  type="submit" className="btn" />

                  <div className="modal-action">
                    
                    <button className="btn" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </form>
              </dialog>
            )}
          </div>
        </th>
      </tr>
    </>
  );
};

export default MyClgTd;