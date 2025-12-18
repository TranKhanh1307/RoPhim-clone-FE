import { cn } from "@/lib/utils";

export default function MovieCard({
  children,
  className,
  thumbnail,
}: {
  children: React.ReactNode;
  className?: string;
  thumbnail: string;
}) {
  return (
    <div
      className={cn("rounded-md bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      {children}
    </div>
  );
}
