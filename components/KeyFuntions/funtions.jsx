import React from 'react'
import audit from '../../public/images/Audit.png'
import Survey from '../../public/images/Customer Survey-rafiki.png'
import report from '../../public/images/Online report-pana.png'
import Workload from '../../public/images/Version control-cuate 1.png'
import WorkloadAlt from '../../public/images/Rectangle 31.png'
import reportBg from '../../public/images/Rectangle 30.png'
import BlueBG from '../../public/images/Rectangle 27.png'
import AuditPage from '../../public/images/Frame 168.png'
import task from '../../public/images/Task.png'
import stakeholdersBg from '../../public/images/Rectangle 32.png'
import survey from '../../public/images/Frame 167.png'
import allreports from '../../public/images/all  report.png'
import Image from 'next/image'

const Funtions = () => {
  return (
    <div className=' px-5 md:px-0'>
        <div className='container mb-10 mx-auto'>
            <h1 className=' text-black text-center font-extrabold text-[28px] md:text-[48px] font-sen'>Key Functions</h1>
            <p className=' text-[16px] md:text-[18px]  mx-auto max-w-[900px] text-center text-black'>Our Four Key Functions allow you to gain a clear understanding of your school's strengths and areas of development in each area of wellbeing. Here is exactly how each function will help you...</p>
        </div>

        <div className=' bg-func-BG bg-contain bg-no-repeat lg:bg-repeat font-syne pb-20 leading-[30px] gap-10 md:gap-6 py-10 justify-items-center  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className=' justify-self-center'>
                <Image src={audit} alt='audit img' className='h-[150px] w-[200px]'/>
                <p className=' text-center font-bold text-[18px] md:text-[28px] lg:text-[24px] text-black'>Audit</p>
            </div>

            <div className=' justify-self-center'>
                <Image src={report} alt='audit img' className='h-[150px] mx-auto w-[150px]'/>
                <p className=' text-center font-bold text-[18px] md:text-[28px] lg:text-[24px] text-black'>Survey <br className=' hidden md:block'/> Stakeholders</p>
            </div>

            <div className=' justify-self-center'>
                <Image src={Survey} alt='audit img' className=' h-[150px] mx-auto w-[150px]'/>
                <p className=' text-center font-bold text-[16px] md:text-[28px] lg:text-[24px] text-black'>Generate <br className=' hidden md:block' /> Reports</p>
            </div>

            <div className=' justify-self-center'>
                <Image src={Workload} alt='audit img' className='h-[150px] mx-auto w-[150px]'/>
                <p className=' text-center font-bold text-[16px] md:text-[28px] lg:text-[24px] text-black'>Manage <br className=' hidden md:block' /> Workload</p>
            </div>
        </div>

        <div className=''>
            <div className='container mt-10 mb-10 mx-auto'>
                <h1 className=' text-black text-center font-extrabold text-[28px] md:text-[48px] font-sen'>How it Functions</h1>
                <p className='  text-[16px] md:text-[18px] mx-auto max-w-[900px] text-center text-black'>Our Four Key Functions allow you to gain a clear understanding of your school's strengths and areas of development in each area of wellbeing. Here is exactly how each function will help you</p>
            </div>

            <div className=' mt-20 lg:relative'>

                <div className='hidden  lg:grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Image src={BlueBG} alt='blue bg' className=''/>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='container lg:absolute top-0 left-0 right-0 mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-48'>
                    <div className=' p-8 lg:p-0 bg-primary bg-none rounded-lg lg:rounded-none'>
                        <Image src={AuditPage} alt='audit' className=' w-full h-full'/>
                    </div>
                    <div className=' lg:mt-[-70px] '>
                        <h1 className=' text-black font-bold text-center lg:text-left text-[26px] mb-2 md:mb-0 md:text-[40px]'>Audits</h1>
                        <ul className=' pl-5 md:pl-0 list-disc font-syne text-[16px] md:text-[18px] text-justify lg:text-[18px] md:leading-8 text-black'>
                            <li>
                                Pupilbase lets you check different well-being areas (like workload, mental health, behavior, safety, and more) with audits.
                            </li>

                            <li>
                            Audits are easy to access on the Wellbeing Dashboard, giving you a complete look at how well your school is doing in each area.
                            </li>

                            <li>
                            Pupilbase offers pre-made audits, but you can modify them to fit your needs by changing questions or adding new ones.
                            </li>

                            <li>
                            You can use Pupilbase to regularly review how well your school manages well-being and track progress.
                            </li>

                            <li>
                            Subject leaders get specific audits to help them develop their roles and prepare for Ofsted inspections.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className=' mt-20 lg:relative'>
                <div className=' hidden lg:grid grid-cols-1 lg:grid-cols-2'>
                <div></div>
                <div className=' justify-self-end'>
                    <Image src={stakeholdersBg} alt='img' className=''/>
                </div>
                
                </div>

                <div className='  container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:absolute top-0 right-0 left-0 mt-20 gap-20 2xl:gap-48'>
                    <div className=' order-2 lg:mt-[-70px]'>
                        <h1 className=' text-black font-bold text-[26px] mb-2 md:mb-0 text-center lg:text-left md:text-[40px]'>Survey Stakeholders</h1>
                        <ul className=' pl-5 md:pl-0 list-disc font-syne text-[16px] md:text-[18px] leading-8 text-justify text-black'>
                            <li>
                            Use our survey tool to quickly collect feedback from students, parents, and staff on various well-being aspects and track their perspectives over time.
                            </li>

                            <li>
                            You have the option to choose from a variety of our pre-made surveys, which continue to expand. Customize them by editing questions or creating your surveys from scratch.
                            </li>

                            <li>
                            Our student surveys are thoughtfully designed with age-appropriate questions and easy-to-use slider scales, tailored to each Key Stage.
                            </li>

                            <li>
                            This user-friendly survey system helps you create a clear understanding of stakeholder opinions and validates your audit results, allowing you to assess the effectiveness of your initiatives.
                            </li>
                        </ul>
                    </div>

                    <div className=' lg:order-2 p-8 lg:p-0 bg-primary bg-none rounded-lg lg:rounded-none'>
                        <Image src={survey} alt='audit' className=' w-full h-full'/>
                    </div>
                </div>
            </div>


            <div className=' mt-20 lg:relative'>

                <div className=' hidden  lg:grid grid-cols-1 lg:grid-cols-2'>
                    <div className=' '>
                        <Image src={reportBg} alt='blue bg' className=''/>
                    </div>
                    <div>
                    </div>
                </div>
                <div className=' container lg:absolute top-0 left-0 right-0 mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-48'>
                    <div className=' p-8 lg:p-0 bg-primary bg-none rounded-lg lg:rounded-none'>
                        <Image src={allreports} alt='audit' className=' w-full h-full'/>
                    </div>
                    <div className=' lg:mt-[-70px]'>
                        <h1 className=' text-black font-bold text-[26px] text-center lg:text-left mb-2 md:mb-0 md:text-[40px]'>Generate Reports</h1>
                        <ul className=' pl-5 md:pl-0 list-disc leading-8 text-justify font-syne text-[16px] md:text-[18px] text-black'>
                            <li>
                                Pupilbase lets you check different well-being areas (like workload, mental health, behavior, safety, and more) with audits.
                            </li>

                            <li>
                            Audits are easy to access on the Wellbeing Dashboard, giving you a complete look at how well your school is doing in each area.
                            </li>

                            <li>
                            Pupilbase offers pre-made audits, but you can modify them to fit your needs by changing questions or adding new ones.
                            </li>

                            <li>
                            You can use Pupilbase to regularly review how well your school manages well-being and track progress.
                            </li>

                            <li>
                            Subject leaders get specific audits to help them develop their roles and prepare for Ofsted inspections.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className=' mt-20 lg:relative'>
                <div className=' hidden lg:grid grid-cols-1 lg:grid-cols-2'>
                <div></div>
                <div className=' justify-self-end'>
                    <Image src={WorkloadAlt} alt='img' className=''/>
                </div>
                
                </div>

                <div className=' container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:absolute top-0 right-0 left-0 mt-20 gap-20 2xl:gap-48'>
                    <div className=' order-2 lg:mt-[-70px]'>
                        <h1 className='  text-black font-bold text-center lg:text-left text-[26px] mb-2 md:mb-0 mt-10 md:mt-0 md:text-[40px]'>Manage Workload</h1>
                        <ul className=' pl-5 md:pl-0 list-disc font-syne text-[16px] text-justify leading-8 md:text-[18px] text-black'>
                            <li>
                            The Pupilbase Workload Tool is a powerful way for all staff to manage their workload. When staff login to Pupilbase each morning they see their daily and weekly task lists with clear priorities, actions and deadlines.
                            </li>

                            <li>
                            Leaders can create and assign specific actions for individual members of staff and groups. They can set grades for the importance and urgency of each task to help staff to prioritise actions that will have a long-term impact and make a real difference to your school.
                            </li>

                            <li>
                            This is a simple to use daily task list which even sends out automated email reminders to staff and updates them if you make any changes.
                            </li>

                            <li>
                            Finally, you have a powerful and effective way to track and prioritise key actions, ensure accountability and manage whole-staff workload.
                            </li>
                        </ul>
                    </div>

                    <div className=' lg:order-2 p-8 lg:p-0 bg-primary bg-none rounded-lg lg:rounded-none'>
                        <Image src={task} alt='audit' className=' w-full h-full'/>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Funtions