import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
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
          <VietnamIcon />
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

function VietnamIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-4", className)}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SocialLinks() {
  const socialLinks = useMemo(
    () => [
      { href: "/telegram", icon: <TelegramIcon /> },
      { href: "/discord", icon: <DiscordIcon /> },
      { href: "/twitter", icon: <TwitterIcon /> },
      { href: "/facebook", icon: <FacebookIcon /> },
      { href: "/tiktok", icon: <TiktokIcon /> },
      { href: "/youtube", icon: <YoutubeIcon /> },
      { href: "/instagram", icon: <InstagramIcon /> },
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
            {isMenuShow && <CancelIcon onClick={toggleMenu} />}
            {!isMenuShow && <MenuIcon onClick={toggleMenu} />}
            <Logo />
            <div className="hidden w-full items-center gap-4 lg:flex">
              <NavBar />
              <SearchBar />
              <div className="flex-1"></div>
              <DownloadApp />
            </div>
            <div className="flex-1 lg:hidden"></div>
            <SearchIcon onClick={toggleSearchBar} />
          </div>
        ) : (
          <div className="flex w-full items-center gap-2">
            <SearchBar />
            <CancelIcon onClick={toggleSearchBar} />
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
      className="flex gap-2 rounded-md bg-gray-100/25 p-2 text-white lg:w-40"
    >
      <DownloadAppIcon />
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
        className="w-full rounded-md border border-white px-10 py-2 text-white"
      />
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 hidden -translate-y-1/2 lg:block" />
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

function TelegramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
      />
    </svg>
  );
}

function DownloadAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="max-w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-white lg:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
      />
    </svg>
  );
}

function CancelIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-red-500 lg:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function SearchIcon({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("size-6 text-white lg:hidden", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
