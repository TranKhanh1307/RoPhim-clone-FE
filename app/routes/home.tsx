import { HotMovies } from "@/components/home/hot-movies";
import type { Route } from "./+types/home";
import Topics from "@/components/home/topics";
import WatchedMovies from "@/components/home/wactched-movies";
import TopMovies from "@/components/home/top-movies";
import { MOVIES } from "@/mocks/movies";
import { UpcomingMovies } from "@/components/home/upcoming-movies";
import { MovieList } from "@/components/home/movie-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RoPhim" },
    { name: "description", content: "Welcome to RoPhim!" },
  ];
}

export async function clientLoader() {
  // const res = await fetch("https://api.example.com");
  // const movies = await res.json();
  // return movies;
  // return { movies: [] };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <HotMovies />
      <div className="mx-auto max-w-[1900px] space-y-8">
        <Topics />
        <WatchedMovies />
        <div className="space-y-4 rounded-md bg-slate-400/25 py-4">
          <MovieList
            title="Phim Hàn Quốc mới"
            to="/korea"
            titleColor="from-purple-500"
            movies={MOVIES}
            cardVariant="horizontal"
          />
          <MovieList
            title="Phim Trung Quốc mới"
            to="/china"
            titleColor="from-yellow-500"
            movies={MOVIES}
            cardVariant="horizontal"
          />
          <MovieList
            title="Phim US-UK mới"
            to="/us-uk"
            titleColor="from-pink-500"
            movies={MOVIES}
            cardVariant="horizontal"
          />
        </div>
        <TopMovies
          title={"Top 10 phim lẻ hôm nay"}
          movies={MOVIES.slice(0, 10)}
        />
        <MovieList
          title="Mãn Nhãn với Phim Chiếu Rạp"
          to="/us-uk"
          titleColor="from-white"
          movies={MOVIES.reverse()}
        />
        <TopMovies
          title={"Top 10 phim bộ hôm nay"}
          movies={MOVIES.slice(0, 10).reverse()}
        />
        <UpcomingMovies
          title="Phim Sắp Tới Trên Rổ"
          to="/upcoming"
          titleColor="from-white"
          movies={MOVIES}
          cardVariant="horizontal"
        />
      </div>
    </>
  );
}
