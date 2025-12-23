import { cn } from "@/utils/cn";
import { MOVIES } from "@/mocks/movies";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import MovieCard from "@/components/common/movie-card";
import HorizontalScroll from "@/components/common/horizontal-scroll";

const SECTIONS = [
  {
    title: "Phim Hàn Quốc mới",
    to: "/korea",
    fromColor: "[&>a]:from-purple-500",
  },
  {
    title: "Phim Trung Quốc mới",
    to: "/china",
    fromColor: "[&>a]:from-yellow-500",
  },
  {
    title: "Phim US-UK mới",
    to: "/us-uk",
    fromColor: "[&>a]:from-pink-500",
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
    <div className={cn("flex items-center justify-between", className)}>
      <Link
        to={to}
        className="bg-linear-to-r via-white to-white bg-clip-text text-2xl font-extrabold text-transparent"
      >
        {children}
      </Link>
      <ChevronRightIcon className="size-6 fill-white" />
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
          <HorizontalScroll>
            {MOVIES.map((movie) => (
              <MovieCard key={movie.id} movie={movie} variant="horizontal" />
            ))}
          </HorizontalScroll>
        </div>
      ))}
    </section>
  );
}
