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
  className,
  children,
}: {
  movie: Movie;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn("group space-y-2", className)}
    >
      {children}
    </Link>
  );
});

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

const CardThumbnail = memo(function CardThumbnail({
  url,
  alt,
  variant = "vertical",
  className,
  children,
}: {
  url: string;
  alt: string;
  variant?: MovieCardVariant;
  className?: string;
  children?: React.ReactNode;
}) {
  const v = VARIANT_STYLES[variant];
  return (
    <div
      className={cn(
        "relative transition-all duration-300 ease-in-out group-hover:scale-95 group-active:scale-95",
        v.imgHeight,
        className,
      )}
    >
      <img
        src={url}
        alt={alt}
        width={v.width}
        height={v.height}
        loading="lazy"
        className="h-full w-full rounded-md object-cover object-center"
      />
      {children}
    </div>
  );
});

function ThumbBadges({
  isSubbed,
  isDubbed,
}: Pick<Movie, "isSubbed" | "isDubbed">) {
  if (!isSubbed && !isDubbed) return null;
  const baseStyle =
    "w-fit rounded-tl-full rounded-tr-full rounded-b-full px-2 py-0.5 lg:rounded-b-none lg:py-2";

  return (
    <div className="absolute bottom-2 left-2 flex flex-col gap-1 text-xs text-white lg:bottom-0 lg:left-4 lg:flex-row lg:gap-0">
      {isSubbed && (
        <p
          className={cn(
            "bg-gray-400 lg:rounded-tl-sm lg:rounded-tr-none",
            baseStyle,
            !isDubbed && "lg:rounded-tr-sm",
          )}
        >
          P.Đề
        </p>
      )}
      {isDubbed && (
        <p
          className={cn(
            "bg-green-600 lg:rounded-tl-none lg:rounded-tr-sm",
            baseStyle,
            !isSubbed && "lg:rounded-tl-sm",
          )}
        >
          T.Minh
        </p>
      )}
    </div>
  );
}

export { MovieCard, MovieName, CardThumbnail, ThumbBadges };
