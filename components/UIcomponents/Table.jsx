import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import Spinner from "@/lib/spinner";

function Table({
  header,
  data,
  options,
  openModal,
  setOpenModal,
  rowData,
  setRowData,
  searchQuery,
  state
}) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); 

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const filteredData = searchQuery
    ? data?.filter((item) =>
        Object?.values(item)?.some((value) =>
          value?.toString()?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        )
      )
    : data;

  const sortedData = filteredData?.slice()?.sort((a, b) => {
    const columnA = a[sortBy];
    const columnB = b[sortBy];
    return sortOrder === "asc"
      ? columnA?.localeCompare(columnB)
      : columnB?.localeCompare(columnA);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-auto">
      <table className={`w-full font-KumbhSan overflow-x-auto`}>
        <thead className={`bg-primary text-white`}>
          <tr className="topper bg-primary rounded-tl-xl">
            {header?.map((item, index) => (
              <th
                key={index}
                className="font-medium text-left px-5 py-2 cursor-pointer"
                onClick={() =>
                  options?.allowSorting && handleSort(item.identifier)
                }
              >
                {item.name}{" "}
                {sortBy === item.identifier && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
            ))}
            {options?.allowActions && (
              <th className="rounded-tr-xl text-center">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentItems?.length > 0 ? (
            currentItems.map((rowData, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-blue-300 text-black hover:text-black mt-1 px-5 font-medium ${
                  rowIndex % 2 === 0 ? "bg-[#E4E1FF]" : "bg-white"
                }`}
              >
                {header.map((column, colIndex) => (
                  <td className="py-5 px-5" key={colIndex}>
                    {rowData[column.identifier]}
                  </td>
                ))}
                {options?.allowActions && (
                  <td className="flex items-center py-3 justify-center gap-3">
                    {options?.actions?.edit && (
                      <span
                        className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setOpenModal({
                            modalName: "edit",
                            showModal: true,
                          });
                          setRowData(rowData);
                        }}
                      >
                        <CiEdit size={16} />
                      </span>
                    )}
                    {options?.actions?.view && (
                      <span
                        className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-300 cursor-pointer"
                        onClick={() => {
                          setOpenModal({
                            modalName: "view",
                            showModal: true,
                          });
                          setRowData(rowData);
                        }}
                      >
                        <IoEyeOutline size={15} />
                      </span>
                    )}
                    {options?.actions?.delete && (
                      <span
                        className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-red-300 cursor-pointer"
                        onClick={() => {
                          // Add your delete logic here
                          console.log("Delete", rowData);
                        }}
                      >
                        <FiTrash2 size={15} />
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <td
              colSpan={`${
                header.length + (options?.allowActions ? 1 : 0)
              }`}
              className="bg-[aliceblue] h-[50px] !py-[1rem] !text-center text-black leading-[80px] mx-auto w-full"
            >
              {state ? (
                <div className="flex justify-center">
                  <Spinner colour="blue" />
                </div>
              ) : (
                "No result Found"
              )}
            </td>
          )}
        </tbody>
      </table>
      {options?.showPagination && (
        <div className="mt-4 flex justify-between font-KumbhSan text-black items-center">
          <div className="flex items-center gap-2">
            <label className="text-[15px]">Items Per Page</label>
            <select
              className="bg-white p-2 rounded-md border-black border text-[13px]"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          {data?.length > itemsPerPage && (
            <div>
              <div className="flex gap-4">
                {[...Array(Math.ceil(data.length / itemsPerPage))].map(
                  (_, index) => {
                    const startPage = currentPage <= 3 ? 0 : currentPage - 3;
                    const endPage =
                      startPage + 5 >= Math.ceil(data.length / itemsPerPage)
                        ? Math.ceil(data.length / itemsPerPage)
                        : startPage + 5;

                    if (index >= startPage && index < endPage) {
                      return (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`${
                            currentPage === index + 1
                              ? "bg-blue-500 text-white p-2 px-4 rounded-md"
                              : ""
                          } text-[15px] cursor-pointer`}
                        >
                          {index + 1}
                        </button>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
