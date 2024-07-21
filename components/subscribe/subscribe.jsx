import React from 'react'
import Button from '../common/button'

const Subscribe = () => {
  return (
    <div>
        <div className=' bg-func-BG bg-no-repeat lg:bg-repeat px-5 md:px-20  container mt-20 mx-auto'>
            <h1 className=' font-sen text-[20px] md:text-[40px] lg:text-[48px] font-extrabold py-10 text-center text-black'>Subscribe to <span className=' text-primary'>pupil base</span> today </h1>
            <p className=' text-black mb-20 text-[16px] text-justify md:text-left'>Subscribing to the Pupilbase Management System is your gateway to streamlined and effective school management, and it comes at an annual cost of £750. With this subscription, you unlock a world of possibilities for enhancing the well-being and efficiency of your educational institution. <br />
            By choosing to subscribe, you gain access to a comprehensive suite of tools and features designed to simplify tasks, promote well-being, and boost overall school performance. Our user-friendly platform empowers you to conduct audits, run surveys, and generate detailed reports, helping you make informed decisions and track your progress over time. Furthermore, our system is continuously evolving to meet your ever-changing needs, ensuring that you stay at the forefront of educational management. So, invest in your school's future, subscribe to Pupilbase, and discover how our platform can save you time, money, and stress, all while fostering a better educational environment for your students, staff, and parents.</p>
            <div className=' flex justify-center md:justify-end'>
                <Button title="Subscribe"/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe