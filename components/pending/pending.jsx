import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../UIcomponents/Table";
import { HiOutlineSearch } from "react-icons/hi";
import axios from "axios";

const PendingComponents = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData]=useState([])

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

  
  useEffect(() => { 
        const fetchData = async () => {
          setLoading(true)
            try {
                const response = await axios.get('/api/getAllLands');
                setData(response.data);
                setLoading(false);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Pending Land Certificates" />

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
            { name: "owner", identifier: "fullName" },
            { name: "Phone Number", identifier: "phoneNumber" },
            { name: "Status", identifier: "status" },
            { name: "Email", identifier: "email" },
          ]}
          data={data}
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

export default PendingComponents;
