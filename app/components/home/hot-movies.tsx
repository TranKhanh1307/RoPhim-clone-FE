import { Link } from "react-router";

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
  },
];

export function HotMovies() {
  return (
    <div>
      {HOT_MOVIES.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
}

function MovieItem({ movie }: { movie: Movie }) {
  return (
    <Link className="relative block h-60" to={`${movie.id}`}>
      <div
        className="flex h-full items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movie.thumbnail})` }}
      >
        <div className="z-10">
          <p className="text-white">{movie.viName}</p>
          <p className="text-yellow-500">{movie.engName}</p>
          <div className=""></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/25"></div>
    </Link>
  );
}
