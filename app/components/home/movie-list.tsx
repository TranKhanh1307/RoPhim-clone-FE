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
  type CarouselApi,
} from "@/components/ui/carousel";
import Title from "@/components/common/section-title";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";

export function MovieList({
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
}) {
  return (
    <section className="space-y-4">
      <Title to={to} titleColor={titleColor}>
        {title}
      </Title>
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[
          AutoScroll({
            direction: autoScrollDirection,
            stopOnInteraction: false,
            // stopOnMouseEnter: true,
            startDelay: 3000,
            playOnInit: true,
            speed: 0.5,
          }),
        ]}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem className="basis-60" key={movie.id}>
              <MovieCard movie={movie}>
                <CardThumbnail
                  url={movie.thumbnail}
                  alt={movie.viName}
                  variant={cardVariant}
                >
                  <ThumbBadges
                    isSubbed={movie.isSubbed}
                    isDubbed={movie.isDubbed}
                  />
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
