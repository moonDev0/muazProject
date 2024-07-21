import Image from 'next/image'
import React from 'react'
import heroImg from '../../public/images/Sign upamico.png'

const SignupHeader = ({ img, content }) => {
  return (
    <div>
        <div className="container mx-auto mb-10 justify-items-stretch grid mt-32 grid-cols-1 md:gap-6 md:grid-cols-2">
            <div className=' mb-5 md:mb-0 justify-self-center md:justify-self-auto'>
                <img src={img} alt='image' className=''/>
            </div>

            <div className=' px-5 text-justify md:px-0 flex items-center text-[16px] xl:text-[20px] font-syne leading-9 text-black'>
                <p>
                 {
                  content
                 }
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignupHeader