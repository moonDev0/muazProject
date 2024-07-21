import React from 'react'
import headImage from '../../public/images/Rectangle 89.png'
import Image from 'next/image'

const AffiliatedHeader = () => {
  return (
    <div className=' bg-gray-200 mt-10 md:mt-20 pb-10 mb-32 px-5 md:px-0'>
        <div className=' container mx-auto grid justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-3 pt-24 md:gap-8'>
            <div className=' col-span-2'>
                <h1 className=' text-black font-extrabold text-[30px] md:text-[38px] lg:text-[48px] font-sen '>Fancy A Night Out On Us?</h1>
                <p className=' font-syne text-[18px] md:text-[22px] lg:text-[28px] text-black font-medium'>When you refer Pupilbase to another <br /> educational institution</p>
                <p className=' font-syne text-[18px] md:text-[22px] lg:text-[28px] text-black font-medium'>you a £50 token of appreciation</p>
            </div>

            <div className=' mb-[-100px]'>
                <Image src={headImage} alt='image' className=' mt-5'/>
            </div>
        </div>
    </div>
  )
}

export default AffiliatedHeader