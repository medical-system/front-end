/* eslint-disable react/prop-types */
import { TransactionsData } from "../../../@facke-data/transactionsData";
const TableHead = ["ID", "Patient", "Date", "Status", "Amount(tsh)", "Method"];

const RenderCell = ({ props }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={props.avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full object-cover border-border"
      />
      <div>
        <h4 className="text-sm font-medium">{props.fullName}</h4>
        <p className="text-xs mt-1 text-textGray">{props.phone}</p>
      </div>
    </div>
  );
};
const RenderStatusCell = ({ status }) => {
  return (
    <span
      className={`py-1 px-4 bg-opacity-10 text-xs rounded-xl 
            ${
              status === "Paid"
                ? "bg-subMain text-subMain"
                : status === "Pending"
                ? "bg-orange-500 text-orange-500"
                : "bg-red-600 text-red-600"
            }`}
    >
      {status}
    </span>
  );
};

const TransactionsTableData = () => {
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
        {TransactionsData.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.id}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              <RenderCell props={data.patient} />
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.date}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                <RenderStatusCell status={data.status}/>
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.amount}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.method}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTableData;
