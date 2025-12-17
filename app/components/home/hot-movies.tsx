import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface Movie {
  viName: string;
  engName: string;
  imdb: number;
  resolution: string;
  ageRestricted: string;
  publishedYear: string;
  time: string;
  thumbnail: string;
  id: number;
  description: string;
  categories: string[];
}

const HOT_MOVIES: Movie[] = [
  {
    viName: "Phi Vụ Thế Kỷ: Thoắt Ẩn Thoắt Hiện",
    engName: "Now You See Me 3: Now You Don't",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://static.nutscdn.com/vimg/1920-0/951859ef2ec65a3be41fa36f156365b4.webp",
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    viName: "Người máy biến hình: Sự Trỗi dậy của quái thú",
    engName: "Transformers: Rise of the Beasts",
    imdb: 6.2,
    resolution: "4K",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
    ],
  },
  {
    viName: "Phi Vụ Thế Kỷ: Thoắt Ẩn Thoắt Hiện",
    engName: "Now You See Me 3: Now You Don't",
    imdb: 6.2,
    resolution: "4K",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://static.nutscdn.com/vimg/1920-0/951859ef2ec65a3be41fa36f156365b4.webp",
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    viName: "Người máy biến hình: Sự Trỗi dậy của quái thú",
    engName: "Transformers: Rise of the Beasts",
    imdb: 6.2,
    resolution: "4K",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
    ],
  },
  {
    viName: "Người máy biến hình: Sự Trỗi dậy của quái thú",
    engName: "Transformers: Rise of the Beasts",
    imdb: 6.2,
    resolution: "4K",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
    ],
  },
];

export function HotMovies() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
      >
        <CarouselContent>
          {HOT_MOVIES.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="relative flex h-60 items-center justify-center bg-cover bg-center after:absolute after:inset-0 after:bg-black/40 lg:h-144 lg:justify-start"
              style={{ backgroundImage: `url(${movie.thumbnail})` }}
            >
              <Link
                to={`${movie.id}`}
                className="z-10 flex h-full w-full items-center justify-center lg:mt-48 lg:items-start lg:justify-start"
              >
                <div className="flex flex-col items-center gap-2 text-center lg:max-w-1/3 lg:items-start lg:pl-10 lg:text-left">
                  <p className="text-xl font-bold text-white">{movie.viName}</p>
                  <p className="text-yellow-300">{movie.engName}</p>
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
                      {movie.time}
                    </p>
                  </div>
                  <div className="hidden flex-wrap items-center gap-2 text-xs lg:flex">
                    {movie.categories.map((category, idx) => (
                      <p
                        key={idx}
                        className="rounded-md border border-white bg-white/10 p-2 text-white"
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                  <p className="line-clamp-3 hidden text-white lg:block">
                    {movie.description}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {HOT_MOVIES.map(({ thumbnail }, idx) => (
          <div
            key={idx}
            onClick={() => {
              setCurrent(idx + 1);
            }}
            className={cn(
              "h-10 w-10 cursor-pointer rounded-full border-3 border-gray-400 bg-cover bg-center transition-all hover:border-white",
              idx === current - 1 && "border-white",
            )}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
