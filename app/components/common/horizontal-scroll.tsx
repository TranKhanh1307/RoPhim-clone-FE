import { cn } from "@/utils/cn";

export default function HorizontalScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("scrollbar-hidden flex gap-2 overflow-x-scroll", className)}
    >
      {children}
    </div>
  );
}
