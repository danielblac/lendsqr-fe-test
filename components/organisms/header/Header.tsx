"use client";
import { setMobileSidebar } from "@/app/redux/features/sidebarMobileSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  FaCaretDown,
  FaCogs,
  FaRegBell,
  FaSearch,
  FaSignOutAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { HiBellAlert } from "react-icons/hi2";

export default function Header() {
  // DECLARATIONS
  const sidebar: boolean = useAppSelector(
    (state) => state.mobileSidebar.sidebar
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleBell = () => setIsAlert(!isAlert);

  // FUNCTIONS
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      console.log(query);
      // setSearch('query')
      // DO MORE STUFF
    }
  }

  return (
    <div className="header">
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="lendsqr-logo"
          width={24.7}
          height={25}
        />
        <h2>lendsqr</h2>
      </div>
      <div className="form-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" name="query" />
          <button className="search-button" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="profile">
        <Link href="" className="docs">
          Docs
        </Link>
        <div className="bell" onClick={toggleBell}>
          {isAlert ? <HiBellAlert /> : <FaRegBell />}
        </div>
        <div className="profile-details">
          <Image
            className="profile-photo"
            src="/images/profile-photo.png"
            alt="lendsqr-logo"
            width={48}
            height={48}
          />
          <div className="profile-show">
            <h4 className="profile-name" onClick={toggleMenu}>
              Adedeji{" "}
              <span>
                <FaCaretDown />
              </span>
            </h4>
            <div className={`${isOpen ? "hide" : "none"} hide`}>
              <div className="clicks">
                <FaCogs />
                <p>Settings</p>
              </div>
              <div className="clicks">
                <FaUser />
                <p>Profile Details</p>
              </div>
              <div
                onClick={() => {
                  router.push(`/`);
                }}
                className="clicks"
              >
                <FaSignOutAlt />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mobile-menu"
        onClick={() => {
          dispatch(setMobileSidebar());
        }}
      >
        {sidebar ? <FaTimes size={30} /> : <FaBars size={25} />}
      </div>
    </div>
  );
}
