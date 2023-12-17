"use client";
import { AddSquare, Edit, Trash } from "iconsax-react";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const [open, setOpen] = useState(false);
  const remove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const update = (name: string, family: string, id: string) => {
    Swal.fire({
      title: "Edit User'info",
      html: `<div>
      <input value="${name}" id="name" class="border-2 border-blue-500 outline-none p-2 rounded-md mb-3" spellCheck="false"  />
      <input value="${family}" family="family" class="border-2 border-blue-500 outline-none p-2 rounded-md" spellCheck="false" />
      </div>`,
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(document.querySelector("#name").value);
      }
    });
  };

  const Addmarks = (name: string, family: string, id: string) => {
    setOpen(true);
  };

  return (
    <>
      <div className="w-full bg-blue-50 min-h-screen overflow-auto p-4">
        {open && (
          <div className="fixed inset-0 z-10 bg-black/50 p-4">
            <div className="w-full h-full bg-white rounded-md flex justify-between items-start flex-col p-4 overflow-auto">
              <div className="w-full flex justify-start items-start flex-col">
                <span className="text-blue-700 font-semibold">
                  Alireza Ahmadi
                </span>
                <div className="w-full justify-start items-start flex-col mt-6">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      className="w-full flex justify-between items-center flex-wrap"
                      key={i}
                    >
                      <span className="text-blue-500 text-sm mb-2">Mehr</span>
                      <div className="flex justify-start items-center mb-2">
                        <input
                          className="px-2 py-1  text-sm
                      inline-block w-[70px] rounded-md border-2 border-blue-200 focus:border-blue-700 outline-none"
                          placeholder="G"
                        />
                        <input
                          className="p-2 py-1
                      text-sm
                      inline-block w-[70px] rounded-md border-2 border-blue-200 ml-3 focus:border-blue-700 outline-none"
                          placeholder="S"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button
                  className="p-2 bg-red-500 text-white outline-none rounded-md text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button className="p-2 bg-blue-500 text-white outline-none rounded-md text-sm ml-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="text-blue-600 flex justify-start items-start flex-wrap mb-2"
          >
            <div className="bg-blue-100 py-1 px-2 rounded-md flex justify-start items-center flex-wrap mr-5 mb-2">
              <span>Mohammadreza</span>
              <span className="ml-2">Zolfaghari</span>
            </div>
            <div className="flex justify-start items-center bg-blue-100 p-2 rounded-md mb-2">
              <AddSquare
                className="cursor-pointer text-slate-600 mr-2"
                size="18"
                onClick={() => Addmarks("ds", "dsd", "ds")}
              />
              <Trash
                onClick={() => remove(i)}
                className="cursor-pointer text-red-500"
                size="18"
              />
              <Edit
                onClick={() => update("mohammad", "zolfaghari", "dsd")}
                size="18"
                className="ml-2 cursor-pointer text-blue-900"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Users;
