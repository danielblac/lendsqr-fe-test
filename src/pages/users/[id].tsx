import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { UserInterface } from '@/components/UserInterface'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Date from '@/components/Date'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Image from 'next/image'
import UserLink from '@/components/UserLink'

interface UsersProps {
  data: UserInterface,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  const data = await res.json()
  const users = data as UsersProps[]

  const paths = users.map((user: any) => {
    return {
      params: {
        id: user.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id
  const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  const data = await res.json()
  const users = data as UsersProps[]

  const userData = users.find((user: any) => id === user.id)
  return {
    props: {
      data: userData,
    }
  }
}

export default function UserDetails({data: { id, email, profile, userName, accountBalance, accountNumber, phoneNumber, education, socials, guarantor}}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Leadsqr | User</title>
      </Head>
      <div className='user-page'>
        <div className='back'>
          <p className='link-back' onClick={() => router.back()}><HiArrowNarrowLeft /></p>
          <p>Back to Users</p>
        </div>
        <div className='user-page-header'>
          <h2>User Details</h2>
          <div className='buttons'>
            <button>BLACKLIST USER</button>
            <button className='activate-button'>ACTIVATE USER</button>
          </div>
        </div>
        <div className='user-general-container'>
          <div className='user-general'>
            <div className='user-profile'>
              <Image 
                className='profile-photo'
                src={profile.avatar}
                alt='lendsqr-logo'
                width={100}
                height={100}
              />
              <div className='user-profile-name'>
                <p className='profile-name'>{profile.firstName} {profile.lastName}</p>
                <p className='account-number'>{accountNumber}</p>
              </div>
            </div>
            <div className='user-tier'>
              <p className='user-th'>User's Tier</p>
              <div className='rating'>
                <p className='filled-star'>⭐</p>
                <p>☆</p>
                <p>☆</p>
              </div>
            </div>
            <div className='account-details'>
              <p className='account-balance'>₦{accountBalance}</p>
              <p className='bank'>9912345678/Providous Bank</p>
            </div>
          </div>
          <div className='user-details-link'>
            <UserLink href={`/users/${id}`}>General Details</UserLink>
            <UserLink href='#'>Documents</UserLink>
            <UserLink href='#'>Bank Details</UserLink>
            <UserLink href='#'>Loans</UserLink>
            <UserLink href='#'>Savings</UserLink>
            <UserLink href='#'>App and System</UserLink>
          </div>
        </div>
        <div className='user-details'>
          <div className='user-information'>
            <p className='user-information-header'>Personal Information</p>
            <div className='information'>
              <div className='information-details'>
                <p className='information-header'>FULL NAME</p>
                <p>{profile.firstName} {profile.lastName}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>PHONE NUMBER</p>
                <p>{`080${phoneNumber.replace(/[^0-9]/g, '').substring(0, 9)}`}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>EMAIL ADDRESS</p>
                <p>{email}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>BVN</p>
                <p>{profile.bvn}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>GENDER</p>
                <p>{profile.gender}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>MARITAL STATUS</p>
                <p>Single</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>CHILDREN</p>
                <p>None</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>TYPE OF RESIDENCE</p>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>
          <div className='user-information'>
            <p className='user-information-header'>Education and Employment</p>
            <div className='information education'>
              <div className='information-details'>
                <p className='information-header'>LEVEL OF EDUCATION</p>
                <p>{education.level}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>EMPLOYMENT STATUS</p>
                <p>{education.employmentStatus}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>SECTOR OF EMPLOYMENT</p >
                <p>{education.sector}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>DURATION OF EMPLOYMENT</p>
                <p>{education.duration}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>OFFICE EMAIL</p>
                <p>{education.officeEmail}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>MONTHLY INCOME</p>
                <p>₦{education.monthlyIncome[0]} - ₦{education.monthlyIncome[1]}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>LOAN REPAYMENT</p>
                <p>₦{education.loanRepayment}</p>
              </div>
            </div>
          </div>
          <div className='user-information'>
            <p className='user-information-header'>Socials</p>
            <div className='information'>
              <div className='information-details'>
                <p className='information-header'>TWITTER</p>
                <p>{socials.twitter}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>FACEBOOK</p>
                <p>{socials.facebook}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>INSTAGRAM</p >
                <p>{socials.instagram}</p>
              </div>              
            </div>
          </div>
          <div className='user-information'>
            <p className='user-information-header'>Guarantor</p>
            <div className='information'>
              <div className='information-details'>
                <p className='information-header'>FULL NAME</p>
                <p>{guarantor.firstName} {guarantor.lastName}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>PHONE NUMBER</p>
                <p>{`080${guarantor.phoneNumber.replace(/[^0-9]/g, '').substring(0, 9)}`}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>EMAIL ADDRESS</p>
                <p>{`${guarantor.firstName}@gmail.com`}</p>
              </div>
              <div className='information-details'>
                <p className='information-header'>RELATIONSHIP</p>
                <p>Sister</p>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

UserDetails.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}
