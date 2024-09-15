"use client";
import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../UIcomponents/Table";
import { HiOutlineSearch } from "react-icons/hi";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase'; // Import Firebase Firestore

const RejectedComponents = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  // Function to handle deleting a user
  const handleDelete = (user) => {
    console.log("Deleting user:", user);
    // Add actual delete logic here, such as updating state or making an API call
  };

  // Function to handle editing a user
  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setRowData(user);
    setModalIsOpen(true); // Example: Open a modal for editing
  };

  // Function to handle viewing a user
  const handleView = (user) => {
    console.log("Viewing user:", user);
    setRowData(user);
    setModalIsOpen(true); // Example: Open a modal for viewing
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetching data from Firestore collection 'Lands'
        const querySnapshot = await getDocs(collection(db, 'Lands'));
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
        setLoading(false);
        console.log(dataList); // View fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Rejected Lands" />

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
          data={data.filter((item, index)=> item.status == "rejected")}
          searchQuery={searchQuery} // Filter the table based on the search
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: false,
            allowActions: true, // Enabling actions
            actions: {
              edit: true,
              view: true,
              delete: true,
            },
          }}
          setRowData={setRowData}
          setOpenModal={setModalIsOpen}
          loading={loading}
        />
      </div>

      {modalIsOpen && (
        <div>
          {/* You can use a modal component here to display rowData */}
          <p>{`Modal Open for ${rowData?.fullName}`}</p>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default RejectedComponents;
