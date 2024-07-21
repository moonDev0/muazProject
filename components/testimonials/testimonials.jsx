import React from 'react'
import person from '../../public/images/Rectangle 40.png'
import stars from '../../public/images/Frame 6.png'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className=' bg-TestimonialsBg bg-no-repeat px-5 md:px-0 pb-20 my-5 md:my-20 bg-cover'>
        <div className=' container mx-auto pb-[100px]'>
            <h1 className=' text-center text-black text-[26px] md:text-[40px] pt-14 md:pt-28 font-extrabold'>Testimonials</h1>
            <div className=' grid md:grid-cols-2 gap-6 pt-10'>
                <div>
                    <Image src={person} alt='person' className=''/>
                </div>
                <div className=' bg-gray-300 pb-8 mt-5 md:mt-0 text-black px-10 pt-20'>
                    <Image src={stars} alt='stars' className=''/>
                    <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum quod vitae ad exercitationem incidunt alias culpa corrupti, magni corporis?</p>
                    <button className=' font-medium mt-4'>Lorem ipsum dolor sit.</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials