import { register } from 'swiper/element/bundle';

import feedback from '../../assets/feedback/feedback3.jpg'
import std1 from '../../assets/ssttdd/student22.jpg'
import std2 from '../../assets/ssttdd/student.jpg'
import std3 from '../../assets/ssttdd/student3.jpg'

const Feedback = () => {
  register()
  return (
    <div className="py-4">
      <h1 className="text-6xl font-bold text-center mb-3">Testimonial</h1>
      <div className="relative">
        <img className='w-full h-[50vh] md:h-full object-cover' src={feedback} alt="" />
        <div className="absolute inset-0 top-14 md:top-5 lg:top-28">
          <swiper-container >
            <swiper-slide>
              <div className="">
                <img className='w-20 h-20 rounded-full mx-auto' src={std1} alt="" />
                <h5 className='text-gray-300 text-center text-2xl font-bold mt-4'>Emma</h5>
                <p className='text-gray-300 text-center mt-2 mb-4 w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque assumenda debitis ex, ducimus consequuntur maiores quod repudiandae error, soluta eveniet molestiae at temporibus magnam quisquam veniam deserunt beatae autem!</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="">
                <img className='w-20 h-20 rounded-full mx-auto' src={std2} alt="" />
                <h5 className='text-gray-300 text-center text-2xl font-bold mt-4'>Benjamin</h5>
                <p className='text-gray-300 text-center mt-2 mb-4 w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque assumenda debitis ex, ducimus consequuntur maiores quod repudiandae error, soluta eveniet molestiae at temporibus magnam quisquam veniam deserunt beatae autem!</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="">
                <img className='w-20 h-20 rounded-full mx-auto' src={std3} alt="" />
                <h5 className='text-gray-300 text-center text-2xl font-bold mt-4'>Elizabeth</h5>
                <p className='text-gray-300 text-center mt-2 mb-4 w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque assumenda debitis ex, ducimus consequuntur maiores quod repudiandae error, soluta eveniet molestiae at temporibus magnam quisquam veniam deserunt beatae autem!</p>
              </div>
            </swiper-slide>
            
          </swiper-container>
        </div>
      </div>
    </div>
  );
};

export default Feedback;