import { MdOutlineAttachMoney } from "react-icons/md";
import { TbCalendar, TbFile, TbUsers } from "react-icons/tb";

export const DashboardCards = [
  {
    id: 1,
    title: 'Total Patients',
    icon: TbUsers,
    value: 1600,
    percent: 45.06,
    colors: ['bg-subMain', 'text-subMain', '#07b8db'],
    data: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 2,
    title: 'Appointments',
    icon: TbCalendar,
    value: 130,
    percent: 25.06,
    colors: ['bg-yellow-500', 'text-yellow-500', '#F9C851'],
    data: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
  {
    id: 3,
    title: 'Prescriptions',
    icon: TbFile,
    value: 4160,
    percent: 65.06,
    colors: ['bg-[#66B5A3]', 'text-[#66B5A3]', '#66B5A3'],
    data: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 4,
    title: 'Total Earnings',
    icon: MdOutlineAttachMoney,
    value: 4590,
    percent: 45.06,
    colors: ['bg-[#e6870b]', 'text-[#e6870b]', '#e6870b'],
    data: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
];

