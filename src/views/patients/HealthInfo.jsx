import UsedInput from "../../components/hook-form/UsedInput";
import { BloodGroupSelect } from "../../components/ui/select/BasicSelect";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const HealthInfo = () => {
  return (
    <div className="flex-colo gap-4">
      <div className="flex w-full flex-col gap-3">
        <label className="text-black text-sm ">Blood Group</label>
        <BloodGroupSelect />
      </div>
      <UsedInput lable="Weight" type="text" placeholder="50kg" />
      <UsedInput lable="Height" type="text" placeholder="5.5ft" />
      <div className="flex text-sm w-full flex-col gap-3">
        <label className="text-black">Allergies</label>
        <textarea
          placeholder="Beans, Nuts, etc."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <div className="flex text-sm w-full flex-col gap-3">
        <label className="text-black">Habits</label>
        <textarea
          placeholder="Drinking, Smoking, etc."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <div className="flex text-sm w-full flex-col gap-3">
        <label className="text-black">Medical History</label>
        <textarea
          placeholder="Diabetes, Heart Diseases, etc."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
        Save Changes
        <IoIosCheckmarkCircleOutline className="text-white text-xl" />
      </button>
    </div>
  );
};

export default HealthInfo;
