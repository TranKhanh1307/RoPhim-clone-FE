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
          "grow title-gradient text-2xl font-bold lg:grow-0",
          titleColor,
        )}
      >
        {children}
      </h2>
      <Link
        to={to}
        className="link-cta"
      >
        <p className="hidden lg:block">Xem toàn bộ</p>
        <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  );
}
