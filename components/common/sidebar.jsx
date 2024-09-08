import React, { useState } from "react";
import { useRouter } from "next/router";
import { GiResize } from "react-icons/gi";
import useLogout from "@/hooks/loggout";
import {
  FaHome,
  FaUsers,
  FaVoteYea,
  FaBell,
  FaAngleDown,
  FaAngleUp,
  FaUserEdit,
  FaSignOutAlt,
  FaSchool,
  FaTasks,
  FaMailBulk,
} from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoLogInSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/newlogo.png";

const Sidebar = () => {
  const router = useRouter();
  const { logout, error, loading } = useLogout();

  const sidebarItems = [
    { text: "Dashboard", href: "/dashboard/dashboard", icon: <AiOutlineAppstore /> },
    { text: "Certificates", href: "/dashboard/events", icon: <FaSchool /> },
    { text: "Approved", icon: <FaUsers /> },
    { text: "Pending", icon: <FaTasks /> },
    { text: "Apply Now", href: "/registerLand", icon: <FaTasks /> },
    { text: "Rejected", href: "/dashboard/reminders", icon: <FaMailBulk /> },
    { text: "Emails", href: "/dashboard/reminders", icon: <HiChatBubbleLeftRight /> },
    { text: "Logs", href: "/dashboard/reminders", icon: <IoLogInSharp /> },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const isSublinkActive = (sublinks) => sublinks.some((sublink) => router.pathname === sublink.href);

  const toggleDropdown = (index) => setOpenDropdown((prev) => (prev === index ? null : index));

  return (
    <div className="bg-primary pb-2 font-KumbhSan w-[250px] h-[96vh] fixed my-3 mx-3 rounded-3xl px-8 text-white">
      <Link href="/">
        <div className="logo w-full mt-10">
          <Image src={logo} alt="logo" className="h-[70px] w-[70px] mx-auto" />
        </div>
      </Link>
      <ul className="firstUL">
        {sidebarItems.map((item, index) => (
          <li key={index} className="text-sm py-3">
            {item.sublinks ? (
              <div>
                <a
                  href="#"
                  className={`${
                    openDropdown === index || isSublinkActive(item.sublinks)
                      ? "text-blue-800 font-bold text-3xl bg-orange-500 py-4"
                      : "text-white text-sm"
                  } flex items-center pl-2 font-bold`}
                  onClick={() => toggleDropdown(index)}
                >
                  <ul className="flex items-center">
                    <li>{item.icon}</li>
                    <li className="navitem text-sm font-medium">{item.text}</li>
                  </ul>
                  <span className="mx-2">{openDropdown === index ? <FaAngleUp /> : <FaAngleDown />}</span>
                </a>
                {openDropdown === index && (
                  <ul className="ml-2">
                    {item.sublinks.map((sublink) => (
                      <li key={sublink.href} className="text-sm">
                        <a
                          href={sublink.href}
                          className={`${
                            router.pathname === sublink.href
                              ? "text-blue-800 py-2 bg-white font-bold"
                              : "text-white font-bold"
                          } flex items-center pl-2`}
                        >
                          <ul className="flex items-center">
                            <li className="pr-2">{sublink.icon}</li>
                            <li className="navitem text-sm font-medium">{sublink.text}</li>
                          </ul>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className={`${
                  router.pathname === item.href
                    ? "text-blue-800 font-bold py-2 bg-orange-500 pl-2"
                    : "text-white"
                } flex items-center pl-2 font-medium`}
              >
                <ul className="flex">
                  <li className="pr-2">{item.icon}</li>
                  <li className="navitem">{item.text}</li>
                </ul>
              </a>
            )}
          </li>
        ))}
      </ul>

      <ul className="mt-20 text-sm font-medium ml-2">
        <li>
          <Link href="/profile" className="flex items-center">
            <i className="mr-2"><FaUserEdit /></i>
            <h1>Profile</h1>
          </Link>
        </li>

        <li className="mt-5">
          <button onClick={logout} className="flex items-center" disabled={loading}>
            <i className="mr-2"><FaSignOutAlt /></i>
            <h1>{loading ? 'Signing Out...' : 'Sign Out'}</h1>
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </li>

        <li className="mt-6 mb-5">
          <Link href="/some-other-page" className="flex items-center">
            <i className="mr-2"><GiResize /></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
