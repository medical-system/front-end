import PaymentsTableData from "../../components/ui/tables/PaymentsTableData"

const PaymentsTable = () => {
  return (
    <div className="w-full">
        <h1 className="text-sm font-medium mb-6">Payments</h1>
        <div className="w-full overflow-x-scroll">
            <PaymentsTableData/>
        </div>
    </div>
  )
}

export default PaymentsTable