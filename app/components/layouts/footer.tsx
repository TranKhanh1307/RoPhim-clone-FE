import { StarIcon } from "@heroicons/react/24/solid";
import Logo from "@/components/common/logo";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";

export default function Footer() {
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

const SOCIAL_LINKS = [
  { href: "/telegram", icon: TelegramIcon },
  { href: "/discord", icon: DiscordIcon },
  { href: "/twitter", icon: TwitterIcon },
  { href: "/facebook", icon: FacebookIcon },
  { href: "/tiktok", icon: TiktokIcon },
  { href: "/youtube", icon: YoutubeIcon },
  { href: "/instagram", icon: InstagramIcon },
];

function SocialLinks() {
  return (
    <ul className="flex justify-between p-2">
      {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
        <li key={href} className="rounded-full bg-gray-100/25 p-2">
          <a href={href} className="text-white">
            <Icon className="size-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
