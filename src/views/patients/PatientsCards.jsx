import { GoClock } from "react-icons/go";
import { BsCalendarMonth } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Cards = [
  {
    id: 1,
    title: "Today Patients",
    number: 10,
    desc: "Total Patients 10 today",
    icon: GoClock,
    iconBg: "subMain",
  },
  {
    id: 2,
    title: "Monthly Patients",
    number: 230,
    desc: "Total Patients 230 this month",
    icon: BsCalendarMonth,
    iconBg: "orange-500",
  },
  {
    id: 3,
    title: "Yearly Patients",
    number: 1500,
    desc: "Total Patients 1,500 this year",
    icon: MdOutlineCalendarMonth,
    iconBg: "green-500",
  },
];
const PatientsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {Cards.map((card) => (
        <div
          key={card.id}
          className="bg-white flex-btn gap-4 rounded-xl border-[1px] border-border p-5"
        >
          <div className="w-3/4">
            <h2 className="text-sm font-medium">{card.title}</h2>
            <h2 className="text-xl my-6 font-medium">{card.number}</h2>
            <p className="text-xs text-textGray">
              Total Patients <span className={`text-${card.iconBg}`}>10</span> today
            </p>
          </div>
          <div className={`w-10 h-10 center rounded-md text-white text-md bg-${card.iconBg}`}>
            {<card.icon/>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientsCards;
