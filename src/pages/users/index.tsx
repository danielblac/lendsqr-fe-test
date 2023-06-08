import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'

const Users: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Users