import React from 'react'
import Layout from '../layout'
import useAuth from '@/hooks/useAuth'
import ApprovedComponents from '@/components/approved/approved'

const Users = () => {
  return (
    <Layout>
        <ApprovedComponents/>
    </Layout>
  )
}

export default Users