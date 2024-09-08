import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GoDotFill } from "react-icons/go";

const NavbarAlt = ({ title }) => {
  

  return (
    <div>
      <div className='w-full flex text-black justify-between'>
        <h1 className='font-KumbhSan font-bold text-[16px] md:text-[23px]'>{title}</h1>
        <div className='flex text-black gap-3 items-center justify-center'>
          <div className='rounded-full p-2 bg-[white]' >
            <span className=' text-red-500 text-[12px]'>1</span>
            <FaBell />
          </div>

          <div className='cursor-pointer font-semibold text-right text-[12px] md:text-[13px] font-KumbhSan'>
            <h1>userName</h1>
            <p className='leading-3 text-[10px]'>role</p>
          </div>

          <div onClick={() => router.push('/profile')} className="uppercase cursor-pointer font-medium rounded-full bg-gradient-to-r from-red-600 to-yellow-500">
            <h1 className="text-[30px] px-4 text-primary py-2 m-1">M</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default NavbarAlt;