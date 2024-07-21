import React from 'react'

const Progress = ({bg, bg1, bg2, strip, strip1, strip2}) => {
  return (
    <div>
        <div className="container mx-auto">
            <div className=' grid text-[14px] md:text-[16px] lg:text-[18px] md:grid-cols-3 gap-4'>
                <div>
                    <h1 className=' text-black font-bold font-syne'>sign up</h1>
                    <div className=' flex items-center'>
                        <div className={` ${strip} py-[2px]  mr-4 h-[3px] w-full`}></div>
                        <div className={` ${bg} p-[10px] rounded-full border-2 border-primary`}></div>
                    </div>
                </div>

                 <div>
                    <h1 className=' text-black font-bold font-syne'>Subscription</h1>
                    <div className=' flex items-center'>
                        <div className={` ${strip1} py-[2px] mr-4 h-[3px] w-full`}></div>
                        <div className={` ${bg1} p-[10px]  rounded-full border-2 border-primary`}></div>
                    </div>
                </div>

                 <div>
                    <h1 className=' text-black font-bold font-syne'>Payment</h1>
                    <div className=' flex items-center'>
                        <div className={` ${strip2} mr-4 h-[3px] w-full`}></div>
                        <div className={` ${bg2} p-[10px] rounded-full border-2 border-primary`}></div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Progress