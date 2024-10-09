/* eslint-disable react/prop-types */
import { Receptions } from "../../../@facke-data/receptions.js";
import ActionDropDown from "../menu/ActionMenu.jsx";
const TableHead = [
  "ID",
  "Receptionist",
  "Created At",
  "Phone",
  "Title",
  "Email",
  "Actions",
];

const RenderPersonCell = ({ avatar, name }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full object-cover border-border"
      />
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
      </div>
    </div>
  );
};
const RenderActionCell = ({ id }) => {
  return <ActionDropDown id={id} hasEdit={true}/>;
};

const ReceptionsTableData = () => {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          {TableHead.map((column) => (
            <th
              key={column}
              className="text-start text-sm font-medium py-3 px-2 whitespace-nowrap"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Receptions.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.id}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap md:min-w-max min-w-[200px]">
              <RenderPersonCell {...data} />
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.createdAt}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.phone}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.title}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.email}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              <RenderActionCell id={data.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceptionsTableData;
