import {
  Bars3CenterLeftIcon,
  BellIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "@/components/common/logo";

export default function Header() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);

  const toggleMenu = () => setIsMenuShow(!isMenuShow);
  const toggleSearchBar = () => setIsSearchBarShow(!isSearchBarShow);

  return (
    <header className="relative">
      <div className="flex min-h-18 items-center gap-4 bg-gray-400 p-3">
        {!isSearchBarShow ? (
          <div className="flex w-full items-center gap-4">
            {isMenuShow ? (
              <XMarkIcon className="size-6 text-red-500" onClick={toggleMenu} />
            ) : (
              <Bars3CenterLeftIcon
                className="size-6 text-white lg:hidden"
                onClick={toggleMenu}
              />
            )}
            <Logo />
            <div className="hidden w-full items-center gap-4 lg:flex">
              <NavBar />
              <SearchBar />
              <div className="flex-1"></div>
              <DownloadApp />
              <Notification />
            </div>
            <div className="flex-1 lg:hidden"></div>
            <MagnifyingGlassIcon
              className="size-6 text-white lg:hidden"
              onClick={toggleSearchBar}
            />
          </div>
        ) : (
          <div className="flex w-full items-center gap-2">
            <SearchBar />
            <XMarkIcon
              className="size-6 text-red-500"
              onClick={toggleSearchBar}
            />
          </div>
        )}
      </div>
      {isMenuShow && (
        <div className="absolute inset-x-2 z-20 mt-2 space-y-3 rounded-md bg-blue-300 p-2">
          <DownloadApp />
          <NavBar />
        </div>
      )}
    </header>
  );
}

function DownloadApp() {
  return (
    <NavLink
      to={"/download-app"}
      className="flex items-center gap-2 rounded-md bg-gray-100/25 p-2 text-white lg:w-40"
    >
      <ComputerDesktopIcon className="size-8 text-white" />
      <div>
        <p>Tải ứng dụng</p>
        <p className="font-bold">RoPhim</p>
      </div>
    </NavLink>
  );
}

function SearchBar() {
  return (
    <div className="relative w-full lg:w-fit">
      <input
        type="text"
        placeholder="Tìm kiếm phim, diễn viên"
        className="w-full rounded-md border border-white px-2 py-2 text-white lg:px-10"
      />
      <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 left-3 hidden size-6 -translate-y-1/2 text-white lg:block" />
    </div>
  );
}

const NAVIGATIONS = [
  { name: "Phim Lẻ", href: "/" },
  { name: "Phim Bộ", href: "/series" },
  { name: "Thể Loại", href: "/categories" },
  { name: "Quốc Gia", href: "/countries" },
  { name: "Xem Chung", href: "/watch-together" },
  { name: "Thêm", href: "/more" },
];

function NavBar() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-3 text-white lg:flex">
        {NAVIGATIONS.map(({ name, href }) => (
          <li key={name}>
            <NavLink to={href}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Notification() {
  return (
    <div className="relative rounded-full border border-white/30 bg-white/10 p-4">
      <BellIcon className="h-5 w-5 text-white" />
      <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[10px] font-semibold text-white shadow">
        99+
      </span>
    </div>
  );
}
