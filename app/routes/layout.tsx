import { Outlet } from "react-router";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
