import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaSearch, FaRegBell, FaCaretDown, FaSignOutAlt, FaUser, FaCogs } from 'react-icons/fa'

export default function UserHeader() {
  // const [search, setSearch] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const query = formData.get('query')?.toString().trim()

    if (query) {
      console.log(query)
      // setSearch('query')
      // DO MORE STUFF
    }
  }

  return (
    <div className="header">
      <div className='logo'>
        <Image 
          src="/images/logo.png"
          alt='lendsqr-logo'
          width={24.7}
          height={25}
        />
        <h2>lendsqr</h2>
      </div> 
      <div className="form-container">
        <form className='search-form' onSubmit={handleSubmit}>
          <input 
            type='text'
            name="query" 
          />
          <button className='search-button' type="submit" ><FaSearch /></button>
        </form>
      </div>
      <div className="profile">
        <Link href='' className="docs">Docs</Link>
        <div className="bell"><FaRegBell /></div>
        <div className="profile-details">
          <Image 
            className='profile-photo'
            src="/images/profile-photo.png"
            alt='lendsqr-logo'
            width={48}
            height={48}
          />
          <div className="profile-show">
            <h4 className="profile-name" onClick={toggleMenu}>
              Adedeji <span><FaCaretDown /></span>
            </h4>  
            <div className={`${isOpen ? 'hide' : 'none'} hide`}>
              <Link href='#' className="clicks"><FaCogs />Settings</Link>
              <Link href='#' className="clicks"><FaUser />Profile Details</Link>
              <Link href='/' className="clicks"><FaSignOutAlt />LOGOUT</Link>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}
