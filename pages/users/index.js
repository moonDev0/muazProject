import React from 'react'
import Layout from '../layout'
import UsersComponents from '@/components/users/users'
import useAuth from '@/hooks/useAuth'

const Users = () => {
  return (
    <Layout>
        <UsersComponents/>
    </Layout>
  )
}

export default Users