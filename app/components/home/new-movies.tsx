import { cn } from "@/lib/utils";
import { MOVIES } from "@/mocks/movies";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

const SECTIONS = [
  {
    title: "Phim Hàn Quốc mới",
    to: "/korea",
    fromColor: "[&>span]:from-purple-500",
  },
  {
    title: "Phim Trung Quốc mới",
    to: "/china",
    fromColor: "[&>span]:from-yellow-500",
  },
  {
    title: "Phim US-UK mới",
    to: "/us-uk",
    fromColor: "[&>span]:from-pink-500",
  },
];

function Title({
  className,
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) {
  return (
    <Link
      className={cn("flex items-center justify-between", className)}
      to={to}
    >
      <span className="bg-linear-to-r via-white to-white bg-clip-text text-2xl font-extrabold text-transparent">
        {children}
      </span>
      <ChevronRightIcon className="size-6 fill-white" />
    </Link>
  );
}

function MovieRow() {
  return (
    <div className="scrollbar-hidden flex gap-2 overflow-x-scroll">
      {MOVIES.map((movie) => (
        <div key={movie.id} className="shrink-0 basis-52 space-y-2">
          <div
            className="h-32 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${movie.thumbnail})` }}
          />
          <p className="line-clamp-1 text-center font-bold text-white">
            {movie.viName}
          </p>
          <p className="line-clamp-1 text-center font-bold text-gray-400">
            {movie.enName}
          </p>
        </div>
      ))}
    </div>
  );
}

export function NewMovies() {
  return (
    <section className="space-y-4 rounded-t-md bg-slate-400/25 py-4">
      {SECTIONS.map((section) => (
        <div key={section.to} className="space-y-4">
          <Title to={section.to} className={section.fromColor}>
            {section.title}
          </Title>
          <MovieRow />
        </div>
      ))}
    </section>
  );
}
