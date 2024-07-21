import Image from 'next/image'
import React from 'react'
import policy1 from '../../public/images/policy1.svg'
import policy2 from '../../public/images/policy2.svg'



const PrivacyHeader = () => {
  return (
    <div className=' bg-[#eee] px-5 py-10 md:py-0 md:px-0 md:h-[400px] flex justify-center items-center mt-24'>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto">
            <div>
                <h1 className=' text-black text-[28px] text-center md:text-left md:text-[40px] lg:text-[48px] font-extrabold font-sen'>PRIVACY <br className=' hidden md:block'/> POLICY</h1>
            </div>

            <div className=' relative justify-self-center'>
                <Image src={policy1} alt='image' className=' w-[300px] lg:w-[350px]'/>
                <Image src={policy2} alt='image' className=' hidden md:block left-0 ml-[-180px] mt-[130px] w-[300px] lg:w-[400px] absolute top-0'/>
            </div>
        </div>

    </div>
  )
}

export default PrivacyHeader