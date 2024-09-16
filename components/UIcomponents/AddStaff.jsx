import React, { useLayoutEffect, useState } from "react";
import Spinner from "@/lib/spinner";
import { LiaTimesSolid } from "react-icons/lia";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../firebase"; // Assuming you have a Firebase config file
import Image from "next/image";

function AddStaff({ mode, rowData, handleChange, actionLoading, closeModal }) {
  const [formData, setFormData] = useState({
    fullName: "",
    status: "",
    address: "",
    phoneNumber: "",
    imageUrl:"",
    id:"",
    uid:""

  });

  console.log(rowData);

  useLayoutEffect(() => {
    setFormData({
      id: rowData?.uid || "", // Use rowData.uid for Firestore document ID
      fullName: rowData?.fullName || "",
      phoneNumber: rowData?.phoneNumber || "",
      status: rowData?.status || "",
      address: rowData?.address || "", // Include address if needed
    });
  }, [rowData]);

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!formData.id) {
      console.error("UID not provided");
      return;
    }

    const docRef = doc(db, "Lands", rowData.uid); // Use formData.id which is rowData.uid
    try {
      // Set the Firestore document
      await setDoc(docRef, {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        status: formData.status,
        address: formData.address, // Include other fields if needed
      }, { merge: true }); // Use merge to only update fields instead of overwriting the document

      console.log("Document updated successfully");
      closeModal(); // Close modal on success
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  console.log(rowData)

  return (
    <div className="p-8 text-black">
      <div className="flex justify-between items-center text-[18px] text-black">
        <h3 className="font-semibold">
          {mode === "edit" ? "Edit" : mode === "view" ? "View" : "Add"} Land
        </h3>
        <LiaTimesSolid onClick={closeModal} className="cursor-pointer" />
      </div>
      <form onSubmit={handleAddUser} className="">
        <div className="gap-5">
          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Full Name</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              name="fullName"
              type="text"
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
          </div>
          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Phone Number</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              name="phoneNumber"
              type="text"
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
          </div>
          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Status</label>
            {mode === "view" ? (
              <input
                readOnly
                value={formData.status}
                name="status"
                type="text"
                className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
              />
            ) : (
              <select
                required
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                name="status"
                className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
              >
                <option value="">Select status</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="approved">Approved</option>
              </select>
            )}
          </div>
          <div className="w-full mt-10">
          <label className="text-[15px] text-black font-normal">Land Image</label>
          <img src={rowData?.imageUrl} width={122} height={122} className="" alt=""/>
        </div>
        </div>

        {mode !== "view" && (
          <button className="col-span-2 w-full mt-5 rounded-[8px] bg-primary text-white text-[16px] py-[8px]">
            {actionLoading?.loading ? <Spinner /> : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
}

export default AddStaff;
