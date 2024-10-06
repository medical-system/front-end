import { useState } from "react";
import UsedInput from "../../components/hook-form/UsedInput";
import { GenderSelect } from "../../components/ui/select/BasicSelect";
import Uploader from "../../components/Uploader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PatientForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex-colo gap-4">
      {/* upload img */}
      <div className="flex gap-3 flex-col w-full col-span-6">
        <p className="text-sm">Profile Image</p>
        <div className="w-full text-center grid grid-cols-12 gap-4">
          <Uploader />
        </div>
      </div>
      <UsedInput lable="Full Name" type="text" />
      <UsedInput lable="Phone Number" type="number" />
      <UsedInput lable="Email" type="text" />
      <div className="flex w-full flex-col gap-3">
        <label className="text-black text-sm ">Gender</label>
        <div className="w-full bg-transparent text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none">
          <GenderSelect />
        </div>
      </div>
      <UsedInput lable="Emergency Contact" type="number" />
      <div className="text-sm w-full flex-col gap-2 flex">
        <label className="text-black">Date of Birth</label>
        <div className="w-full bg-transparent text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <UsedInput lable="Address" type="number" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
          Delete Account
          <RiDeleteBinLine className="text-white text-xl" />
        </button>
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
          Save Changes
          <IoIosCheckmarkCircleOutline className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PatientForm;
