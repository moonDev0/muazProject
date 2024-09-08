import React from 'react'
import Layout from '../layout'
import IndexDash from '@/dash/indexDash';


const Dashboard = () => {
    

   
  return (
    <Layout>
    <div className=' pl-[300px]  h-[100vh]  w-full bg-[#EFEFEF]'>    
      <IndexDash/>
  </div>

    </Layout>
  )
}

export default Dashboard