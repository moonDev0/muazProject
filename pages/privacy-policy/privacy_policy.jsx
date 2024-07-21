import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import Privacy from '@/components/privacy/privacy'
import PrivacyHeader from '@/components/privacy/privacyHeader'
import React from 'react'

const Privacy_policy = () => {
  return (
    <div>
        <section>
            <Navbar/>
        </section>

        <section>
            <PrivacyHeader/>
        </section>

        <section>
            <Privacy/>
        </section>

        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Privacy_policy