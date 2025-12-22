import { cn } from "@/utils/cn";
import { MOVIES } from "@/mocks/movies";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import ScrollArea from "../common/scroll-area";
import MovieCard from "../common/movie-card";

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
    <ScrollArea>
      {MOVIES.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ScrollArea>
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
