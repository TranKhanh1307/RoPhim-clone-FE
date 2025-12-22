import type { Movie } from "@/mocks/movies";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div key={movie.id} className="shrink-0 basis-52 space-y-2">
      <img
        src={movie.thumbnail}
        alt={movie.viName}
        className="h-32 w-full rounded-md object-cover object-center"
        // width={}
        // height={}
      />
      <p className="line-clamp-1 text-center font-bold text-white">
        {movie.viName}
      </p>
      <p className="line-clamp-1 text-center font-bold text-gray-400">
        {movie.enName}
      </p>
    </div>
  );
}

export default MovieCard;
