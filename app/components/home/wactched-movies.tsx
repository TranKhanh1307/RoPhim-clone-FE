import { formatTime } from "@/utils/format";
import { MOVIES } from "@/mocks/movies";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import HorizontalScroll from "@/components/common/horizontal-scroll";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function WatchedMovies() {
  return (
    <section className="space-y-4">
      <p className="text-xl font-bold text-white">Xem tiếp của bạn</p>
      <Carousel className="gap-4">
        <CarouselContent>
          {MOVIES.map((movie) => (
            <CarouselItem className="basis-48" key={movie.id}>
              <Link
                key={movie.id}
                className="space-y-2"
                to={`/movie/${movie.id}`}
              >
                <div className="relative">
                  <img
                    src={movie.thumbnail}
                    alt={movie.viName}
                    className="h-72 w-full rounded-md object-cover"
                  />
                  <XMarkIcon className="absolute top-2 right-2 size-6 rounded-md bg-white p-0.5" />
                </div>
                <Progress progress={(movie.timeWatched / movie.time) * 100} />
                <p className="flex items-center justify-center gap-2">
                  <span className="text-white">
                    {formatTime(movie.timeWatched)}
                  </span>
                  <span className="text-gray-400">
                    / {formatTime(movie.time)}
                  </span>
                </p>
                <p className="line-clamp-1 text-center text-white">
                  {movie.viName}
                </p>
                <p className="line-clamp-1 text-center text-gray-400">
                  {movie.enName}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
