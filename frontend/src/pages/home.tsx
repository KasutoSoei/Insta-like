import type { Route } from "./+types/home";
import Register from "./auth/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ChihuaWow" },
    { name: "description", content: "Welcome to ChihuaWow!" },
  ];
}

export default function Home() {
  return <p>Home</p>;
}
