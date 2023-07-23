
const MyTd = ({clgName, clgImg, id, date}) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={clgImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{clgName}</td>
        <td>{date}</td>
        <td>5 STAR</td>
        <th>
          <button className="btn btn-ghost btn-xs">Apply</button>
        </th>
      </tr>
    </>
  );
};

export default MyTd;