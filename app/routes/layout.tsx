import logo from "../assets/logo.svg";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="RoPhim" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
