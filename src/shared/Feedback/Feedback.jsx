import { register } from 'swiper/element/bundle';

import feedback from '../../assets/feedback/feedback3.jpg'
import { useEffect, useState } from 'react';
import FeedbackSlider from './FeedbackSlider';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([])
  useEffect( () => {
    fetch('https://collegeconnect-server.onrender.com/allFeedback')
      .then(res => res.json())
      .then(data => setFeedbacks(data))
  } , [])
  
  register()
  return (
    <div className="py-4">
      <h1 className="text-6xl font-bold text-center mb-3">Testimonial</h1>
      <div className="relative">
        <img className='w-full h-[50vh] md:h-full object-cover' src={feedback} alt="" />
        <div className="absolute inset-0 top-14 md:top-5 lg:top-28">
          <swiper-container >
            
            {
              feedbacks.map((feedback, idx) => <FeedbackSlider feedback={feedback} key={idx}/>)
            }
          </swiper-container>

          
        </div>
      </div>
    </div>
  );
};

export default Feedback;