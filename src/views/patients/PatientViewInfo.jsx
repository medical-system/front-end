import userImg from "../../assets/user2.png";
import { FaChartBar, FaRegCalendarAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import MedicalRecords from "./MedicalRecords";
import AppointmentsTable from "./AppointmentsTable";
import InvoicesTable from "./InvoicesTable";
import PaymentsTable from "./PaymentsTable";
import Images from "./Images";
import PatientForm from "./PatientForm";
import HealthInfo from "./HealthInfo";

const PatientViewInfo = () => {
  const [active, setActive] = useState(0);
  const listLinks = [
    {
      id: 1,
      icon: FaChartBar,
      title: "Medical Records",
    },
    {
      id: 2,
      icon: FaRegCalendarAlt,
      title: "Appointments",
    },
    {
      id: 3,
      icon: FaRegFileAlt,
      title: "Invoices",
    },
    {
      id: 4,
      icon: AiOutlineDollar,
      title: "Payments",
    },
    {
      id: 5,
      icon: FaRegImage,
      title: "Images",
    },
    {
      id: 6,
      icon: LuUser2,
      title: "Personal Information",
    },
    {
      id: 7,
      icon: FaRegHeart,
      title: "Health Information",
    },
  ];
  
  return (
    <div className="grid grid-cols-12 gap-6 my-8 items-start">
      {/* left side */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 flex-col items-center center gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
      >
        <img
          src={userImg}
          alt="setting"
          className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
        />
        <div className="gap-2 flex-colo text-center">
          <h2 className="text-sm font-semibold">Amani Mmassy</h2>
          <p className="text-xs text-textGray">amanimmassy@gmail.com</p>
          <p className="text-xs">+254 712 345 678</p>
        </div>
        <div className="flex-colo gap-3 px-2 xl:px-12 w-full">
          {listLinks.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`${
                active === i ? "bg-text text-subMain" : "bg-dry text-main"
              }
                text-xs gap-4 flex items-center w-full p-4 rounded hover:bg-text hover:text-subMain`}
            >
              <item.icon className="text-lg" /> {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* right side */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
      >
        {active === 0 && <MedicalRecords />}
        {active === 1 && <AppointmentsTable />}
        {active === 2 && <InvoicesTable />}
        {active === 3 && <PaymentsTable />}
        {active === 4 && <Images />}
        {active === 5 && <PatientForm />}
        {active === 6 && <HealthInfo />}
      </div>
    </div>
  );
};

export default PatientViewInfo;
