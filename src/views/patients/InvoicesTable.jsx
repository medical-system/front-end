import InvoicesTableData from "../../components/ui/tables/InvoicesTableData"

const InvoicesTable = () => {
    return (
      <div className="w-full">
          <h1 className="text-sm font-medium mb-6">Invoices</h1>
          <div className="w-full overflow-x-scroll">
              <InvoicesTableData/>
          </div>
      </div>
    )
  }
  
  export default InvoicesTable