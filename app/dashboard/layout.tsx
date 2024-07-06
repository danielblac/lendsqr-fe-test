import Header from "@/components/organisms/header/Header";
import Sidebar from "@/components/organisms/dashboard/Sidebar";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Lendsqr | Dashboard",
  description: "This is the client dashboard page.",
};

export default function DashboardLayout({ children }: layoutProps) {
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
