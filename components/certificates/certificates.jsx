"use client";
import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../UIcomponents/Table";
import { HiOutlineSearch } from "react-icons/hi";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase'; // Import Firebase Firestore
import ModalContainerAlt from "../common/modalContainerAlt";
import LandOwnershipCertificate from "../UIcomponents/landCert";
import FullModalContainer from "../common/FullModalContainer";

const CertificatesComponents = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState({ modalName: "", showModal: false });
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  // Function to handle viewing a user
  const handleView = (user) => {
    console.log("Viewing user:", user);
    setRowData(user);
    setOpenModal({ modalName: "view", showModal: true }); // Update this line
  };

  const closeModal = () => {
    setOpenModal({ modalName: "", showModal: false }); // Function to close the modal
    setRowData(null); // Clear the row data if needed
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'Lands'));
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Land Ownership Certificates" />

      <div className="relative">
        <input
          className="w-[343px] h-[45px] rounded-[8px] text-black pl-[36px] pr-4 font-KumbhSan text-[12px] relative outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="absolute top-[14px] left-[15px] text-[20px]">
          <HiOutlineSearch />
        </span>
      </div>

      <div className="mt-10">
        <Table
          header={[
            { name: "Owner", identifier: "fullName" },
            { name: "Phone Number", identifier: "phoneNumber" },
            { name: "Status", identifier: "status" },
            { name: "Email", identifier: "email" },
          ]}
          data={data.filter(item => item.status === "approved")}
          searchQuery={searchQuery}
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: false,
            allowActions: true,
            actions: {
              edit: true,
              view: true,
              delete: true,
            },
          }}
          setRowData={setRowData}
          setOpenModal={setOpenModal}
          loading={loading}
          handleView={handleView} // Make sure to pass this to your Table component if needed
        />
      </div>

      {openModal.showModal && openModal.modalName === "view" && (
        <FullModalContainer rowData={rowData} message="Click confirm to view certificate" handleCancel={closeModal}/>
      )}
    </div>
  );
};

export default CertificatesComponents;
