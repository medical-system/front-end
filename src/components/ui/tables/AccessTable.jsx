import CustomeCheckBox from "../inputs/CustomeCheckBox"

const RenderCheckBox = () => {
    return <div className="text-sm w-full flex flex-row items-center">
        <CustomeCheckBox/>
    </div>
}
const AccessTable = () => {
    return (
        <div className="w-full">
            <h1 className="text-black text-sm mb-3">Access</h1>
            <div className="w-full overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="bg-dry rounded-md overflow-hidden">
                        <tr>
                            <th className="text-start text-xs font-medium py-3 px-2 whitespace-nowrap"></th>
                            <th className="text-start text-xs font-medium py-3 px-2 whitespace-nowrap">Read</th>
                            <th className="text-start text-xs font-medium py-3 px-2 whitespace-nowrap">Edit</th>
                            <th className="text-start text-xs font-medium py-3 px-2 whitespace-nowrap">Create</th>
                            <th className="text-start text-xs font-medium py-3 px-2 whitespace-nowrap">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border hover:bg-greyed transitions">
                            <td className="font-light text-xs text-start py-4 px-2 whitespace-nowrap">Patient</td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-greyed transitions">
                            <td className="font-light text-xs text-start py-4 px-2 whitespace-nowrap">Apointments</td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-greyed transitions">
                            <td className="font-light text-xs text-start py-4 px-2 whitespace-nowrap">Invoices</td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-greyed transitions">
                            <td className="font-light text-xs text-start py-4 px-2 whitespace-nowrap">Payments</td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                                <RenderCheckBox />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccessTable