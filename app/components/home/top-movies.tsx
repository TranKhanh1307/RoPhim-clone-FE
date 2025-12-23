import { Link } from "react-router";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/utils/cn";
import type { Movie } from "@/mocks/movies";

export default function TopMovies({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  return (
    <section>
      <p className="mb-4 text-2xl font-bold text-white">{title}</p>
      <Carousel>
        <CarouselContent>
          {movies.map((movie, idx) => (
            <CarouselItem className="basis-85" key={movie.id}>
              <Link key={movie.id} to={`/movie/${movie.id}`}>
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
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
