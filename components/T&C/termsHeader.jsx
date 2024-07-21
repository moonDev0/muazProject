import React from 'react'
import TermsImage from '../../public/images/terms.png'
import Image from 'next/image'

const TermsHeader = () => {
  return (
    <div className=' bg-gray-200 px-5 md:px-0 md:mt-20 pb-10 mb-10 md:mb-32'>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 pt-24 md:gap-8'>
            <div className=' col-span-2'>
                <h1 className=' text-black font-extrabold text-center md:text-left text-[30px] lg:text-[48px] font-sen '>Pupilbase Service & User Agreement</h1>
                <p className=' font-syne text-[12px text-gray-600 text-center md:text-left mt-10 font-medium'>Last Updated  on 27th January 2022</p>
            </div>

            <div className=' w-full md:mb-[-100px]'>
                <Image src={TermsImage} alt='image' className=' mx-auto md:mx-0  mt-5'/>
            </div>
        </div>
    </div>
  )
}

export default TermsHeader



