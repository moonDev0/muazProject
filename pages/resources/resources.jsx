import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import Header from '@/components/resources/header'
import Resource from '@/components/resources/resources'
import React from 'react'

const Resources = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div>
            <Header/>
            <Resource/>
        </div>
        

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Resources