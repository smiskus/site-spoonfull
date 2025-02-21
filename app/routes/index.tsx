import type { Route } from ".react-router/types/app/+types/root";
import { HomePage } from "src/components/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull" },
    { name: "description", content: "A website to keep track of all of your favorite restaurants" },
  ];
}

export default function Home() {
  return <HomePage />;
}
