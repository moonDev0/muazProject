import React, { useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../UIcomponents/Table";
import { HiOutlineSearch } from "react-icons/hi";

const UsersComponents = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { firstName: "Student", lastName: "Name1", email: "user1@example.com" },
    { firstName: "Student", lastName: "Name2", email: "user2@example.com" },
    { firstName: "Student", lastName: "Name3", email: "user3@example.com" },
    { firstName: "Student", lastName: "Name4", email: "user4@example.com" },
    { firstName: "Student", lastName: "Name5", email: "user5@example.com" },
  ];

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

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt />

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
            { name: "First Name", identifier: "firstName" },
            { name: "Last Name", identifier: "lastName" },
            { name: "Email", identifier: "email" },
          ]}
          data={users}
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
          <p>{`Modal Open for ${rowData?.firstName} ${rowData?.lastName}`}</p>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default UsersComponents;
