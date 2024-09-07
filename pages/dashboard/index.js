import React from 'react'
import Layout from '../layout'
import { FaBell } from "react-icons/fa";
import userIcon from '../../public/images/dashboarsd-user-icon.png'
import Image from 'next/image';
import { FaFileAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Statistics from '@/components/chart/chart';
import IndexDash from '@/dash/indexDash';


const index = () => {
    

   
  return (
    <Layout>
    <div className='  h-[100vh]  w-full bg-[#EFEFEF]'>    
      <IndexDash/>
  </div>

    </Layout>
  )
}

export default index