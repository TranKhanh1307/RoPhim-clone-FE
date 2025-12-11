import logo from "@/assets/logo.svg";
import { Link, NavLink, Outlet } from "react-router";

interface NavItem {
  name: string;
  to: string;
}

export default function Layout() {
  return (
    <div>
      <aside className="md:hidden">
        <Logo />
        <NavBar />
        <Notification />
      </aside>
      <header className="hidden items-center gap-4 bg-gray-400 p-3 md:flex">
        <Logo />
        <NavBar />
        <div className="flex-1"></div>
        <Notification />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

function Notification() {
  return (
    <div className="relative rounded-full border border-white p-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z"
          clipRule="evenodd"
        />
      </svg>

      <div className="absolute -top-1 -right-1.5 flex min-w-6 items-center justify-center rounded-full bg-gray-400 px-1 text-xs text-white">
        3
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to={"/"}>
      <img src={logo} alt="RoPhim" width={150} height={150} />
    </Link>
  );
}

function NavBar() {
  const navigation: NavItem[] = [
    { name: "Chủ Đề", to: "/topic" },
    { name: "Thể Loại", to: "/topic" },
    { name: "Phim Lẻ", to: "/topic" },
    { name: "Phim Bộ", to: "/topic" },
    { name: "Xem Chung", to: "/topic" },
    { name: "Quốc Gia", to: "/topic" },
    { name: "Diễn Viên", to: "/topic" },
    { name: "Lịch Chiếu", to: "/topic" },
  ];

  return (
    <nav>
      <ul className="flex gap-3 text-white">
        {navigation.map((item) => (
          <li key={item.name}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
