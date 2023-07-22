import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import prity1 from '../../assets/graduationPirty/pirty1.jpg'
import prity2 from '../../assets/graduationPirty/pirty2.jpg'
import prity3 from '../../assets/graduationPirty/pirty3.jpg'
import prity4 from '../../assets/graduationPirty/pirty4.jpg'
import prity5 from '../../assets/graduationPirty/pirty5.jpg'
import prity6 from '../../assets/graduationPirty/pirty6.jpg'
import prity7 from '../../assets/graduationPirty/pirty7.jpg'
import prity8 from '../../assets/graduationPirty/pirty8.jpg'
import prity9 from '../../assets/graduationPirty/pirty9.jpg'
import prity10 from '../../assets/graduationPirty/pirty10.jpg'
import prity11 from '../../assets/graduationPirty/pirty11.jpg'

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <div className="py-4">
      <h1 className='text-6xl font-bold text-center mb-4'>Gallery</h1>
      <div className="App ">
        {/* <LightGallery
          elementClassNames="custom-wrapper-class"
          onBeforeSlide={onBeforeSlide}
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href={prity1}>
            <img className='w-1/2' alt="img1" src={prity1} />
          </a>
          <a href={prity2}>
            <img className='w-1/2' alt="img2" src={prity2} />
          </a>
          <a href={prity3}>
            <img alt="img1" src={prity3} />
          </a>
          <a href={prity4}>
            <img alt="img2" src={prity4} />
          </a>
          <a href={prity5}>
            <img alt="img1" src={prity5} />
          </a>
          <a href={prity6}>
            <img alt="img2" src={prity6} />
          </a>
          <a href={prity7}>
            <img alt="img1" src={prity7} />
          </a>
          <a href={prity8}>
            <img alt="img2" src={prity8} />
          </a>
          <a href={prity9}>
            <img alt="img1" src={prity9} />
          </a>
          <a href={prity10}>
            <img alt="img2" src={prity10} />
          </a>
          <a href={prity11}>
            <img alt="img2" src={prity11} />
          </a>
        </LightGallery> */}

        
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        <img className='w-full h-full object-cover' src={prity1} alt="" />
        <img className='w-full h-full object-cover' src={prity2} alt="" />
        <img className='w-full h-full object-cover' src={prity3} alt="" />
        <img className='w-full h-full object-cover' src={prity4} alt="" />
        <img className='w-full h-full object-cover' src={prity5} alt="" />
        <img className='w-full h-full object-cover' src={prity6} alt="" />
        <img className='w-full h-full object-cover' src={prity7} alt="" />
        <img className='w-full h-full object-cover' src={prity8} alt="" />
      </div>
    </div>
  );
};

export default Gallery;