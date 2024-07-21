import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import LoginComponent from '@/components/login/login'
import React from 'react'

const Login = () => {
  return (
    <div className=' '>
        <div>
            <Navbar/>
        </div>

        <div>
            <LoginComponent/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Login