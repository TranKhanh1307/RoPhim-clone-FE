import { formatTime } from "@/lib/utils";
import { MOVIES } from "@/mocks/movies";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MovieCard from "../common/movie-card";

export default function WatchedMovies() {
  return (
    <section className="space-y-4">
      <p className="text-xl font-bold text-white">Xem tiếp của bạn</p>
      <div className="scrollbar-hidden flex gap-4 overflow-x-auto">
        {MOVIES.map((movie) => (
          <div key={movie.id} className="shrink-0 basis-48 space-y-2">
            <MovieCard className="relative h-72" thumbnail={movie.thumbnail}>
              <XMarkIcon className="absolute top-2 right-2 size-6 rounded-md bg-white p-0.5" />
            </MovieCard>
            <Progress progress={(movie.timeWatched / movie.time) * 100} />
            <p className="flex items-center justify-center gap-2">
              <span className="text-white">
                {formatTime(movie.timeWatched)}
              </span>
              <span className="text-gray-400">/ {formatTime(movie.time)}</span>
            </p>
            <p className="line-clamp-1 text-center text-white">
              {movie.viName}
            </p>
            <p className="line-clamp-1 text-center text-gray-400">
              {movie.enName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Progress({ progress }: { progress: number }) {
  return (
    <div
      className="relative mx-auto h-1.5 w-9/10 bg-gray-400 after:absolute after:h-full after:w-(--progress) after:bg-yellow-400"
      style={{ ["--progress" as any]: `${progress}%` }}
    />
  );
}
