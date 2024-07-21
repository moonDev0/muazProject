import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/hero/hero'
import Funtions from '@/components/KeyFuntions/funtions'
import Subscribe from '@/components/subscribe/subscribe'
import Testimonials from '@/components/testimonials/testimonials'
import Newsletter from '@/components/newsletter/newsletter'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' bg-gray-50'>
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Hero/>
      </div>

      {/*
      <div>
        <Funtions/>
      </div>
    */}

      <div>
        <Subscribe/>
      </div>


      <div>
        <Footer/>
      </div>

    </div>
  )
}
