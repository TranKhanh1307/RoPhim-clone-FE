import logo from "@/assets/logo.svg";
import { DiscordIcon } from "@/components/icons";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instargram";
import { TelegramIcon } from "@/components/icons/telegram";
import { TiktokIcon } from "@/components/icons/tiktok";
import { TwitterIcon } from "@/components/icons/twitter";
import { YoutubeIcon } from "@/components/icons/youtube";
import { cn } from "@/lib/utils";
import {
  Bars3CenterLeftIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

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

function Footer() {
  return (
    <footer className="space-y-6 bg-gray-400 p-4">
      <div className="mx-auto flex max-w-fit items-center space-x-2 rounded-full bg-red-500/80 px-3 py-2">
        <span className="rounded-full bg-red-500 p-2 text-yellow-400">
          <StarIcon className="size-6" />
        </span>
        <p className="text-white">Hoàng Sa & Trường Sa là của Việt Nam!</p>
      </div>
      <div className="flex justify-center">
        <Logo className="max-w-3xl" />
      </div>
      <SocialLinks />
    </footer>
  );
}

function SocialLinks() {
  const socialLinks = useMemo(
    () => [
      { href: "/telegram", icon: <TelegramIcon className="size-6" /> },
      { href: "/discord", icon: <DiscordIcon className="size-6" /> },
      { href: "/twitter", icon: <TwitterIcon className="size-6" /> },
      { href: "/facebook", icon: <FacebookIcon className="size-6" /> },
      { href: "/tiktok", icon: <TiktokIcon className="size-6" /> },
      { href: "/youtube", icon: <YoutubeIcon className="size-6" /> },
      { href: "/instagram", icon: <InstagramIcon className="size-6" /> },
    ],
    [],
  );

  return (
    <ul className="flex justify-between p-2">
      {socialLinks.map((item) => (
        <li
          key={item.href}
          className="flex items-center justify-center rounded-full bg-gray-100/25 p-2"
        >
          <a href={item.href} className="text-white">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);

  const toggleMenu = () => setIsMenuShow(!isMenuShow);
  const toggleSearchBar = () => setIsSearchBarShow(!isSearchBarShow);

  return (
    <header className="relative">
      <div className="flex min-h-18 items-center gap-4 bg-gray-400 p-3">
        {!isSearchBarShow ? (
          <div className="flex w-full items-center gap-4">
            {isMenuShow && (
              <XMarkIcon className="size-6 text-red-500" onClick={toggleMenu} />
            )}
            {!isMenuShow && (
              <Bars3CenterLeftIcon
                className="size-6 text-white"
                onClick={toggleMenu}
              />
            )}
            <Logo />
            <div className="hidden w-full items-center gap-4 lg:flex">
              <NavBar />
              <SearchBar />
              <div className="flex-1"></div>
              <DownloadApp />
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
        <div className="absolute w-full space-y-3 rounded-md bg-blue-300 p-2">
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

function NavBar() {
  const navigations = useMemo(
    () => [
      { name: "Phim Lẻ", href: "/" },
      { name: "Phim Bộ", href: "/series" },
      { name: "Thể Loại", href: "/categories" },
      { name: "Quốc Gia", href: "/countries" },
      { name: "Xem Chung", href: "/watch-together" },
      { name: "Thêm", href: "/more" },
    ],
    [],
  );

  return (
    <nav>
      <ul className="grid grid-cols-2 gap-3 text-white lg:flex">
        {navigations.map((item) => (
          <li key={item.name}>
            <NavLink to={item.href}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="RoPhim"
        width={150}
        height={150}
        className={cn("max-w-28", className)}
      />
    </Link>
  );
}
