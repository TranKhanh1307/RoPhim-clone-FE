import { type Movie } from "@/mocks/movies";
import {
  CardThumbnail,
  MovieCard,
  MovieName,
} from "@/components/common/movie-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Title from "@/components/common/section-title";

export function UpcomingMovies({
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
            <CarouselItem
              className="basis-1/2 lg:basis-1/3 xl:basis-1/6"
              key={movie.id}
            >
              <MovieCard movie={movie}>
                <CardThumbnail
                  url={movie.thumbnail}
                  alt={movie.viName}
                  variant={cardVariant}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-md bg-white p-2 text-xs font-bold">
                    Sắp chiếu
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
