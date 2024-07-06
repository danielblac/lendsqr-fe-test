"use client";
import { UserSchema } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface IProps {
  user: UserSchema;
}

export default function UserDetails({ user }: IProps) {
  // DECLARATIONS
  const router = useRouter();

  // STATES
  const [generalDetails, setGeneralDetails] = useState(true);
  const [documents, setDocuments] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [loans, setLoans] = useState(false);
  const [savings, setSavings] = useState(false);
  const [appSystem, setAppSystem] = useState(false);

  // FUNCTIONS
  const handleGeneralDetails = () => {
    setGeneralDetails(true);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppSystem(false);
  };

  const handleDocuments = () => {
    setGeneralDetails(false);
    setDocuments(true);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppSystem(false);
  };

  const handleBankDetails = () => {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(true);
    setLoans(false);
    setSavings(false);
    setAppSystem(false);
  };

  const handleLoans = () => {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(true);
    setSavings(false);
    setAppSystem(false);
  };

  const handleSavings = () => {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(true);
    setAppSystem(false);
  };

  const handleAppSystem = () => {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppSystem(true);
  };

  return (
    <div className="user-page">
      <div className="back" onClick={() => router.back()}>
        <HiArrowNarrowLeft size={20} />
        <p>Back to Users</p>
      </div>
      <div className="user-page-header">
        <h2>User Details</h2>
        <div className="buttons">
          <button>BLACKLIST USER</button>
          <button className="activate-button">ACTIVATE USER</button>
        </div>
      </div>
      <div className="user-general-container">
        <div className="user-general">
          <div className="user-profile">
            <Image
              className="profile-photo"
              src="/images/avatar.png"
              alt="profile-photo"
              width={100}
              height={100}
            />
            <div className="user-profile-name">
              <p className="profile-name">
                {user.firstName} {user.lastName}
              </p>
              <p className="account-number">{user.guid.slice(0, 8)}</p>
            </div>
          </div>
          <div className="user-tier">
            <p className="user-th">User's Tier</p>
            <div className="rating">
              <Image
                src="/images/filled-star.png"
                alt="star"
                width={16}
                height={16}
              />
              <Image src="/images/star.png" alt="star" width={16} height={16} />
              <Image src="/images/star.png" alt="star" width={16} height={16} />
            </div>
          </div>
          <div className="account-details">
            <p className="account-balance">₦{user.balance}</p>
            <p className="bank">{`${user.accountNumber}/${user.bank}`}</p>
          </div>
        </div>
        <div className="user-details-link">
          <div
            className={
              generalDetails ? "active-user-link" : "inactive-user-link"
            }
            onClick={handleGeneralDetails}
          >
            General Details
          </div>
          <div
            className={documents ? "active-user-link" : "inactive-user-link"}
            onClick={handleDocuments}
          >
            Documents
          </div>
          <div
            className={bankDetails ? "active-user-link" : "inactive-user-link"}
            onClick={handleBankDetails}
          >
            Bank Details
          </div>
          <div
            className={loans ? "active-user-link" : "inactive-user-link"}
            onClick={handleLoans}
          >
            Loans
          </div>
          <div
            className={savings ? "active-user-link" : "inactive-user-link"}
            onClick={handleSavings}
          >
            Savings
          </div>
          <div
            className={appSystem ? "active-user-link" : "inactive-user-link"}
            onClick={handleAppSystem}
          >
            App and System
          </div>
        </div>
      </div>
      <div className="user-details">
        <div className="user-information">
          <p className="user-information-header">Personal Information</p>
          <div className="information">
            <div className="information-details">
              <p className="information-header">FULL NAME</p>
              <p className="information-body">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="information-details">
              <p className="information-header">PHONE NUMBER</p>
              <p className="information-body">{`0${user.phone}`}</p>
            </div>
            <div className="information-details">
              <p className="information-header">EMAIL ADDRESS</p>
              <p className="information-body">{user.email}</p>
            </div>
            <div className="information-details">
              <p className="information-header">BVN</p>
              <p className="information-body">{user.guid.slice(0, 8)}</p>
            </div>
            <div className="information-details">
              <p className="information-header">GENDER</p>
              <p className="information-body">{user.gender}</p>
            </div>
            <div className="information-details">
              <p className="information-header">MARITAL STATUS</p>
              <p className="information-body">Single</p>
            </div>
            <div className="information-details">
              <p className="information-header">CHILDREN</p>
              <p className="information-body">None</p>
            </div>
            <div className="information-details">
              <p className="information-header">TYPE OF RESIDENCE</p>
              <p className="information-body">Parent's Apartment</p>
            </div>
          </div>
        </div>
        <div className="user-information">
          <p className="user-information-header">Education and Employment</p>
          <div className="information">
            <div className="information-details">
              <p className="information-header">LEVEL OF EDUCATION</p>
              <p className="information-body">{user.level}</p>
            </div>
            <div className="information-details">
              <p className="information-header">EMPLOYMENT STATUS</p>
              <p className="information-body">{user.employmentStatus}</p>
            </div>
            <div className="information-details">
              <p className="information-header">SECTOR OF EMPLOYMENT</p>
              <p className="information-body">{user.sector}</p>
            </div>
            <div className="information-details">
              <p className="information-header">DURATION OF EMPLOYMENT</p>
              <p className="information-body">{user.duration}</p>
            </div>
            <div className="information-details">
              <p className="information-header">OFFICE EMAIL</p>
              <p className="information-body">{user.officeEmail}</p>
            </div>
            <div className="information-details">
              <p className="information-header">MONTHLY INCOME</p>
              <p className="information-body">₦{user.monthlyIncome}</p>
            </div>
            <div className="information-details">
              <p className="information-header">LOAN REPAYMENT</p>
              <p className="information-body">₦{user.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="user-information">
          <p className="user-information-header">Socials</p>
          <div className="information">
            <div className="information-details">
              <p className="information-header">TWITTER</p>
              <p className="information-body">{user.twitter.toLocaleLowerCase()}</p>
            </div>
            <div className="information-details">
              <p className="information-header">FACEBOOK</p>
              <p className="information-body">{user.facebook}</p>
            </div>
            <div className="information-details">
              <p className="information-header">INSTAGRAM</p>
              <p className="information-body">{user.instagram.toLocaleLowerCase()}</p>
            </div>
          </div>
        </div>
        <div className="user-information">
          <p className="user-information-header">Guarantors</p>
          {user.guarantors.map((guarantor) => (
            <div key={guarantor.id} className="information guarantor">
              <div className="information-details">
                <p className="information-header">FULL NAME</p>
                <p className="information-body">
                  {guarantor.firstName} {guarantor.lastName}
                </p>
              </div>
              <div className="information-details">
                <p className="information-header">PHONE NUMBER</p>
                <p className="information-body">{`0${guarantor.phone}`}</p>
              </div>
              <div className="information-details">
                <p className="information-header">EMAIL ADDRESS</p>
                <p className="information-body">{guarantor.email}</p>
              </div>
              <div className="information-details">
                <p className="information-header">RELATIONSHIP</p>
                <p className="information-body">Sibling</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
