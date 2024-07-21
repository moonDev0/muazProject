import React from 'react'
import SignupHeader from './signupHeader'
import { FaRegEnvelope, FaCreditCard, FaRegCalendar } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import Progress from './progress'

const Payment = ({ onPrevious }) => {

    const handlePrevious = () => {
        onPrevious();
      };


  return (
    <div className=' mb-32'>
        <div className=' mx-5 md:mx-0'>
            <SignupHeader img="/images/Credit card-rafiki 1.png" content="We are all required to do more, to meet more challenges with fewer resources, Adopting a more strategic and systematic approach to wellbeing is likely to make your staff feel more valued, positive and supported. And let's face it, A happy workforce is also a healthy one"/>
            <Progress bg1="bg-primary" bg='bg-primary' strip='bg-primary' strip1='bg-primary' strip2='bg-[#9F9ED5]'/>
        </div>

        <div className=' container mx-auto'>
            <div className=' flex justify-center flex-wrap md:flex-nowrap gap-8 mb-10 mt-5 md:mt-20'>
                <button className=' bg-primary shadow-lg text-white font-bold px-12 text-[18px] font-syne rounded-br-lg rounded-tl-lg py-2'>Card Payment</button>
                <button className=' border shadow-lg border-primary text-primary font-bold px-20 text-[18px] font-syne rounded-br-lg rounded-tl-lg py-1'>Paypal</button>
            </div>

            <div className=' text-black font-bold font-syne w-full px-5 md:px-0 md:w-[70%] md:mx-auto'>
                <div>
                    <h1 className=' ml-2 md:ml-5'>Email</h1>
                    <div className=' flex items-center justify-center'>
                        <input type="text" className=' rounded-br-lg rounded-tl-lg border-2 mt-2 border-[#BFBFBF] bg-[#F3F1F1] outline outline-[#F3F1F1] py-2 px-3 w-full' placeholder='@gmail.com........' name="" id="" />
                        <i className=' text-primary hidden md:block mt-2 text-[20px] ml-[-40px]'>
                             <FaRegEnvelope />
                        </i>
                    </div>
                </div>

                <div className=' mt-5'>
                    <h1 className=' ml-2 md:ml-5'>Card Holders Name</h1>
                    <div className=' flex items-center justify-center'>
                        <input type="text" className=' rounded-br-lg rounded-tl-lg border-2 mt-2 border-[#BFBFBF] bg-[#F3F1F1] outline outline-[#F3F1F1] py-2 px-3 w-full' placeholder='@gmail.com........' name="" id="" />
                        <i className=' text-primary mt-2 hidden md:block text-[20px] ml-[-40px]'>
                        <LuUser />
                        </i>
                    </div>
                </div>

                <div className=' mt-5'>
                    <h1 className=' ml-2 md:ml-5'>Card Number</h1>
                    <div className=' flex items-center justify-center'>
                        <input type="password" className=' rounded-br-lg rounded-tl-lg border-2 mt-2 border-[#BFBFBF] bg-[#F3F1F1] outline outline-[#F3F1F1] py-2 px-3 w-full' placeholder='2345 6787' name="" id="" />
                        <i className=' text-primary mt-2 text-[20px] hidden md:block ml-[-40px]'>
                        <FaCreditCard />
                        </i>
                    </div>
                </div>

                <div className=' flex flex-wrap md:flex-nowrap gap-8'>
                    <div className=' mt-5 w-full'>
                        <h1 className=' ml-2 md:ml-5'>Exp Date</h1>
                         <div className=' flex items-center justify-center'>
                            <input type="text" className=' rounded-br-lg rounded-tl-lg border-2 mt-2 border-[#BFBFBF] bg-[#F3F1F1] outline outline-[#F3F1F1] py-2 px-3 w-full' placeholder='06/2024' name="" id="" />
                            <i className=' text-primary mt-2 text-[20px] hidden md:block md:ml-[-40px]'>
                            <FaRegCalendar />
                        </i>
                        </div>
                    </div>
                    
                    <div className=' mt-5 w-[400px]'>
                          <h1 className=' ml-2 md:ml-5'>cvv</h1>
                         <div className=' flex items-center justify-center'>
                            <input type="text" className=' rounded-br-lg rounded-tl-lg border-2 mt-2 border-[#BFBFBF] bg-[#F3F1F1] outline outline-[#F3F1F1] py-2 px-3 w-full' placeholder='' name="" id="" />
                          <i className=' text-primary mt-2 hidden md:block text-[20px] md:ml-[-40px]'>
                            
                          </i>
                        </div>
                    </div>
                </div>

                <div className=' container mx-auto flex justify-start mt-20 mr-1 text-[20px]'>
                    <button onClick={handlePrevious} className=' font-bold text-black'>Previous</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment