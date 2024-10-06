import { FaPlus } from "react-icons/fa"
import MedicinTableData from "../../components/ui/tables/MedicinTableData"

const MedicinTable = () => {
  return (
    <div className="w-full">
        <h1 className="text-sm font-medium mb-6">Payments</h1>
        <div className="w-full overflow-x-auto">
            <MedicinTableData/>
        </div>
        <button className="mt-4 text-subMain flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 w-full text-sm">
          <FaPlus className="text-[10px]"/>
          Add Medicin
        </button>
    </div>
  )
}

export default MedicinTable