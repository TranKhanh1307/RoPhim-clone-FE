import { cn } from "@/lib/utils";
import { MOVIES } from "@/mocks/movies";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import MovieCard from "../common/movie-card";

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

export function NewMovies() {
  return (
    <section className={cn("space-y-4 rounded-t-md bg-slate-400/25 py-4")}>
      <div className="space-y-2">
        <Title className="[&>span]:from-purple-500" to="/korea">
          Phim Hàn Quốc mới
        </Title>
        <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
          {MOVIES.map((movie) => (
            <MovieCard
              className="h-32 shrink-0 basis-52"
              thumbnail={movie.thumbnail}
            >
              <></>
            </MovieCard>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Title className="[&>span]:from-yellow-500" to={"/china"}>
          Phim Trung Quốc mới
        </Title>
        <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
          {MOVIES.map((movie) => (
            <MovieCard
              className="h-32 shrink-0 basis-52"
              thumbnail={movie.thumbnail}
            >
              <></>
            </MovieCard>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Title className="[&>span]:from-pink-500" to={"/us-uk"}>
          Phim US-UK mới
        </Title>
        <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
          {MOVIES.map((movie) => (
            <MovieCard
              className="h-32 shrink-0 basis-52"
              thumbnail={movie.thumbnail}
            >
              <></>
            </MovieCard>
          ))}
        </div>
      </div>
    </section>
  );
}
