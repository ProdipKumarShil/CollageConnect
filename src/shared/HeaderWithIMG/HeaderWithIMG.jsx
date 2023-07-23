import headerBG from '../../assets/headerIMG/collegeHeaderBG.jpg'

const HeaderWithIMG = ({content}) => {
  return (
    <div>
      <div className="relative">
        <img className='filter blur-sm brightness-75 w-full h-[300px] object-cover' src={headerBG} alt="headerBG" />
        <h1 className='absolute inset-0 text-5xl text-slate-200 font-bold top-20 md:top-32 text-center '>{content}</h1>
      </div>
    </div>
  );
};

export default HeaderWithIMG;