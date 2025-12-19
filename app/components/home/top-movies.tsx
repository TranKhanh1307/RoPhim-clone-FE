import { Link } from "react-router";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { MOVIES } from "@/mocks/movies";

export default function TopMovies() {
  return (
    <section>
      <Carousel>
        <CarouselContent>
          {MOVIES.map((movie) => (
            <Link
              key={movie.id}
              to=""
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <CarouselItem className="h-96">
                {/* Container có viền */}
                <div className="h-full rounded-2xl p-1">
                  {/* Ảnh bị khuyết góc */}
                  <div
                    className="clip-carousel-item h-full rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${movie.thumbnail})` }}
                  />
                </div>
              </CarouselItem>
            </Link>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
