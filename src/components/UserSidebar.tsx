import Link from "next/link";
import { FaSearch, FaHouseUser, FaCaretDown, FaSignOutAlt, FaUser, FaCogs, FaConciergeBell, FaUserFriends, FaUsers, FaRegHandshake, FaPiggyBank, FaHandHoldingUsd, FaUserTimes, FaBriefcase, FaCreditCard, FaCoins, FaFileInvoiceDollar, FaServicestack, FaUserMinus, FaFileSignature, FaChartBar, FaSlidersH, FaTimesCircle, FaFileInvoice, FaAngleDown } from 'react-icons/fa'
import { BiMoneyWithdraw } from 'react-icons/bi'
import NavLink from "./NavLink";

export default function UserSidebar() {
  return (
    <aside className="side-bar">
      <div className="switch">
        <p><FaBriefcase /></p>
        <p className="text">Switch Organization</p>
        <p className="down-arrow"><FaAngleDown /></p>
      </div>
      <Link href=''><p className="dashboard"><FaHouseUser /> Dashboard</p></Link>
      <div className="products">
        <p className="product-header">CUSTOMERS</p>
        <NavLink href='/users'><p className=""><FaUserFriends /> Users</p></NavLink>
        <NavLink href='/guarantors'><p className=""><FaUsers /> Guarantors</p></NavLink>
        <NavLink href=''><p className=""><BiMoneyWithdraw /> Loans</p></NavLink>
        <NavLink href=''><p className=""><FaRegHandshake /> Decision Models</p></NavLink>
        <NavLink href=''><p className=""><FaPiggyBank /> Savings</p></NavLink>
        <NavLink href=''><p className=""><FaHandHoldingUsd /> Loan Requests</p></NavLink>
        <NavLink href=''><p className=""><FaUser/> Whitelist</p></NavLink>
        <NavLink href=''><p className=""><FaUserTimes /> Karma</p></NavLink>
      </div>
      <div className="products">
        <p className="product-header">BUSINESSES</p>
        <NavLink href=''><p className=""><FaBriefcase /> Organisation</p></NavLink>
        <NavLink href=''><p className=""><FaHandHoldingUsd /> Loan Products</p></NavLink>
        <NavLink href=''><p className=""><FaCreditCard /> Savings Products</p></NavLink>
        <NavLink href=''><p className=""><FaCoins /> Fees and Charges</p></NavLink>
        <NavLink href=''><p className=""><FaFileInvoiceDollar /> Transactions</p></NavLink>
        <NavLink href=''><p className=""><FaServicestack /> Services</p></NavLink>
        <NavLink href=''><p className=""><FaUserMinus /> Services Account</p></NavLink>
        <NavLink href=''><p className=""><FaFileSignature /> Settlements</p></NavLink>
        <NavLink href=''><p className=""><FaChartBar /> Reports</p></NavLink>
      </div>
      <div className="products">
        <p className="product-header">SETTINGS</p>
        <NavLink href=''><p className=""><FaSlidersH /> Preferences</p></NavLink>
        <NavLink href=''><p className=""><FaTimesCircle /> Fees and Pricing</p></NavLink>
        <NavLink href=''><p className=""><FaFileInvoice /> Audit Logs</p></NavLink>
      </div>
    </aside>
  )
}
