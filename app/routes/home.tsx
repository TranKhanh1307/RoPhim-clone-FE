import { HotMovies } from "@/components/home/hot-movies";
import type { Route } from "./+types/home";
import Topics from "@/components/home/topics";
import WatchedMovies from "@/components/home/wactched-movies";
import { NewMovies } from "@/components/home/new-movies";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RoPhim" },
    { name: "description", content: "Welcome to RoPhim!" },
  ];
}

export async function clientLoader() {
  // const res = await fetch("https://api.example.com");
  // const movies = await res.json();
  // return movies;
  // return { movies: [] };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <HotMovies />
      <Topics />
      <WatchedMovies />
      <NewMovies />
    </>
  );
}
