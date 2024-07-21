import React, { useState } from 'react'
import Progress from './progress'
import SignupHeader from './signupHeader'

const Subscription = ({ onNext, onPrevious }) => {
    const [name, setName] = useState('');

    const handleNext = () => {
        onNext({ name });
      };
      const handlePrevious = () => {
        onPrevious();
      };


  return (
    <div className=' mt-32'>
        <div className=' container mx-auto px-5 md:px-0'>
            <SignupHeader img='/images/Subscriptions-amico 1.png' content="We are all required to do more, to meet more challenges with fewer resources, Adopting a more strategic and systematic approach to wellbeing is likely to make your staff feel more valued, positive and supported. And let's face it, A happy workforce is also a healthy one"/>
            <Progress bg="bg-primary" strip='bg-primary' strip1='bg-[#9F9ED5]' strip2='bg-[#9F9ED5]'/>
        </div>

        <div className="container mx-auto">
            <div className=' grid grid-cols-3 text-[#7E7B7B] text-[14px] md:text-[16px] lg:text-[24px] font-syne px-10 font-bold mt-10'>
                <h1>Packages</h1>
                <h1 className=' text-center'>Amount</h1>
                <h1 className=' text-right'>Selection</h1>
            </div>

            <div className=' border font-bold mx-5 md:mx-0 text-[13px] md:text-[20px] font-syne px-10 mt-5 border-[#969696]'>
                <ul className=' grid justify-items-center my-4 grid-cols-3 text-black w-full'>
                    <li className=' justify-self-start'>Generate Reports</li>
                    <li>___</li>
                    <li className=' justify-self-end'> <input type="radio" name="" id="" /></li>
                </ul>

                  <ul className=' grid justify-items-center my-4 grid-cols-3 text-black w-full'>
                    <li className=' justify-self-start'>Audits</li>
                    <li>500</li>
                    <li className=' justify-self-end'> <input type="radio" name="" id="" /></li>
                </ul>

                <ul className=' grid justify-items-center my-4 grid-cols-3 text-black w-full '>
                    <li className=' justify-self-start'>Survey Stakeholders</li>
                    <li>500</li>
                    <li className=' justify-self-end'> <input type="radio" name="" id="" /></li>
                </ul>

                <ul className=' grid justify-items-center my-4 grid-cols-3 text-black w-full '>
                    <li className=' justify-self-start'>Manage Workload</li>
                    <li>500</li>
                    <li className=' justify-self-end'> <input type="radio" name="" id="" /></li>
                </ul>

                <ul className=' grid justify-items-center my-4 grid-cols-3 text-black w-full '>
                    <li className=' justify-self-start'>All Areas</li>
                    <li>500</li>
                    <li className=' justify-self-end'> <input type="radio" name="" id="" /></li>
                </ul>
            </div>
        </div>

        <div className=' container mx-auto px-5 md:px-0 flex justify-between my-10 md:my-20 font-syne text-[14px]  md:text-[20px] cursor-pointer'>
            <button onClick={handlePrevious} className=' font-bold text-black'>Previous</button>
            <button onClick={handleNext} className=' font-bold text-primary'>Next</button>
        </div>
    </div>
  )
}

export default Subscription