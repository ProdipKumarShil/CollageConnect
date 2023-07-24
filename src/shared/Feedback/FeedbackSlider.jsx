
const FeedbackSlider = ({feedback}) => {
  console.log(feedback)
  return (
    <>
      <swiper-slide >
        <div className="">
          <img className='w-20 h-20 rounded-full mx-auto' src={feedback.photo} alt="" />
          <h5 className='text-gray-300 text-center text-2xl font-bold mt-4'>{feedback.name}</h5>
          <p className='text-gray-300 text-center mt-2 mb-4 w-10/12 mx-auto'>{feedback.feedback}</p>
        </div>
      </swiper-slide>
    </>
  );
};

export default FeedbackSlider;