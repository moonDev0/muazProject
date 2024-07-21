import React from 'react'
import sendIcon from '../../public/images/send.png'
import Image from 'next/image'


const Newsletter = () => {
  return (
    <div className=''>
        <div className=' container mx-auto flex justify-end'>
            <Image src={sendIcon} alt='icon' className=' mr-24 mb-[-40px] scale-[0.7]'/>
        </div>
        <div className="container bg-Newsletter1 bg-no-repeat mb-20  bg-cover  mx-auto">
            <div className=' px-5 md:px-0 flex items-center py-10 justify-center bg-Newsletter2 h-full w-full '>
                <div className='w-[400px] xl:w-[500px] mx-auto'>
                <h1 className=' text-center font-medium text-white text-[16px] my-5'>Subscribe to our News Letter</h1>
                <form action="">
                    <div>
                        <input type="text" className=' px-5 py-2 text-black w-full rounded-md' placeholder='Email' name="" id="" />
                    </div>
                    <button className=' mt-5 bg-orange-600 w-full py-2 text-[16px] font-medium text-white rounded-md'>Subscribe</button>

                </form>

                 <p className=' text-center mx-auto text-[16px]  lg:text-[18px] pt-5'>By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties</p>
                
                </div>                        
            </div>
        </div>
    </div>
  )
}

export default Newsletter