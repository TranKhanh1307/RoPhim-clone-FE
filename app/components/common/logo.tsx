import { Link } from "react-router";
import logo from "@/assets/logo.svg";
import { cn } from "@/utils/cn";

export default function Logo({ className }: { className?: string }) {
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
