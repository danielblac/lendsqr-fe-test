export interface UserSchema {
  _id: string;
  guid: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  avatar: string;
  gender: string;
  balance: string;
  accountNumber: number;
  bank: string;
  address: string;
  registered: string;
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  userName: string;
  facebook: string;
  twitter: string;
  instagram: string;
  guarantors: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    gender: string;
    address: string;
  }[];
}
