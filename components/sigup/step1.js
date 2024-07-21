import React, { useState } from 'react'
import Progress from './progress'
import SignupHeader from './signupHeader'

const SignupComponent = ({onNext}) => {
        const [name, setName] = useState('');
      
        const handleNext = () => {
          onNext({ name });
        };

  return (
    <div>
        <div className=' container mx-auto px-5 md:px-0'>
            <div>
                <SignupHeader img="/images/Sign upamico.png" content="We are all required to do more, to meet more challenges with fewer resources, Adopting a more strategic and systematic approach to wellbeing is likely to make your staff feel more valued, positive and supported. And let's face it, A happy workforce is also a healthy one"/>
            </div>    

            <div>
                <Progress strip='bg-[#9F9ED5]' strip1='bg-[#9F9ED5]' strip2='bg-[#9F9ED5]'/>
            </div>
        </div>

        <div className=' mt-10 px-5 md:px-0 container mx-auto'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className=' text-black font-bold font-syne'>
                    <h1>First Name</h1>
                    <input type="text" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>

                 <div className=' text-black font-bold font-syne'>
                    <h1>Surname</h1>
                    <input type="text" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>
            </div>
            
            <div className=' text-black font-bold mt-10 font-syne'>
                <h1>Email</h1>
                <input type="text" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
            </div>

             <div className=' grid grid-cols-1 md:grid-cols-2 mt-10 gap-8'>
                <div className=' text-black font-bold font-syne'>
                    <h1>Phone Number</h1>
                    <input type="text" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>

                 <div className=' text-black font-bold font-syne'>
                    <h1>Institution Name</h1>
                    <input type="text" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>
            </div>



            <div className=' grid grid-cols-1 md:grid-cols-2 mt-40 gap-8'>
                <div className=' text-black font-bold font-syne'>
                    <h1>Password</h1>
                    <input type="password" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>

                 <div className=' text-black font-bold font-syne'>
                    <h1>Re-enter password</h1>
                    <input type="password" className=' bg-[#F3F1F1] outline-1 mt-1 outline-[#BFBFBF] border-2 border-[#BFBFBF] rounded-br-lg rounded-tl-lg px-2 py-2 w-full' name="" id="" />
                </div>
            </div>

            <div className=' flex justify-end mt-20 mr-1 text-[24px] cursor-pointer'>
                <button onClick={handleNext} className=' font-extrabold text-primary'>Next</button>
            </div>
        </div>

        
    </div>
  )
}

export default SignupComponent