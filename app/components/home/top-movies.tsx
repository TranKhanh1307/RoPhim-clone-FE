import { Link } from "react-router";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { MOVIES } from "@/mocks/movies";
import { cn } from "@/utils/cn";

export default function TopMovies() {
  return (
    <section>
      <p className="mb-4 text-2xl font-bold text-white">
        Top 10 phim bộ hôm nay
      </p>
      <Carousel>
        <CarouselContent>
          {MOVIES.map((movie, idx) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="min-w-0 shrink-0 grow-0 basis-85"
            >
              <CarouselItem>
                <div
                  className={cn(
                    "group relative h-136 bg-yellow-200",
                    idx % 2 === 0 ? "clip-right" : "clip-left",
                  )}
                >
                  <img
                    src={movie.thumbnail}
                    alt={movie.viName}
                    className={cn(
                      "h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-97 group-active:scale-97",
                      idx % 2 === 0 ? "clip-right" : "clip-left",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-yellow-200/20 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-active:opacity-100",
                      idx % 2 === 0 ? "clip-right" : "clip-left",
                    )}
                  />
                </div>
                <div className="mt-3 flex w-5/6 gap-4">
                  <p className="bg-linear-to-t from-yellow-400 to-white bg-clip-text text-3xl font-bold text-transparent italic">
                    {idx + 1}
                  </p>
                  <div>
                    <p className="line-clamp-1 text-white">{movie.viName}</p>
                    <p className="line-clamp-1 text-gray-400">{movie.enName}</p>
                  </div>
                </div>
              </CarouselItem>
            </Link>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
