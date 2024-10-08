import React, { useLayoutEffect, useState } from "react";
import Spinner from "@/lib/spinner";
import { LiaTimesSolid } from "react-icons/lia";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../firebase"; // Assuming you have a Firebase config file
import Image from "next/image";

function AddStaff({ mode, rowData, handleChange, actionLoading, closeModal }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber:"",
    status: "",
    address: "", // Include address if needed
    email: "",
    latitude: "",
    longitude: "",
    size: "", // Include address if needed
    createdAt: "",
    uid: "",
    address: "", // I
    imageUrl: "",
    imageUrl1: "",
    comment: "",
  });

  console.log(rowData);

  useLayoutEffect(() => {
    setFormData({
      fullName: rowData?.fullName || "",
      phoneNumber: rowData?.phoneNumber || "",
      status: rowData?.status || "",
      address: rowData?.address || "", // Include address if needed
      email: rowData?.email || "",
      latitude: rowData?.latitude || "",
      longitude: rowData?.longitude || "",
      size: rowData?.size || "", // Include address if needed
      createdAt: rowData?.createdAt || "", 
      uid: rowData?.uid || "",
      address: rowData?.address || "",
      imageUrl: rowData?.imageUrl || "",
      imageUrl1: rowData?.imageUrl1 || "", // Include address if needed
    });
  }, [rowData]);

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!rowData.uid) {
      console.error("UID not provided");
      return;
  }

    const docRef = doc(db, "Lands", rowData.uid); // Use formData.id which is rowData.uid
    try {
      // Set the Firestore document
      await setDoc(docRef, {
        fullName: formData.fullName,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        status: formData.status,
        address: formData.address, // Include address if needed
        email: formData.email,
        latitude: formData.latitude,
        longitude: formData.longitude,
        size: formData.size, // Include address if needed
        createdAt: formData.createdAt,
        uid: formData.uid,
        address: formData.address,
        imageUrl: formData.imageUrl,
        imageUrl1: formData.imageUrl1,  // Include other fields if needed
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
            <label className="text-[15px] text-black font-normal">Email</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              name="email"
              type="text"
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
          </div>

          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Latitude</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.latitude}
              onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
              name="latitude"
              type="text"
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
          </div>

          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Longitude</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.longitude}
              onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
              name="longitude"
              type="text"
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
          </div>

          <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Size</label>
            <input
              readOnly={mode === "view"}
              required
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              name="size"
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
          <h1 className="text-[15px] mt-10 text-black font-normal">Land Images</h1>
          <div className="w-full grid grid-cols-2 justify-items-center mt-10">
          <img src={rowData?.imageUrl} width={200} height={200} className="" alt=""/>
          <img src={rowData?.imageUrl1} width={200} height={200} className="" alt=""/>
        </div>

        <div className="w-full mt-10">
            <label className="text-[15px] text-black font-normal">Comments</label>
            <textarea
              readOnly={mode === "viewd"}
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              name="comment"
              type="text"
              rows={3}
              className="w-full border border-gray-300 py-3 px-5 outline-none mt-2 text-[14px]"
            />
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
