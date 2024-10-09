import { MdOutlineCloudDownload } from "react-icons/md";
import ReceptionsTableData from "../../components/ui/tables/ReceptionsTableData";

const ReceptionsTable = () => {
    return (
        <>
            {/* Table Header */}
            <div className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-2">
                <div className="md:col-span-5 grid lg:grid-cols-4 items-center gap-6">
                    <input type="text" placeholder="Search &quot;Amina Mwakio&quot;" className="h-14 w-full text-sm text-main rounded-md bg-dry border border-border px-4" />
                </div>
                <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
                    Export
                    <MdOutlineCloudDownload className="text-white text-xl" />
                </button>
            </div>
            {/* Table Data*/}
            <div className="mt-4 overflow-x-auto">
                <ReceptionsTableData />
            </div>
        </>
    );
};

export default ReceptionsTable;
