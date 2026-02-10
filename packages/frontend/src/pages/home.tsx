import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ChihuaWow" },
    { name: "description", content: "Welcome to ChihuaWow!" },
  ];
}

export default function Home() {
  return <p> hello there </p>// <Welcome />;
}