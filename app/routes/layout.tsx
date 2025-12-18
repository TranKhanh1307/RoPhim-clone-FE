import { Outlet } from "react-router";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="space-y-4 bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
