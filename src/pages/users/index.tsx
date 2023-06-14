import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { HiOutlineUsers, HiOutlineUserGroup } from 'react-icons/hi2'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { BsFilter } from 'react-icons/bs'
import { MdOutlineRequestQuote } from 'react-icons/md'
import { FaCoins, FaAngleDown, FaAngleLeft, FaAngleRight, FaRegEye, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { UserInterface } from '@/components/UserInterface'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Date from '@/components/Date'
import ScrollLink from '@/components/ScrollLink'

interface UsersProps {
  data: UserInterface,
}

export const getStaticProps: GetStaticProps<{data: UsersProps[]}> = async () => {
  const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  const data = await res.json()
  const users = data as UsersProps[]
  return {
    props: {
      data: users,
    }
  }
}

export default function Users({data}: InferGetStaticPropsType<typeof getStaticProps>) {

  function getStatus(lastDate: string) {
    const convertDate = lastDate.slice(0, 4)
    if (+convertDate > 2050) {
      return (
        <div className='active'>active</div>
      )
    } else if (+convertDate > 2030) {
      return (
        <div className='inactive'>inactive</div>
      )
    } else if (+convertDate > 2010) {
      return (
        <div className='pending'>pending</div>
      )
    } else {
      return (
        <div className='blacklisted'>blacklisted</div>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Leadsqr | Users</title>
      </Head>
      <div className='users-page'>
        <h2>Users</h2>
        <div className='users-general-container'>
          <div className='users-general'>
            <div className='users-general-icon first'><HiOutlineUsers /></div>
            <p className='users-p'>USERS</p>
            <p className='users-number'>2,453</p>
          </div>
          <div className='users-general'>
            <div className='users-general-icon second'><HiOutlineUserGroup /></div>
            <p className='users-p'>ACTIVE USERS</p>
            <p className='users-number'>2,453</p>
          </div>
          <div className='users-general'>
            <div className='users-general-icon third'><MdOutlineRequestQuote /></div>
            <p className='users-p'>USERS WITH LOANS</p>
            <p className='users-number'>12,453</p>
          </div>
          <div className='users-general'>
            <div className='users-general-icon fourth'><FaCoins /></div>
            <p className='users-p'>USERS WITH SAVINGS</p>
            <p className='users-number'>102,453</p>
          </div>
        </div>
        <div className='users-details-container'>
          <div>
            <div className='users-details-head'>
              <div className='users-details-header organization'>
                <p>ORGANIZATION</p>
                <p className='filter'><Link href='/users/filters'><BsFilter /></Link></p>
              </div>
              <div className='users-details-header username'>
                <p className=''>USERNAME</p>
                <Link href='/users/filters' className='filter'><BsFilter /></Link>
              </div>
              <div className='users-details-header email'>
                <p className=''>EMAIL</p>
                <p className='filter'><Link href='/users/filters'><BsFilter /></Link></p>
              </div>
              <div className='users-details-header phone-number'>
                <p className=''>PHONE NUMBER</p>
                <p className='filter'><Link href='/users/filters'><BsFilter /></Link></p>
              </div >
              <div className='users-details-header date-joined'>
                <p className=''>DATE JOINED</p>
                <p className='filter'><Link href='/users/filters'><BsFilter /></Link></p>
              </div>
              <div className='users-details-header status'>
                <p className=''>STATUS</p>
                <p className='filter'><Link href='/users/filters'><BsFilter /></Link></p>
              </div>          
            </div>
            <div className='user-details-head'>
              {data.slice(0, 15).map(({id, userName, email, phoneNumber, createdAt, lastActiveDate}: any) => (
                <div key={id} className='user-details'>
                  <Link href={`/users/${id}`} className='user-details-link'>
                    <div className='organization-details'>Lendsqr</div>
                    <div className='username-details'>{userName.substring(0, 15)}</div>
                    <div className='email-details'>{email}</div>
                    <div className='phone-number-details'>{`080${phoneNumber.replace(/[^0-9]/g, '').substring(0, 9)}`}</div>
                    <div className='date-joined-details'><Date dateString={createdAt} /></div>
                  </Link>
                  <div className='status-details'>
                    {getStatus(lastActiveDate)}
                    <div className='hide-options'>
                      <Link href='#' className="status-clicks">
                        <p><FaRegEye /></p>
                        <p>View Details</p>
                      </Link>
                      <Link href='#' className="status-clicks"><FaUserMinus />Blacklist User</Link>
                      <Link href='#' className="status-clicks"><FaUserPlus />Activate User</Link>
                    </div>
                  </div>
                  <div className='user-details-menu'><HiOutlineDotsVertical /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='page-scroll'>
          <div className='page-scroll-show'>
            <p>showing</p>
            <div className='page-scroll-num'>
              <p>15</p>
              <p><FaAngleDown /></p>
            </div>
            <p>out of 100</p>
          </div>
          <div className='page-scroll-page'>
            <ScrollLink href=''>
              <p className='angles'><FaAngleLeft /></p>
            </ScrollLink>
            <ScrollLink href='/users'>
              <p className='page-numbers'>1</p>
            </ScrollLink>
            <ScrollLink href='/users/two'>
              <p className='page-numbers'>2</p>
            </ScrollLink>
            <ScrollLink href='/users/three'>
              <p className='page-numbers'>3</p>
            </ScrollLink>
            <p>...</p>
            <ScrollLink href='/users/six'>
              <p className='page-numbers'>6</p>
            </ScrollLink>
            <ScrollLink href='/users/seven'>
              <p className='page-numbers'>7</p>
            </ScrollLink>
            <ScrollLink href='/users/two'>
              <p className='angles'><FaAngleRight /></p>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
          {page}
        </Layout>
    )
}