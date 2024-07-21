import About from '@/components/About_page/about'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div>
            <About/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default AboutUs