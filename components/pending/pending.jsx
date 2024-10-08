import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../UIcomponents/Table";
import { HiOutlineSearch, LiaTimesSolid } from "react-icons/hi";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase'; // Import Firebase Firestore
import ModalContainerAlt from "../common/modalContainerAlt";
import AddStaff from "../UIcomponents/AddStaff";
import useUserStore from "@/store/useStore";

const PendingComponents = () => {
  const [loading, setLoading] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [openModal, setOpenModal] = useState({ modalName: "", showModal: false });
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const {user} = useUserStore();

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

  const  closeModal = ()=>{
    setOpenModal({
      modalName: "", 
      showModal: false
    })
  }
  console.log(data)

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

      {
        user?.role == "admin" ?

        <Table
          header={[
            { name: "Owner", identifier: "fullName" },
            { name: "Phone Number", identifier: "phoneNumber" },
            { name: "Status", identifier: "status" },
            { name: "Email", identifier: "email" },
          ]}
          data={data.filter((item, index)=> item.status == "pending")}
          searchQuery={searchQuery} // Filter the table based on the search
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: true,
            allowActions: true, // Enabling actions
            actions: {
              edit: true,
              view: true,
              delete: true,
            },
          }}
          setRowData={setRowData}
          setOpenModal={setOpenModal}
          loading={loading}
        />
        :
        <Table
          header={[
            { name: "Owner", identifier: "fullName" },
            { name: "Phone Number", identifier: "phoneNumber" },
            { name: "Status", identifier: "status" },
            { name: "Email", identifier: "email" },
          ]}
          data={data.filter((item, index)=> item.status == "pending")}
          searchQuery={searchQuery} // Filter the table based on the search
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: true,
            allowActions: true, // Enabling actions
            actions: {
              edit: false,
              view: true,
              delete: false,
            },
          }}
          setRowData={setRowData}
          setOpenModal={setOpenModal}
          loading={loading}
        />
      }
      </div>

      {openModal.modalName === "edit" && openModal?.showModal && (
                <ModalContainerAlt>
                  <AddStaff mode="edit" rowData={rowData}  closeModal={closeModal}/>
                </ModalContainerAlt>
            )}

     {openModal.modalName === "view" && openModal?.showModal && (
              <ModalContainerAlt>
                <AddStaff mode="view" rowData={rowData}  closeModal={closeModal}/>
              </ModalContainerAlt>
          )}
    </div>
  );
};

export default PendingComponents;
