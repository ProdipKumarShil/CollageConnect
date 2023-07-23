import { Link } from "react-router-dom";

const CollegeCard = ({img, clgName, id }) => {
  return (
    <>
    <div className="card card-compact  bg-base-100 shadow-xl h-full">
      <figure><img className='h-[300px] w-full object-cover' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{clgName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/colleges/${id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default CollegeCard;