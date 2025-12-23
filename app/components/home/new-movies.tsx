import { cn } from "@/utils/cn";
import { type Movie } from "@/mocks/movies";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import MovieCard from "@/components/common/movie-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

function Title({
  className,
  children,
  to,
  titleColor,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  titleColor?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Link
        to={to}
        className={cn(
          "bg-linear-to-r via-white to-white bg-clip-text text-2xl font-extrabold text-transparent",
          titleColor,
        )}
      >
        {children}
      </Link>
      <ChevronRightIcon className="size-6 fill-white" />
    </div>
  );
}

export function NewMovies({
  title,
  to,
  titleColor,
  movies,
}: {
  title: string;
  to: string;
  titleColor?: string;
  movies: Movie[];
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
              <MovieCard key={movie.id} movie={movie} variant="vertical" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
