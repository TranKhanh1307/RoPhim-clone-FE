import { type Movie } from "@/mocks/movies";
import {
  CardThumbnail,
  MovieCard,
  MovieName,
} from "@/components/common/movie-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Title from "@/components/common/section-title";

export function MovieList({
  title,
  to,
  titleColor,
  movies,
  cardVariant = "vertical",
}: {
  title: string;
  to: string;
  titleColor?: string;
  movies: Movie[];
  cardVariant?: "vertical" | "horizontal";
}) {
  return (
    <section className="space-y-4">
      <Title to={to} titleColor={titleColor}>
        {title}
      </Title>
      <Carousel>
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem className="basis-60" key={movie.id}>
              <MovieCard movie={movie}>
                <CardThumbnail
                  url={movie.thumbnail}
                  alt={movie.viName}
                  variant={cardVariant}
                >
                  <div className="absolute bottom-2 left-2 space-y-1 text-xs text-white">
                    {movie.isSubbed && (
                      <p className="w-fit rounded-full bg-gray-400 px-2 py-0.5">
                        P.Đề
                      </p>
                    )}
                    {movie.isDubbed && (
                      <p className="w-fit rounded-full bg-green-600 px-2 py-0.5">
                        T.Minh
                      </p>
                    )}
                  </div>
                </CardThumbnail>
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
