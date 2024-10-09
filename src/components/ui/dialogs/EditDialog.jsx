import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Uploader from "../../Uploader";
import UsedInput from "../../hook-form/UsedInput";
import TitleSelect from '../select/BasicSelect'
import { FiEdit } from "react-icons/fi";
import AccessTable from "../tables/AccessTable";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export function EditStuffDialog({ id }) {
    console.log(id)
    let [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <>
            <Button
                onClick={open}
                className="flex gap-4 items-center hover:text-subMain"
            >
                <FiEdit className="text-subMain" />
                Edit
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-50 focus:outline-none"
                onClose={close}
            >
                <div className="fixed inset-0 p-4 min-h-full z-10 w-screen overflow-y-auto bg-black bg-opacity-25 flex items-center justify-center">
                    <div className="w-full min-h-full max-w-3xl mt-[300px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <DialogPanel
                            transition
                            className="w-full rounded-xl bg-white/5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {/* header */}
                            <div className="w-full flex-btn gap-2 mb-8">
                                <h1 className="text-md font-semibold">Edit Stuff</h1>
                                <button
                                    onClick={close}
                                    className="w-14 h-12 bg-dry text-red-600 rounded-md flex-colo text-2xl font-extrabold"
                                >
                                    <IoClose />
                                </button>
                            </div>

                            {/* content */}
                            <div className="flex-colo gap-6">
                                <div className="flex gap-3 flex-col w-full col-span-6">
                                    <p className="text-sm">Profile Image</p>
                                    <div className="w-full text-center grid grid-cols-12 gap-4">
                                        <Uploader />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 w-full">
                                    <div className="text-sm w-full">
                                        <UsedInput lable="Full Name" type="text" />
                                    </div>
                                    <div className="flex w-full flex-col gap-3">
                                        <p className="text-black text-sm ">Title</p>
                                        <TitleSelect />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 w-full">
                                    <div className="text-sm w-full">
                                        <UsedInput lable="Email" type="email" />
                                    </div>
                                    <div className="text-sm w-full">
                                        <UsedInput lable="Phone Number" type="number" />
                                    </div>
                                </div>
                                <div className="text-sm w-full">
                                    <UsedInput lable="Password" type="password" />
                                </div>
                                <AccessTable />
                                <div className="grid sm:grid-cols-2 gap-4 w-full">
                                    <button onClick={close} className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light">Cancel</button>
                                    <button onClick={close} className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
                                        Save Changes
                                        <IoIosCheckmarkCircleOutline className="text-white text-xl" />
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
