import TermsComponent from '@/components/T&C/termsComponent'
import TermsHeader from '@/components/T&C/termsHeader'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import React from 'react'

const TC = () => {
  return (
    <div>
      <section>
        <Navbar/>
      </section>

      <main>
        <TermsHeader/>
        <TermsComponent/>
      </main>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default TC