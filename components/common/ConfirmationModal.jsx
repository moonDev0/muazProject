import React from "react";
// import Loader from "./Loader";
import Loader from "@/lib/loader";


function ConfirmationModal({ handleCancel, handleConfirm, message, loading }) {
  return (
    <div className="p-4 text-center">
      <p className="text-[15px] text-black">{message}</p>
      {console.log(message)}
      <div className="flex gap-4 justify-center items-center mt-4">
        <button
          className="border p-2 bg-red-600 text-white rounded-[8px] text-[14px]"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="p-2 rounded-[8px] text-[14px] bg-[#0D6EFD] text-white"
          onClick={handleConfirm}
        >
          {loading ? <Loader /> : "Confirm"}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;