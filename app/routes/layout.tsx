import { Outlet } from "react-router";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-blue-900/80">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
