import type { Route } from "./+types/category";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RoPhim" },
    { name: "description", content: "Welcome to RoPhim!" },
  ];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  // const res = await fetch("https://api.example.com");
  // const movies = await res.json();
  // return movies;
  // return { movies: [] };
}

export default function Category({ params, loaderData }: Route.ComponentProps) {
  console.log(params.id);
  return <></>;
}
