import AppointmentsTableData from "../../components/ui/tables/AppointmentsTableData"

const AppointmentsTable = () => {
  return (
    <div className="w-full">
        <h1 className="text-sm font-medium mb-6">Appointments</h1>
        <div className="w-full overflow-x-scroll">
            <AppointmentsTableData/>
        </div>
    </div>
  )
}

export default AppointmentsTable