import React from 'react'

const ContactForm = () => {
  return (
    <div className=' px-5 md:px-0'>
        <div className=' container mx-auto w-full md:w-[800px]  mt-10 flex justify-center'>
        <div className=' bg-primary px-10 w-full font-sen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 justify-around py-10'>
            <div className=' w-full'>
                <h2 className=' mb-2 text-[14px] opacity-60 font-bold'>Working hours</h2>
                    <hr className=' opacity-20'/>
                
                <h1 className=' text-[16px] md:text-[20px] font-bold mt-[20px]'>Monday To Friday</h1>
                <h1 className=' text-[16px] md:text-[20px] font-bold my-[10px]'>9:00 AM to 8:00 PM </h1>
                <p className=' text-[16px] opacity-60'>Our Support Team is available 24/7</p>
            </div>
            <div className=' w-full'>
                <h2 className=' mb-2 opacity-60 font-bold'>Contact Us</h2>
                <hr className=' opacity-20'/>
                <h1 className=' mt-[20px] text-white font-bold text-[16px] md:text-[20px] font-sen mb-[10px]'>020 7993 2905</h1>
                <p className=' opacity-50'>hello@finsweet.com</p>
            </div>
        </div>
        </div>

        <div className=' container mt-10 mb-10 md:mb-24 mx-auto w-full md:w-[800px]'>
            <form action="" className=' w-full'>
                <div className=' w-full text-black font-bold'>
                    <input type="text" className=' w-full py-4 px-5 outline-none  border border-gray-400 '  placeholder='Full Name' name="" id="" />
                </div>

                <div className=' w-full text-black font-bold'>
                    <input type="text" className=' w-full py-4 px-5 outline-none border mt-3 border-gray-400'  placeholder='Your Email' name="" id="" />
                </div>
                
                <div className=' w-full text-black font-bold'>
                    <input type="text" className=' w-full py-4 px-5 outline-none border mt-3 border-gray-400'  placeholder='Query Related' name="" id="" />
                </div>

                <div className=' w-full text-black font-bold'>
                    <textarea name="" className=' w-full py-4 px-5 outline-none border mt-3 border-gray-400' placeholder='Message' id="" cols="3" rows="4"></textarea>
                </div>

                <button className=' bg-orange-400 text-black font-bold w-full py-4 mt-4'>Send Message</button>

            </form>
        </div>
        
    </div>
  )
}

export default ContactForm