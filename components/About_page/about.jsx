import React from 'react'
import bluebg from '../../public/images/Rectangle 27Alt.png'
import macintosh from '../../public/images/iMac 27-inch Mockup.png'
import underline from '../../public/images/Underline.png'
import creatorBg from '../../public/images/Rectangle-creator.png'
import creator from '../../public/images/creator.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className=' mb-[200px] mt-10 md:mt-[230px]'>
        <div className='  relative'>
            <div className=' grid grid-cols-1 md:grid-cols-2'>
                <div className=' '>
                    <Image src={bluebg} alt='img' className=''/>
                </div>
                <div></div>
            </div>

            <div className=' top-0 px-5 md:px-0 absolute right-0 left-0 justify-items-center gap-8 lg:gap-0 md:justify-items-start container mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <Image src={macintosh} alt='image' className=' mt-20'/>
                </div>
                <div className=' text-black mt-[100px] md:mt-[-80px] '>
                    <h1 className=' text-black font-extrabold text-center md:text-left text-[32px] md:text-[40px] font-sen'>About the App</h1>
                    <Image src={underline} alt='underlined image' className=' ml-14 mt-[-15px] scale-[0.8]'/>
                    <h1 className=' font-bold text-[17px] md:text-[20px] lg:text-[24px] text-center md:text-left mb-4 font-syne'>Pupilbase is a simple software package to manage and monitor wellbeing</h1>
                    <p className=' text-[16px] text-justify md:text-left md:text-[20px] font-syne mb-10'>Pupilbase is a collaborative effort, developed in close partnership with teachers and educational leaders, with a primary goal of making a positive impact on the education sector. This innovative platform is meticulously designed to streamline various aspects of school management, ultimately saving valuable resources like time, money, and reducing stress for those involved in the educational ecosystem. By leveraging the insights and expertise of teachers and leaders, Pupilbase aims to provide practical solutions that benefit educators and institutions</p>
                    <p className=' text-[16px] md:text-[20px] text-justify md:text-left font-syne'>With Pupilbase, you gain a comprehensive understanding of how effectively your school is addressing the needs of students, staff, and parents across a wide spectrum of well-being domains. This dynamic platform offers insights and tools that cover an array of essential areas, with new topics continually being incorporated. Whether it's behavior management, preparing for OFSTED assessments, promoting well-being, enhancing staff training, fostering stakeholder engagement, or ensuring efficient school communication, Pupilbase has you covered. It also addresses critical facets of well-being, such as resilience, stress, and mental health, along with homework and remote learning support, the promotion of healthy living, and the nuances of daily school life. Pupilbase facilitates the assessment of happiness, confidence, alignment with school vision and values, lunchtimes, breaks, extended school provision, future aspirations, and the role of subject leaders. With Pupilbase, you can gain valuable insights into these domains to enhance your school's overall well-being efforts and make informed decisions for the betterment of your educational community.</p>
                </div>
            </div>
        </div>


        <div className="container px-5 md:px-0  mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mt-[1300px] sm:mt-[1500px] md:mt-[1200px] lg:mt-[680px] 2xl:mt-[500px]">
            <div>
                <h1 className=' text-black text-[20px] text-center md:text-[36px] lg:text-[48px]  leading-[60px] font-extrabold'>Get to  Know The <br className=' hidden md:block'/> <span className=' text-primary'>Creator</span> <Image src={underline} alt='underlined' className=' hidden md:block scale-[0.7] ml-20 lg:ml-44 mt-[-80px]'/> </h1>
                <p className=' md:text-[20px] 2xl:text-[20px] text-black mt-10 font-syne'>Hello! My name is Keith Atkins, and I understand first-hand the challenges involved in making a real difference to well-being in school. <br />
                I qualified as a primary school teacher back in 2001 and have since been headteacher of three schools, Programme Manager of an Outstanding teacher training provider, Primary National Strategy Consultant, LA Maths advisor and a Leading Teacher. <br />
                But the important thing for you to know is that Pupilbase is being built in partnership with real teachers and leaders facing today's challenges. <br />
                Please hit the contact button below if you are ready to get started or would like me to give you a call to discuss Pupilbase, and find out more about what we can do for your school.</p>
            </div>

            <div className=' relative'>
                <Image src={creatorBg}/>

                <Image src={ creator} alt='creator image' className=' mx-auto absolute top-0 left-0 right-0 mt-10'/>
            </div>
        </div>

    </div>
  )
}

export default About