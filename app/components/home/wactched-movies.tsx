import { formatTime } from "@/utils/format";
import { MOVIES } from "@/mocks/movies";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CardThumbnail,
  MovieCard,
  MovieName,
} from "@/components/common/movie-card";

export default function WatchedMovies() {
  return (
    <section className="space-y-4">
      <p className="text-xl font-bold text-white">Xem tiếp của bạn</p>
      <Carousel className="gap-4">
        <CarouselContent>
          {MOVIES.map((movie) => (
            <CarouselItem
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
              key={movie.id}
            >
              <MovieCard movie={movie}>
                <CardThumbnail url={movie.thumbnail} alt={movie.viName}>
                  <div className="absolute inset-0 rounded-md transition-all duration-300 ease-in-out group-hover:bg-black/30 group-active:bg-black/30" />
                  <XMarkIcon className="absolute top-2 right-2 size-6 rounded-md bg-white p-0.5" />
                </CardThumbnail>
                <Progress progress={(movie.timeWatched / movie.time) * 100} />
                <p className="flex items-center justify-center gap-2">
                  <span className="text-white">
                    {formatTime(movie.timeWatched)}
                  </span>
                  <span className="text-white">/</span>
                  <span className="text-gray-400">
                    {formatTime(movie.time)}
                  </span>
                </p>
                <MovieName>{movie.viName}</MovieName>
                <MovieName className="text-gray-400">{movie.enName}</MovieName>
              </MovieCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function Progress({ progress }: { progress: number }) {
  return (
    <div className="relative mx-auto h-1.5 w-9/10 bg-gray-400">
      <div className="h-full bg-yellow-400" style={{ width: `${progress}%` }} />
    </div>
  );
}
