import { type Movie } from "@/mocks/movies";
import {
  CardThumbnail,
  MovieCard,
  MovieName,
  ThumbBadges,
} from "@/components/common/movie-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Title from "@/components/common/section-title";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/utils/cn";
import { useMemo } from "react";

export function MovieList({
  className,
  title,
  to,
  titleColor,
  movies,
  cardVariant = "vertical",
  autoScrollDirection = "backward",
}: {
  title: string;
  to: string;
  titleColor?: string;
  movies: Movie[];
  cardVariant?: "vertical" | "horizontal";
  autoScrollDirection?: "backward" | "forward";
  className?: string;
}) {
  const plugins = useMemo(
    () => [
      AutoScroll({
        direction: autoScrollDirection,
        stopOnInteraction: false,
        // stopOnMouseEnter: true,
        startDelay: 3000,
        playOnInit: true,
        speed: 0.5,
      }),
    ],
    [autoScrollDirection],
  );
  return (
    <section className={cn("space-y-2 lg:flex lg:gap-8", className)}>
      <Title to={to} titleColor={titleColor} className="flex-1">
        {title}
      </Title>
      <Carousel
        className="flex-6"
        opts={{ loop: true, align: "start" }}
        plugins={plugins}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              key={movie.id}
            >
              <MovieCard movie={movie}>
                <CardThumbnail
                  url={movie.thumbnail}
                  alt={movie.viName}
                  variant={cardVariant}
                >
                  <div className="thumb-overlay" />
                  <ThumbBadges
                    isSubbed={movie.isSubbed}
                    isDubbed={movie.isDubbed}
                  />
                </CardThumbnail>
                <MovieName className="lg:text-left">{movie.viName}</MovieName>
                <MovieName className="text-gray-400 lg:text-left">
                  {movie.enName}
                </MovieName>
              </MovieCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
