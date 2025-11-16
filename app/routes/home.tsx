import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Review List" },
    { name: "description", content: "Manage your review" },
  ];
}

export default function Home() {
  return <>HOME</>;
}
