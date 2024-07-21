import Navbar from '@/components/common/navbar'
import ContactForm from '@/components/contact/contactForm'
import ContactHeader from '@/components/contact/contactHeader'
import Footer from '@/components/footer/footer'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <section>
            <Navbar/>
        </section>

        <section>
            <ContactHeader/>
        </section>

        <section>
            <ContactForm/>
        </section>

        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Contact