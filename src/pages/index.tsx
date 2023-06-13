import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaEye, FaEyeSlash} from 'react-icons/fa'

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Leadsqr | Login</title>
      </Head>

      <div className='login-page'>
        <div className='lendsqr'>
          <div className='lendsqr-logo'>
            <Image 
              src="/images/logo.png"
              alt='lendsqr-logo'
              width={24.7}
              height={25}
            />
            <h1>lendsqr</h1>
          </div> 
        </div>
        <div className='login'>
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <div className='login-form'>
              <div className='input'>
                <input 
                  type="email"
                  placeholder='Email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required         
                />              
              </div>
              <div className='input'>
                <input 
                  type={visible ? 'text' : 'password'}
                  placeholder='Password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}   
                  required       
                />
                <div onClick={() => setVisible(!visible)} className='eye' >
                  {visible 
                    ? <FaEye />
                    : <FaEyeSlash />  
                  }
                </div>
              </div>
              <p className='forget-password'>FORGOT PASSWORD</p>
              <Link href='/users'>
                <button>LOG IN</button>
              </Link>
            </div>
          </div>
        </div>
        <Image 
          src="/images/login-photo.png"
          alt='cover-photo'
          width={531}
          height={298}
          className='cover-photo'
        />
      </div>
    </>
  )
}