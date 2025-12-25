import { cn } from "@/utils/cn";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

export default function Title({
  className,
  children,
  to,
  titleColor,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  titleColor?: string;
}) {
  return (
    <div className={cn("flex lg:flex-col justify-between", className)}>
      <h2
        className={cn(
          "bg-linear-to-r to-white bg-clip-text text-2xl font-bold text-transparent",
          titleColor,
        )}
      >
        {children}
      </h2>
      <Link
        to={to}
        className="flex items-center gap-1 fill-white text-white hover:fill-yellow-200 hover:text-yellow-200 active:fill-yellow-200 active:text-yellow-200"
      >
        <span className="hidden lg:inline">Xem toàn bộ</span>
        <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  );
}
