import useCurrentCertStore from "@/store/currentCertStore";
import Link from "next/link";
import React, { useEffect } from "react";

function FullModalContainer({ handleCancel, rowData, handleConfirm, message, loading }) {
    const { savecurrentCert } = useCurrentCertStore();

    useEffect(() => {
        if (rowData) {
            savecurrentCert(rowData);
        }
    }, [rowData]); // Added rowData to the dependency array

    console.log(rowData);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-50">
            <div className="p-4 bg-slate-200 w-[300px] min-h-[150px] text-center rounded-lg shadow-lg">
                <p className="text-[15px] text-black">{message}</p>
                {console.log(message)}
                <div className="flex gap-4 justify-center items-center mt-4">
                    <button
                        className="border p-2 bg-red-600 text-white rounded-[8px] text-[14px]"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <Link
                        href="/landcerts"
                        target="__blank"
                        className="p-2 rounded-[8px] text-[14px] bg-[#0D6EFD] text-white"
                    >
                        {loading ? "Loading..." : "Confirm"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FullModalContainer;
