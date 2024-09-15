import React, { useLayoutEffect, useState } from "react";
import Spinner from "@/lib/spinner";
import { LiaTimesSolid } from "react-icons/lia";



function AddStaff({ mode, rowData, handleChange, handleAddUser, actionLoading, closeModal }) {
  const [formData, setFormData]=useState({})

  useLayoutEffect(() => {
    setFormData({
      id: rowData?.id || "",
      firstName: rowData?.firstName || "",
      lastName: rowData?.lastName || "",
      middleName: rowData?.middleName || "",
      emailAddress: rowData?.emailAddress || "",
      phoneNumber: rowData?.phoneNumber || "",
      children: [],
    });
  }, [rowData]);

  return (
    <div className="p-8 ">
      <div className="flex justify-between items-center  text-[18px] text-black">
        <h3 className="font-semibold ">
          {mode === "edit" ? "Edit" : mode === "view" ? "View" : "Add"} Staff
        </h3>
        <LiaTimesSolid
          onClick={closeModal}
          className="cursor-pointer"
        />
      </div>
      <form onSubmit={(e) => handleAddUser(e, mode)} className="">
        <div className=" gap-5">
          <div className=' w-full mt-10'>
            <label className='text-[15px] text-black font-normal'>First Name</label>
            <input
              readOnly={mode === "view"}
              required value={formData.firstName} onChange={handleChange} name="firstName" type="text" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' />
          </div>
          <div className=' w-full mt-10'>
            <label className=' text-[15px] text-black font-normal'>Middle Name</label>
            <input readOnly={mode === "view"} value={formData.middleName} onChange={handleChange} name="middleName" type="text" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' />
          </div>
          <div className=' w-full mt-10'>
            <label className='text-[15px] text-black font-normal'>Last Name</label>
            <input readOnly={mode === "view"} required value={formData.lastName} onChange={handleChange} name="lastName" type="text" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' />
          </div>
          <div className=' w-full mt-10'>
            <label className='text-[15px] text-black font-normal'>Email</label>
            <input readOnly={mode === "view"} required value={formData.emailAddress} onChange={handleChange} name="emailAddress" type="email" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' autoComplete="off" />
          </div>
          <div className=' w-full mt-10'>
            <laebl className='text-[15px] text-black font-normal'>Phone Number</laebl>
            <input readOnly={mode === "view"} required value={formData.phoneNumber} onChange={handleChange} name="phoneNumber" type="text" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' />
          </div>
          {mode !== "view" && mode !== "edit" && (
            <div>
              <div className=' w-full mt-10'>
                <label className='text-[15px] text-black font-normal'>Password</label>
                <input required onChange={handleChange} value={formData.password} name='password' type="password" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' id="" autoComplete="new-password" />
              </div>
              <div className=' w-full mt-10'>
                <label className='text-[15px] text-black font-normal'>Re-enter Password</label>
                <input required onChange={handleChange} value={formData.confirmPassword} name='confirmPassword' type="password" className='w-full border border-gray-300  py-3 px-5 outline-none mt-2 text-[14px]' id="" autoComplete="new-password" />
              </div>
            </div>
          )}
        </div>
        {mode !== "view" && (
          <button className=" col-span-2 w-full mt-5 rounded-[8px] bg-primary text-white text-[16px] py-[8px]">
            {
              actionLoading?.loading ? <Spinner /> : "Submit"
            }

          </button>
        )}
      </form>
    </div>
  );
}


export default AddStaff;