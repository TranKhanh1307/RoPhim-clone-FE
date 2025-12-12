import type { Route } from "./+types/home";

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
  return { movies: [] };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return (
    <>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
      <h1>Home Content</h1>
    </>
  );
}
