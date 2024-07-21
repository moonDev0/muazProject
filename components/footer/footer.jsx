import React from 'react'
import underline from '../../public/images/Group.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <div className=' container mx-auto text-black'>
            <Image src={underline} alt='underline' className=' mx-auto w-[200px] md:w-[600px]'/>
            <p className=' font-medium text-black md:mt-[-40px] mb-5 text-center'>Copyright 2023.  pupilbase</p>
            <div className='  flex justify-center font-bold mb-20 gap-10'>
                <Link href="/privacy-policy/privacy_policy">
                  Privacy
                </Link>
                
                <Link href="/terms/TC">
                  Terms
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer