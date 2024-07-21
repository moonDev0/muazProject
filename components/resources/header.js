import React from 'react'

const Header = () => {
  return (
    <div className=' mt-20 h-[400px] bg-no-repeat bg-cover bg-resourcebg'>
        <div className=' w-full h-full px-5 md:px-0 bg-resourcebg2 bg-no-repeat bg-cover flex items-center justify-center'>
        
            <div >
                <h1 className=' text-white text-center font-extrabold text-[30px] md:text-[48px] font-sen'>Training</h1>
                <p className=' text-justify md:text-center font-syne font-medium text-[16px] md:text-[20px]'>Here are some short training videos to help you get started with Pupilbase. <br />
                You can either watch them all or just select the particular function that you are interested in using. <br />
                If you need additional help or have any questions, then please email keith@pupilbase.com and I will get back to you as soon as I can.</p>
            </div>
        </div>    
    </div>
  )
}

export default Header