import Layout from '../layout'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@/store/useStore';
import { FaBell } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Statistics from '@/components/chart/chart';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; 

const fetchUserData = async (uid) => {
    const response = await axios.get(`/api/getUSerbyid?uid=${uid}`);
    return response.data;
};


const Dashboard = () => {
    

  const { user } = useUserStore();
    const uid = user?.uid;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    // Updated useQuery for v5 API
    const { data:databyID, error, isLoading } = useQuery({
        queryKey: ['fetchUserData', uid],
        queryFn: () => fetchUserData(uid),
        enabled: !!uid, // Ensure query is not executed if UID is not available
    });
    console.log(databyID);

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/getAllUser');
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
    <Layout>
    <div className=' pl-[300px]  h-[100vh]  w-full bg-[#EFEFEF]'>    
    <div className='  h-[100vh]  w-full bg-[#EFEFEF]'>    
                {/* main body begins here*/}
            <div className=' pl-[00px] xl:pr-[350px] 2xl:pr-[400px] mr-5 pt-14 text-black'>
               <div className=' mx-auto w-full flex justify-between'>
                    <h1 className=' text-[26px] font-semibold font-KumbhSan'>Dashboard</h1>
                    <div className=' flex items-center'>
                        <i className=' mr-[-30px] text-[20px] font-bold text-slate-500 z-10'><IoSearch /></i>
                        <input type="text" className=' pl-8  outline-none rounded-full py-2' name="" id="" />
                    </div>
               </div>

               <div className=' font-KumbhSan grid grid-cols-4 py-10 px-5 w-full bg-white mt-10'>
                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-primary p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>pending</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-[#F16529] p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>Approved</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-[#FFA800] p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>rejected</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-[#003122] p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>certificates</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>
               </div>


                <div className=' bg-white mt-5 p-5'>
                    <Statistics/>
                </div>



               <div className=' w-full bg-white font-poppins mt-5 px-10 py-5'>
                <h2 className=' font-semibold text-[16px]'>Pending submission</h2>

                <hr className=' my-2' />
                <div>
                    <div className=' text-[14px] font-medium grid grid-cols-4'>
                        <h1>name</h1>
                        <h1>Due date</h1>
                        <h1>Assigned to</h1>
                        <h1 className=' justify-self-end'>Status</h1>
                    </div>

                    <div className=''>
                        <div className=' h-[30px] w-full bg-[#EFEFFE] mt-2'></div>
                        <div className=' bg-white w-full h-[30px]'></div>
                        <div className=' h-[30px] w-full bg-[#EFEFFE] mt-2'></div>
                        <div className=' bg-white w-full h-[30px]'></div>
                    </div>
                </div>

               </div>


            </div>
             {/* main body ends here*/}

            {/* right sidebar begins here*/}
            <div className=' fixed top-0  pt-10 text-black pl-5 pr-8 right-0 bg-white h-screen xl:w-[350px] 2xl:w-[400px]'>
                <div className=' flex justify-end gap-6 items-center'>
                    <button className=' bg-[#EFEFEF] w-[30px] flex items-center justify-center h-[30px] text-black rounded-full p-2'>
                        <FaBell />
                    </button>
                    
                    <div>
                        {databyID?.fullName}
                    </div>
                </div>

                <div className=' my-2'>
                    <h1 className=' font-bold text-[21px]'>Messages</h1>

                    <div className=' ml-5 font-poppins'>
                        <div className=' mt-4 flex gap-4  items-center'>
                            <div className="icon mb-4 text-black bg-[#C1BBEB] rounded-full w-[50px] h-[40px]"></div>  
                            <div className=' h-full mt-[-10px] w-full'>
                                <div className=' flex gap-10 w-full items-center justify-between'>
                                <h2 className=' text-[#303972] font-semibold text-[12.7px] font-poppins'>Samantha William</h2>
                                <h2  className=' text-black font-semibold text-[12.7px] font-poppins'>12:45 PM</h2>
                                </div>
                                <p className=' text-[12.7px]'>Lorem ipsum dolor sit amet...</p>
                            </div>  
                        </div>
                        <hr className=' text-black border-[1px]  border-black opacity-30' />

                        
                          <div className=' mt-4 flex gap-4 items-center'>
                            <div className="icon mb-4 text-black bg-[#C1BBEB] rounded-full w-[50px] h-[40px]"></div>  
                            <div className=' h-full mt-[-10px] w-full'>
                                <div className=' flex gap-10 w-full items-center justify-between'>
                                <h2 className=' text-[#303972] font-semibold text-[12.7px] font-poppins'>Samantha William</h2>
                                <h2  className=' text-black font-semibold text-[12.7px] font-poppins'>12:45 PM</h2>
                                </div>
                                <p className=' text-[12.7px]'>Lorem ipsum dolor sit amet...</p>
                            </div>  
                        </div>
                        <hr className=' text-black border-[1px] border-black opacity-30' />

                          <div className=' mt-4 flex gap-4 items-center'>
                            <div className="icon mb-4 text-black bg-[#C1BBEB] rounded-full w-[50px] h-[40px]"></div>  
                            <div className=' h-full mt-[-10px] w-full'>
                                <div className=' flex gap-10 items-center w-full justify-between'>
                                <h2 className=' text-[#303972] font-semibold text-[12.7px] font-poppins'>Samantha William</h2>
                                <h2  className=' text-black font-semibold text-[12.7px] font-poppins'>12:45 PM</h2>
                                </div>
                                <p className=' text-[12.7px]'>Lorem ipsum dolor sit amet...</p>
                            </div>  
                        </div>
                        <hr className=' text-black border-[1px] border-black opacity-30' />

                        <div className=' mt-4 flex gap-4 items-center'>
                            <div className="icon mb-4 text-black bg-[#C1BBEB] rounded-full w-[50px] h-[40px]"></div>  
                            <div className=' h-full mt-[-10px] w-full'>
                                <div className=' flex gap-10 w-full items-center justify-between'>
                                    <h2 className=' text-[#303972] font-semibold text-[12.7px] font-poppins'>Samantha William</h2>
                                    <h2  className=' text-black font-semibold text-[12.7px] font-poppins'>12:45 PM</h2>
                                </div>
                                <p className=' text-[12.7px]'>Lorem ipsum dolor sit amet...</p>
                            </div>  
                        </div>
                        <hr className=' text-black border-[1px] border-black opacity-30' />

                        <div className=' flex justify-end mt-5'>
                            <button className=' bg-primary rounded-full text-[13px] text-white font-medium py-3 px-6'>View More</button>
                        </div>

                    </div>
                    

                    
                    
                </div>

                <div className=' font-KumbhSan'>
                    <h1 className=' font-bold ml-2 text-black'>Lastest Activity</h1>
                    <div className=' mt-2 ml-5'>
                        <div className=' flex  gap-5'>
                            <div className=' flex flex-col items-center justify-center'>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                                <div className=' w-[40px] h-[40px] bg-[#C1BBEB] rounded-full '></div>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                            </div>

                            <div className=' mt-5'>
                                <p className=' text-[11px] font-semibold'>Karen Hope moved task “ <span className=' text-[#FB7D5B]'>User Research</span> “ from On Progress to Done</p>
                                <p className=' font-medium text-[#A098AE] mt-2 text-[11px]'>2 March 2021, 13:45 PM</p>
                            </div>

                        </div>

                         <div className=' flex  gap-5'>
                            <div className=' flex flex-col items-center justify-center'>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                                <div className=' w-[40px] h-[40px] bg-[#C1BBEB] rounded-full '></div>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                            </div>

                            <div className=' mt-5'>
                                <p className=' text-[11px] font-semibold'>Karen Hope moved task “ <span className=' text-[#FB7D5B]'>User Research</span> “ from On Progress to Done</p>
                                <p className=' font-medium text-[#A098AE] mt-2 text-[11px]'>2 March 2021, 13:45 PM</p>
                            </div>

                        </div>

                        <div className=' flex  gap-5'>
                            <div className=' flex flex-col items-center justify-center'>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                                <div className=' w-[40px] h-[40px] bg-[#C1BBEB] rounded-full '></div>
                                <div className=' w-[2px] bg-[#C1BBEB] h-[20px]'></div>
                            </div>

                            <div className=' mt-5'>
                                <p className=' text-[11px] font-semibold'>Karen Hope moved task “ <span className=' text-[#FB7D5B]'>User Research</span> “ from On Progress to Done</p>
                                <p className=' font-medium text-[#A098AE] mt-2 text-[11px]'>2 March 2021, 13:45 PM</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>

    </Layout>
  )
}

export default Dashboard