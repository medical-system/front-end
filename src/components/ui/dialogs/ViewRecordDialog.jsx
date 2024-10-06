import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import MedicinTableData from "../tables/MedicinTableData";

export default function ViewRecordModal() {
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
        className="text-sm flex-colo center bg-white text-subMain border border-border rounded-md w-2/4 md:w-10 h-10"
      >
        <BsEye />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 p-4 min-h-full z-10 w-screen overflow-y-auto bg-black bg-opacity-25 flex items-center justify-center">
          <div className="w-full min-h-full max-w-4xl mt-[340px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <DialogPanel
              transition
              className="w-full rounded-xl bg-white/5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* header */}
              <div className="w-full flex-btn gap-2 mb-8">
                <h1 className="text-md font-semibold">12 May 2021</h1>
                <button
                  onClick={close}
                  className="w-14 h-12 bg-dry text-red-600 rounded-md flex-colo text-2xl font-extrabold"
                >
                  <IoClose />
                </button>
              </div>

              {/* content */}
              <div className="flex-colo gap-6">
                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Complaint:</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6">
                    <p className="text-xs text-main font-light leading-5">
                      Sudden loss of vision,Red eyes,Double vision,Blurred
                      vision
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Diagnosis:</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6">
                    <p className="text-xs text-main font-light leading-5">
                      High blood pressure, Diabetes, Hypertension
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Treatment:</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6">
                    <p className="text-xs text-main font-light leading-5">
                      Refractive Lens Exchange (RLE)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Vital Signs:</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6">
                    <p className="text-xs text-main font-light leading-5">
                      Blood Pressure: 120/80 mmHg,Pulse Rate: 80 bpm,Respiratory
                      Rate: 16 bpm,Temperature: 36.5 °C,Oxygen Saturation: 98%,
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Prescriptions</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6 overflow-auto">
                    <MedicinTableData type="view" />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm font-medium">Attachments:</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6 xs:grid-cols-2 md:grid-cols-4 grid gap-4">
                    <img
                      src="https://placehold.it/300x300"
                      alt="attachment"
                      className="w-full md:h-32 object-cover rounded-md"
                    />
                    <img
                      src="https://placehold.it/300x300"
                      alt="attachment"
                      className="w-full md:h-32 object-cover rounded-md"
                    />
                    <img
                      src="https://placehold.it/300x300"
                      alt="attachment"
                      className="w-full md:h-32 object-cover rounded-md"
                    />
                    <img
                      src="https://placehold.it/300x300"
                      alt="attachment"
                      className="w-full md:h-32 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center w-full">
                  <div className="md:w-3/4 w-full">
                    <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1]">
                      View Invoice
                      <BsEye className="text-lg leading-3"/>
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
