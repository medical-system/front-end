import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  GenderSelect,
  SortSelect,
} from "../../components/ui/select/BasicSelect";
import { IoFilterSharp } from "react-icons/io5";

import { useState } from "react";
import PatientTableData from "../../components/ui/tables/PatientTableData";

const PatientsTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="10"
      data-aos-offset="200"
      className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
    >
      {/* Table Header */}
      <div className="grid lg:grid-cols-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
        <input
          type="text"
          placeholder='Search "Patients"'
          className="h-14 text-sm text-main rounded-md bg-dry border border-border px-4"
        />
        <div className="h-14 w-full text-xs text-main rounded-md bg-dry border border-border px-4 flex items-center justify-between">
          <SortSelect />
        </div>
        <div className="h-14 w-full text-xs text-main rounded-md bg-dry border border-border px-4 flex items-center justify-between">
          <GenderSelect />
        </div>
        <div className="h-14 w-full text-xs text-main rounded-md bg-dry border border-border px-4 flex items-center justify-between">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
          Filter
          <IoFilterSharp className="text-white text-lg" />
        </button>
      </div>

      {/* Table Body */}
      <div className="mt-8 w-full overflow-x-scroll">
        <PatientTableData />
      </div>
    </div>
  );
};

export default PatientsTable;
