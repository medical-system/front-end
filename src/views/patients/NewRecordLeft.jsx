import UserImg from "../../assets/user2.png";
const NewRecordLeft = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-offset="200"
      className="col-span-12 flex-colo gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
    >
      <img
        src={UserImg}
        alt="setting"
        className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
      />
      <div className="gap-2 flex-colo">
        <h2 className="text-sm font-semibold">Amani Mmassy</h2>
        <p className="text-xs text-textGray">amanimmassy@gmail.com</p>
        <p className="text-xs">+254 712 345 678</p>
        <p className="text-xs text-subMain bg-text font-medium py-1 px-4 rounded-full border-[0.5px] border-subMain">
          45 yrs
        </p>
      </div>
    </div>
  );
};

export default NewRecordLeft;
