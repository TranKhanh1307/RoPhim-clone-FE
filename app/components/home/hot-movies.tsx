import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/utils/cn";
import { formatTime } from "@/utils/format";
import {
  HeartIcon,
  InformationCircleIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { MOVIES } from "@/mocks/movies";
import Fade from "embla-carousel-fade";

const HOT_MOVIES_LIMIT = 5;
const hotMovies = MOVIES.slice(0, HOT_MOVIES_LIMIT);

function CarouselIndicators({
  thumbnails,
  scrollTo,
  current,
}: {
  thumbnails: string[];
  scrollTo: (idx: number) => void;
  current: number;
}) {
  return (
    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
      {thumbnails.map((thumbnail, idx) => (
        <div
          key={idx}
          onClick={() => scrollTo(idx)}
          className={cn(
            "h-10 w-10 cursor-pointer rounded-full border-4 border-gray-400 bg-cover bg-center transition-colors duration-300 ease-in-out hover:border-yellow-500 lg:h-14 lg:w-20 lg:rounded-md",
            idx === current && "border-yellow-500",
          )}
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      ))}
    </div>
  );
}

export function HotMovies() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
        Fade(),
      ]}
    >
      <CarouselContent>
        {hotMovies.map((movie, idx) => (
          <CarouselItem key={idx} className="pl-0">
            <Link
              to={`${movie.id}`}
              className="relative flex h-60 items-center justify-center after:absolute after:inset-0 after:bg-black/40 lg:h-144 lg:justify-start"
            >
              <img
                className="absolute -z-10 w-full object-cover object-center"
                src={movie.thumbnail}
                alt={movie.viName}
                width={350}
                height={500}
                loading="lazy"
              />
              <div
                className={cn(
                  "z-10 flex -translate-x-10 flex-col items-center gap-2 text-center opacity-0 transition-all duration-300 ease-in-out lg:max-w-1/3 lg:-translate-y-16 lg:items-start lg:pl-10 lg:text-left",
                  current === idx && "translate-x-0 opacity-100",
                )}
              >
                <p className="text-xl font-bold text-white">{movie.viName}</p>
                <p className="text-yellow-300">{movie.enName}</p>
                <div className="flex items-center gap-2 text-xs">
                  <p className="rounded-md border border-yellow-300 p-2 text-white before:mr-1 before:text-yellow-300 before:content-['IMDB']">
                    {movie.imdb}
                  </p>
                  <p className="rounded-md bg-linear-to-r from-white to-yellow-400 p-2 font-bold">
                    {movie.resolution}
                  </p>
                  <p className="rounded-md bg-white p-2 font-bold">
                    {movie.ageRestricted}
                  </p>
                  <p className="rounded-md border border-white bg-white/10 p-2 text-white">
                    {movie.publishedYear}
                  </p>
                  <p className="rounded-md border border-white bg-white/10 p-2 text-white">
                    {formatTime(movie.time)}
                  </p>
                </div>
                <div className="hidden flex-wrap items-center gap-2 text-xs lg:flex">
                  {movie.categories.map((category, idx) => (
                    <p
                      key={idx}
                      className="tag"
                    >
                      {category}
                    </p>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <p className="line-clamp-3 text-white">{movie.description}</p>
                </div>
              </div>
              <div className="absolute bottom-24 left-14 z-10 hidden items-center gap-12 lg:flex">
                <div className="rounded-full bg-linear-to-r from-white to-yellow-400 p-4 shadow-lg/50 shadow-yellow-400 transition-all hover:text-white">
                  <span className="relative flex size-10">
                    <PlayIcon />
                    <span className="absolute top-1/2 left-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-yellow-200 opacity-75"></span>
                  </span>
                </div>
                <div className="flex rounded-full border-2 border-gray-200/25">
                  <div className="group relative rounded-l-full border-r border-gray-200/25 px-4 py-3">
                    <HeartIcon className="size-8 fill-white" />
                    <div className="absolute top-0 left-0 -z-10 origin-right scale-x-0 rounded-l-full bg-red-400 transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full group-hover:scale-x-100"></div>
                  </div>
                  <div className="group relative rounded-r-full border-l border-gray-200/25 px-4 py-3">
                    <InformationCircleIcon className="size-8 fill-white" />
                    <div className="absolute top-0 left-0 -z-10 origin-left scale-x-0 rounded-r-full bg-red-400 transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full group-hover:scale-x-100"></div>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselIndicators
        thumbnails={hotMovies.map((movie) => movie.thumbnail)}
        scrollTo={(idx) => {
          api?.scrollTo(idx);
        }}
        current={current}
      />
    </Carousel>
  );
}
