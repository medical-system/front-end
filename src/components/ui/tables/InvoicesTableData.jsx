import { Invoices } from "../../../@facke-data/invoices.js";
import { CgEye } from "react-icons/cg";

const TableHead = ["Invoice ID", "Create Date", "Due Date", "Amount", "Actions"];

const RenderActionCell = () => {
  return (
    <button className="border text-main py-2 px-4 rounded-lg">
      <CgEye className="text-subMain" />
    </button>
  );
};

const InvoicesTableData = () => {
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
        {Invoices.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {'#'+data.invoiceId}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap md:min-w-max min-w-[200px]">
              {data.createDate}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
             {data.dueDate}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {'$'+data.amount}
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

export default InvoicesTableData;
