import type { Movie } from "@/mocks/movies";
import { cn } from "@/utils/cn";
import { Link } from "react-router";

type MovieCardVariant = "vertical" | "horizontal";

export default function MovieCard({
  movie,
  variant = "vertical",
  className,
}: {
  movie: Movie;
  variant?: MovieCardVariant;
  className?: string;
}) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn(
        "shrink-0 space-y-2",
        className,
        variant === "vertical" ? "basis-32" : "basis-52",
      )}
    >
      <img
        src={movie.thumbnail}
        alt={movie.viName}
        className={cn(
          "w-full rounded-md object-cover object-center",
          variant === "vertical" ? "h-52" : "h-32",
        )}
      />
      <MovieName>{movie.viName}</MovieName>
      <MovieName className="text-gray-400">{movie.enName}</MovieName>
    </Link>
  );
}

function MovieName({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("line-clamp-1 text-center text-sm text-white", className)}>
      {children}
    </p>
  );
}
