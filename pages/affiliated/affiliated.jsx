import AffiliatedComponent from '@/components/affiliated/affiliatedComponent'
import AffiliatedHeader from '@/components/affiliated/affiliatedHeader'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import React from 'react'


const Affiliated = () => {
  return (
    <div>
        <section>
            <Navbar/>
        </section>

        <main>
          <AffiliatedHeader/>
          <AffiliatedComponent/>
        </main>

        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Affiliated