import {
  Bars3CenterLeftIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState, memo } from "react";
import { NavLink } from "react-router";
import Logo from "@/components/common/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleSearch = () => setIsSearchOpen((v) => !v);

  return (
    <header className="relative">
      <div className="flex min-h-18 items-center gap-4 bg-gray-400 p-3">
        {isSearchOpen ? (
          <MobileSearch onClose={toggleSearch} />
        ) : (
          <MainHeader
            isMenuOpen={isMenuOpen}
            onToggleMenu={toggleMenu}
            onToggleSearch={toggleSearch}
          />
        )}
      </div>

      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

/* ---------------- Sub Components ---------------- */

const MainHeader = memo(function MainHeader({
  isMenuOpen,
  onToggleMenu,
  onToggleSearch,
}) {
  return (
    <div className="flex w-full items-center gap-4">
      <MenuToggle isOpen={isMenuOpen} onClick={onToggleMenu} />

      <Logo />

      <div className="hidden w-full items-center gap-4 lg:flex">
        <NavBar />
        <SearchBar />
        <div className="flex-1" />
        <DownloadApp />
      </div>

      <div className="flex-1 lg:hidden" />

      <MagnifyingGlassIcon
        className="size-6 cursor-pointer text-white lg:hidden"
        onClick={onToggleSearch}
      />
    </div>
  );
});

function MenuToggle({ isOpen, onClick }) {
  const Icon = isOpen ? XMarkIcon : Bars3CenterLeftIcon;

  return (
    <Icon
      className={`size-6 cursor-pointer ${
        isOpen ? "text-red-500" : "text-white lg:hidden"
      }`}
      onClick={onClick}
    />
  );
}

function MobileSearch({ onClose }) {
  return (
    <div className="flex w-full items-center gap-2">
      <SearchBar autoFocus />
      <XMarkIcon
        className="size-6 cursor-pointer text-red-500"
        onClick={onClose}
      />
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute w-full space-y-3 rounded-md bg-blue-300 p-2 lg:hidden">
      <DownloadApp />
      <NavBar />
    </div>
  );
}

/* ---------------- Reusable UI ---------------- */

const DownloadApp = memo(function DownloadApp() {
  return (
    <NavLink
      to="/download-app"
      className="flex items-center gap-2 rounded-md bg-gray-100/25 p-2 text-white lg:w-40"
    >
      <ComputerDesktopIcon className="size-8" />
      <div>
        <p>Tải ứng dụng</p>
        <p className="font-bold">RoPhim</p>
      </div>
    </NavLink>
  );
});

function SearchBar({ autoFocus = false }) {
  return (
    <div className="relative w-full lg:w-fit">
      <input
        autoFocus={autoFocus}
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

const NavBar = memo(function NavBar() {
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
});
