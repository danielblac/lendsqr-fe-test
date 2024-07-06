import Header from "@/components/organisms/header/Header";
import Sidebar from "@/components/organisms/dashboard/Sidebar";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Lendsqr | Users",
  description: "This is the client users page.",
};

export default function UsersLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        {children}
      </main>
    </>
  );
}
