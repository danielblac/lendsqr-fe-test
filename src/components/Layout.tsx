import { ReactNode } from "react";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";

type LayoutProps = {children?: ReactNode}

export default function Layout({children}: LayoutProps) {
  return (
    <div className="users-layout">
      <UserHeader />
      <div className="main">
        <UserSidebar />
          {children}
      </div>
    </div>
  )
}

