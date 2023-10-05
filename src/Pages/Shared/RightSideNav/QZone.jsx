import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-[#F3F3F3] rounded-md ">
      <h2 className="font-semibold mb-3 text-2xl p-3">Q-Zone</h2>
      <div className="p-3 w-full">
        <img className=" w-full" src={qZone1} alt="" />
        <img className=" w-full" src={qZone2} alt="" />
        <img className=" w-full" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
