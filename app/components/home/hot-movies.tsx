import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    resolution: "4K",
    ageRestricted: "T16",
    publishedYear: "2025",
    time: "1h 52m",
    thumbnail:
      "https://static.nutscdn.com/vimg/1920-0/951859ef2ec65a3be41fa36f156365b4.webp",
    id: 1,
    description: "Sau nhiều năm vắng bóng, Now You See Me 3 ra mắt",
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
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    id: 2,
    description: "Sau nhiều năm vắng bóng, Now You See Me 3 ra mắt",
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
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {HOT_MOVIES.map((movie) => (
            <CarouselItem key={movie.id} className="h-60 pl-0 lg:h-144">
              <Link
                className="relative flex h-full items-center justify-center bg-cover bg-center lg:justify-start"
                style={{ backgroundImage: `url(${movie.thumbnail})` }}
                to={`${movie.id}`}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="z-10 flex flex-col items-center gap-2 lg:ml-16 lg:items-start">
                  <p className="text-xl font-bold text-white">{movie.viName}</p>
                  <p className="text-yellow-200">{movie.engName}</p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-md border border-yellow-300 p-2 text-xs">
                      <span className="mr-1 text-yellow-300">IMDB</span>
                      <span className="text-white">{movie.imdb}</span>
                    </div>
                    <div className="rounded-md bg-linear-to-r from-white to-yellow-400 p-2 text-xs font-bold">
                      {movie.resolution}
                    </div>
                    <div className="rounded-md bg-white p-2 text-xs font-bold">
                      {movie.ageRestricted}
                    </div>
                    <div className="rounded-md border border-white p-2 text-xs text-white">
                      {movie.publishedYear}
                    </div>
                    <div className="rounded-md border border-white p-2 text-xs text-white">
                      {movie.time}
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:gap-2">
                    {movie.categories.map((category) => (
                      <div
                        key={category}
                        className="rounded-md border border-white bg-white/10 p-2 text-xs text-white"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {HOT_MOVIES.map(({ thumbnail }, idx) => (
          <CarouselIndicator
            key={idx}
            thumbnail={thumbnail}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselIndicator({
  thumbnail,
  onClick,
}: {
  thumbnail: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="h-10 w-10 cursor-pointer rounded-full border-3 border-gray-400 bg-cover bg-center transition-all hover:border-white"
      style={{ backgroundImage: `url(${thumbnail})` }}
    ></div>
  );
}
