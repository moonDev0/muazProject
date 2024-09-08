import React from 'react'
import Layout from '../layout'
import useAuth from '@/hooks/useAuth'
import PendingComponents from '@/components/pending/pending'

const Users = () => {
  return (
    <Layout>
        <PendingComponents/>
    </Layout>
  )
}

export default Users