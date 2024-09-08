import React from 'react'
import Layout from '../layout'
import UsersComponents from '@/components/users/users'
import useAuth from '@/hooks/useAuth'
import RejectedComponents from '@/components/rejected/rejected'

const Rejected = () => {
  return (
    <Layout>
        <RejectedComponents/>
    </Layout>
  )
}

export default Rejected