import { Outlet } from "react-router";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="space-y-8 bg-slate-900 pb-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
