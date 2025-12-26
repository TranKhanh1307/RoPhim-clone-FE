import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";
import type { Movie } from "@/mocks/movies";
import {
  CardThumbnail,
  MovieCard,
  MovieName,
  ThumbBadges,
} from "@/components/common/movie-card";

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
            <CarouselItem
              className="basis-full sm:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              key={movie.id}
            >
              <MovieCard movie={movie}>
                <div
                  className={cn(
                    "bg-yellow-200",
                    idx % 2 === 0 ? "clip-right" : "clip-left",
                  )}
                >
                  <CardThumbnail
                    className={cn(idx % 2 === 0 ? "clip-right" : "clip-left")}
                    url={movie.thumbnail}
                    alt={movie.viName}
                  >
                    <div className="absolute inset-0 rounded-md transition-all duration-300 ease-in-out group-hover:bg-yellow-200/30 group-active:bg-yellow-200/30" />
                    <ThumbBadges
                      isSubbed={movie.isSubbed}
                      isDubbed={movie.isDubbed}
                    />
                  </CardThumbnail>
                </div>
                <div className="mt-3 flex w-5/6 gap-4">
                  <p className="bg-linear-to-t from-yellow-400 to-white bg-clip-text text-4xl font-bold text-transparent italic">
                    {idx + 1}
                  </p>
                  <div>
                    <MovieName className="text-left text-base">
                      {movie.viName}
                    </MovieName>
                    <MovieName className="text-left text-base text-gray-400">
                      {movie.enName}
                    </MovieName>
                  </div>
                </div>
              </MovieCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
