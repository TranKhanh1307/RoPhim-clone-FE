import { memo } from "react";
import { Link } from "react-router";
import type { Movie } from "@/mocks/movies";
import { cn } from "@/utils/cn";

type MovieCardVariant = "vertical" | "horizontal";

const VARIANT_STYLES = {
  vertical: {
    imgHeight: "h-80",
    width: 208,
    height: 320,
  },
  horizontal: {
    imgHeight: "h-40",
    width: 352,
    height: 128,
  },
} as const;

const MovieCard = memo(function MovieCard({
  movie,
  variant = "vertical",
  className,
}: {
  movie: Movie;
  variant?: MovieCardVariant;
  className?: string;
}) {
  const v = VARIANT_STYLES[variant];

  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn("group space-y-2", className)}
    >
      <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-95">
        <img
          src={movie.thumbnail}
          alt={movie.viName}
          width={v.width}
          height={v.height}
          loading="lazy"
          className={cn(
            "w-full rounded-md object-cover object-center",
            v.imgHeight,
          )}
        />
        <div className="absolute inset-0 rounded-md transition-colors duration-300 group-hover:bg-yellow-200/30" />
      </div>

      <MovieName>{movie.viName}</MovieName>
      <MovieName className="text-gray-400">{movie.enName}</MovieName>
    </Link>
  );
});

export default MovieCard;

const MovieName = memo(function MovieName({
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
});
