import React from 'react'
import hero3 from '../../public/images/hero3.png'
import hero2 from '../../public/images/hero2.png'
import hero1 from '../../public/images/hero1.png'
import underline from '../../public/images/Underline.png'
import Pupilbase from '../../public/images/pupilBase.png'
import Image from 'next/image'
import Button from '../common/button'


const Hero = () => {
  return (
    <div className=' mt-24 px-5 md:px-0 md:mt-0'>
        <div className=' container hidden  mx-auto pt-10 mt-20 md:grid gap-8 grid-cols-1  md:grid-cols-3'>
            <div >
                <Image src={hero2} alt='hero-image' className=''/>
            </div>

            <div className=' mt-20  justify-self-center'>
              <Image src={hero3} alt='hero-image' className=''/>
            </div>

            <div className=' justify-self-end'>
               <Image src={hero1} alt='hero-image' className=''/>
            </div>
        </div>

        <div className=' container md:pl-20 lg:pl-10 w-full md:w-[720px] mx-auto text-center mt-[10px]'>
       
          <h1 className=' text-black text-center md:text-justify font-[800] text-[30px] md:text-[45px] lg:text-[64px] font-sen leading-[70px]'>Improve <span className=' text-primary'>Wellbeing </span> <br /> </h1>
            <Image src={underline} className=' mx-auto scale-[0.8]  md:scale-[0.5]  md:ml-[200px] lg:scale-[1]  lg:ml-72 mt-[-20px]' alt='unerline'/>
        <h1 className=' text-black text-center md:text-justify mt-[-40px] font-[800] font-sen text-[24px] md:text-[45px] lg:text-[64px] leading-[70px]'>Reduce Workload</h1>
        

        <div className=' flex flex-wrap md:flex-nowrap justify-center items-center'>
            <p className=' text-black md:text-left font-syne text-[16px] md:text-[18px] text-justify'>We are all required to do more, to meet more challenges with fewer resources, Adopting a more strategic and systematic approach to wellbeing is likely to make your staff feel more valued, positive and supported. And let's face it, A happy workforce is also a healthy one</p>
            
            <div className=' mt-10 md:mt-0'>
                <Button title="Get Started"/>
            </div>
        </div>

        </div>
          <div className=' my-20 container mx-auto'>
            <h1 className=' text-black text-center mb-2 md:mb-10 font-bold font-syne text-[18px] md:text-[20px]'>Trusted By More than 50 schools</h1>
            <div className='grid justify-items-center grid-cols-6'>
              <div className=' '>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>

               <div>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>

              <div>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>

              <div>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>  
          
              <div>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>
        
              <div className=''>
                <Image src={Pupilbase} alt='schools' className=''/>
              </div>
            </div>
          </div>

          
    </div>
  )
}

export default Hero