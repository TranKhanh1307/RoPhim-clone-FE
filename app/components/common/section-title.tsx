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
    <div
      className={cn(
        "flex items-center lg:flex-col lg:items-start lg:justify-center lg:gap-4",
        className,
      )}
    >
      <h2
        className={cn(
          "grow bg-linear-to-r via-white to-white bg-clip-text text-2xl font-bold text-transparent lg:grow-0",
          titleColor,
        )}
      >
        {children}
      </h2>
      <Link
        to={to}
        className="flex items-center gap-1 fill-white text-white hover:fill-yellow-200 hover:text-yellow-200 active:fill-yellow-200 active:text-yellow-200"
      >
        <p className="hidden lg:block">Xem toàn bộ</p>
        <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  );
}
