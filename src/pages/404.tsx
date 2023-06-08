import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <div className='text-center flex items-center flex-col my-16 h-full'>
      <h1 className='font-bold text-2xl pb-3'>Ooooooops....</h1>
      <h2 className='pb-3 text-xl'>That page cannot be found</h2>
      <p>
        Go back to <Link className='text-btn underline' href='/users'>Users</Link>
      </p>
    </div>
  )
}
