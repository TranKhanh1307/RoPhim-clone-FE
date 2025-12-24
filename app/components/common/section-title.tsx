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
    <div className={cn("flex items-center justify-between", className)}>
      <Link
        to={to}
        className={cn(
          "bg-linear-to-r via-white to-white bg-clip-text text-2xl font-extrabold text-transparent",
          titleColor,
        )}
      >
        {children}
      </Link>
      <ChevronRightIcon className="size-6 fill-white" />
    </div>
  );
}
