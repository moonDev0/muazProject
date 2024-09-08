import React from 'react'
import Layout from '../layout'
import useAuth from '@/hooks/useAuth'
import CertificatesComponents from '@/components/certificates/certificates'

const Users = () => {
  return (
    <Layout>
        <CertificatesComponents/>
    </Layout>
  )
}

export default Users