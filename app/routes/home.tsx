import { HotMovies } from "@/components/home/hot-movies";
import type { Route } from "./+types/home";
import Topics from "@/components/home/topics";
import WatchedMovies from "@/components/home/wactched-movies";
import TopMovies from "@/components/home/top-movies";
import { MOVIES } from "@/mocks/movies";
import { UpcomingMovies } from "@/components/home/upcoming-movies";
import { MovieList } from "@/components/home/movie-list";
import AnimeMovies from "@/components/home/anime-movies";
import { useMemo } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RoPhim" },
    { name: "description", content: "Welcome to RoPhim!" },
  ];
}

export default function Home({ loaderData: _loaderData }: Route.ComponentProps) {
  const top10 = useMemo(() => MOVIES.slice(0, 10), []);
  const top10Reverse = useMemo(() => [...top10].reverse(), [top10]);
  const reversedMovies = useMemo(() => [...MOVIES].reverse(), []);
  return (
    <>
      <HotMovies />
      <div className="mx-auto max-w-[1800px] space-y-8">
        <Topics />
        <WatchedMovies />
        <div className="space-y-4 rounded-t-md bg-linear-to-t via-slate-400/25 via-75% to-slate-400/25 py-4">
          <MovieList
            title="Phim Hàn Quốc mới"
            to="/korea"
            titleColor="from-purple-500"
            movies={MOVIES}
            cardVariant="horizontal"
            autoScrollDirection="forward"
          />
          <MovieList
            title="Phim Trung Quốc mới"
            to="/china"
            titleColor="from-yellow-500"
            movies={ MOVIES}
            cardVariant="horizontal"
            autoScrollDirection="backward"
          />
          <MovieList
            title="Phim US-UK mới"
            to="/us-uk"
            titleColor="from-pink-500"
            movies={ MOVIES}
            cardVariant="horizontal"
            autoScrollDirection="forward"
          />
        </div>
        <TopMovies title={"Top 10 phim lẻ hôm nay"} movies={top10} />
        <MovieList
          cardVariant="horizontal"
          className="lg:block"
          title="Mãn Nhãn với Phim Chiếu Rạp"
          to="/us-uk"
          titleColor="from-white"
          movies={reversedMovies}
          autoScrollDirection="forward"
        />
        <TopMovies title={"Top 10 phim bộ hôm nay"} movies={top10Reverse} />
        <UpcomingMovies
          title="Phim Sắp Tới Trên Rổ"
          to="/upcoming"
          titleColor="from-white"
          movies={ MOVIES}
          cardVariant="horizontal"
        />
        <AnimeMovies />
      </div>
    </>
  );
}
