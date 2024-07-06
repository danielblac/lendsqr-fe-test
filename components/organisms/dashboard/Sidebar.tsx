"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  FaSearch,
  FaHouseUser,
  FaCaretDown,
  FaSignOutAlt,
  FaUser,
  FaCogs,
  FaConciergeBell,
  FaUserFriends,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUserTimes,
  FaBriefcase,
  FaCreditCard,
  FaCoins,
  FaFileInvoiceDollar,
  FaServicestack,
  FaUserMinus,
  FaFileSignature,
  FaChartBar,
  FaSlidersH,
  FaTimesCircle,
  FaFileInvoice,
  FaAngleDown,
} from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiCartwheel } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { SwipeableDrawer } from "@mui/material";
import {
  closeMobileSidebar,
  setMobileSidebar,
} from "@/app/redux/features/sidebarMobileSlice";

export default function Sidebar() {
  // DECLARATIONS
  const sidebar: boolean = useAppSelector(
    (state) => state.mobileSidebar.sidebar
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleClose = () => {
    dispatch(closeMobileSidebar());
  };

  return (
    <>
      <aside className="side-bar">
        <div className="switch">
          <FaBriefcase />
          <p>Switch Organization</p>
          <FaAngleDown />
        </div>
        <div
          className={`${
            pathname === `/dashboard`
              ? "active-dashboard"
              : "inactive-dashboard"
          }`}
          onClick={() => router.push("/dashboard")}
        >
          <FaHouseUser />
          <p>Dashboard</p>
        </div>
        <div className="products">
          <p className="product-header">CUSTOMERS</p>
          <div
            className={`${
              pathname === `/users` ? "active-menu" : "inactive-menu"
            }`}
            onClick={() => router.push("/users")}
          >
            <FaUserFriends />
            <p>Users</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaUsers />
            <p>Guarantors</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <BiMoneyWithdraw />
            <p>Loans</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaRegHandshake />
            <p>Decision Models</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaPiggyBank />
            <p>Savings</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaHandHoldingUsd />
            <p>Loan Requests</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaUser />
            <p>Whitelist</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaUserTimes />
            <p>Karma</p>
          </div>
        </div>
        <div className="products">
          <p className="product-header">BUSINESSES</p>
          <div className={`${"inactive-menu"}`}>
            <FaBriefcase />
            <p>Organisation</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaHandHoldingUsd />
            <p>Loan Products</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaCreditCard />
            <p>Savings Products</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaCoins />
            <p>Fees and Charges</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaFileInvoiceDollar />
            <p>Transactions</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaServicestack />
            <p>Services</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaUserMinus />
            <p>Services Account</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaFileSignature />
            <p>Settlements</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaChartBar />
            <p>Reports</p>
          </div>
        </div>
        <div className="products">
          <p className="product-header">SETTINGS</p>
          <div className={`${"inactive-menu"}`}>
            <FaSlidersH />
            <p>Preferences</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaTimesCircle />
            <p>Fees and Pricing</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <FaFileInvoice />
            <p>Audit Logs</p>
          </div>
          <div className={`${"inactive-menu"}`}>
            <GiCartwheel />
            <p>System Messages</p>
          </div>
        </div>

        <div className="logout">
          <div
            className={`${"inactive-menu"}`}
            onClick={() => router.push("/")}
          >
            <FiLogOut />
            <p>Logout</p>
          </div>
          <p className="v">v.1.2.0</p>
        </div>
      </aside>
      <SwipeableDrawer
        anchor="left"
        open={sidebar}
        onClose={handleClose}
        onOpen={() => dispatch(setMobileSidebar())}
      >
        <aside className={sidebar ? "mobile-sidebar" : "mobile-sidebar-off"}>
          <div className="logo" onClick={() => router.push("/")}>
            <Image
              src="/images/logo.png"
              alt="lendsqr-logo"
              width={24.7}
              height={25}
            />
            <h2>lendsqr</h2>
          </div>
          <div className="switch">
            <FaBriefcase />
            <p>Switch Organization</p>
            <FaAngleDown />
          </div>
          <div
            className={`${
              pathname === `/dashboard`
                ? "active-dashboard"
                : "inactive-dashboard"
            }`}
            onClick={() => router.push("/dashboard")}
          >
            <FaHouseUser />
            <p>Dashboard</p>
          </div>
          <div className="products">
            <p className="product-header">CUSTOMERS</p>
            <div
              className={`${
                pathname === `/users` ? "active-menu" : "inactive-menu"
              }`}
              onClick={() => router.push("/users")}
            >
              <FaUserFriends />
              <p>Users</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaUsers />
              <p>Guarantors</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <BiMoneyWithdraw />
              <p>Loans</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaRegHandshake />
              <p>Decision Models</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaPiggyBank />
              <p>Savings</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaHandHoldingUsd />
              <p>Loan Requests</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaUser />
              <p>Whitelist</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaUserTimes />
              <p>Karma</p>
            </div>
          </div>
          <div className="products">
            <p className="product-header">BUSINESSES</p>
            <div className={`${"inactive-menu"}`}>
              <FaBriefcase />
              <p>Organisation</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaHandHoldingUsd />
              <p>Loan Products</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaCreditCard />
              <p>Savings Products</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaCoins />
              <p>Fees and Charges</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaFileInvoiceDollar />
              <p>Transactions</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaServicestack />
              <p>Services</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaUserMinus />
              <p>Services Account</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaFileSignature />
              <p>Settlements</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaChartBar />
              <p>Reports</p>
            </div>
          </div>
          <div className="products">
            <p className="product-header">SETTINGS</p>
            <div className={`${"inactive-menu"}`}>
              <FaSlidersH />
              <p>Preferences</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaTimesCircle />
              <p>Fees and Pricing</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <FaFileInvoice />
              <p>Audit Logs</p>
            </div>
            <div className={`${"inactive-menu"}`}>
              <GiCartwheel />
              <p>System Messages</p>
            </div>
          </div>

          <div className="logout">
            <div className={`${"inactive-menu"}`}>
              <FiLogOut />
              <p>Logout</p>
            </div>
            <p className="v">v.1.2.0</p>
          </div>
        </aside>
      </SwipeableDrawer>
    </>
  );
}
