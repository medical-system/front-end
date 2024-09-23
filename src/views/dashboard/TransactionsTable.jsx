import TransactionsTableData from "../../components/ui/tables/TransactionsTableData";

const TransactionsTable = () => {
  return (
    <div className="mt-6 bg-white rounded-xl border-[1px] border-border p-5">
      {/* Table Header */}
      <div className="flex-btn gap-2">
        <h2 className="text-sm font-medium">Recent Transaction</h2>
        <p className="flex gap-4 text-sm items-center">
          Today{" "}
          <span className="py-1 px-2 bg-subMain text-white text-xs rounded-xl">
            27000$
          </span>
        </p>
      </div>
      {/* Table Data*/}
      <div className="mt-4 overflow-x-auto">
        <TransactionsTableData/>
      </div>
    </div>
  );
};

export default TransactionsTable;
