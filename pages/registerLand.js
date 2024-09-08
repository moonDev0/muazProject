import React from 'react'
import Layout from './layout'
import useAuth from '@/hooks/useAuth'
import RegisterLandComponent from '@/components/registerLandComponent'

const RegisterLand = () => {
  return (
    <Layout>
        <div>
            <RegisterLandComponent/>
        </div>
    </Layout>
  )
}

export default RegisterLand