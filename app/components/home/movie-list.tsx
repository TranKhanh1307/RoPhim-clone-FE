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
    <section className="items-center space-y-4 lg:flex">
      <Title to={to} titleColor={titleColor} className="lg:mr-6 lg:flex-1/5">
        {title}
      </Title>
      <Carousel
        className="overflow-hidden"
        opts={{ loop: true, align: "start" }}
        // plugins={[
        //   AutoScroll({
        //     direction: autoScrollDirection,
        //     stopOnInteraction: false,
        //     // stopOnMouseEnter: true,
        //     startDelay: 3000,
        //     playOnInit: true,
        //     speed: 0.5,
        //   }),
        // ]}
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
                  <div className="absolute inset-0 rounded-md transition-all duration-300 ease-in-out group-hover:bg-black/30 group-active:bg-black/30" />
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
