import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Riso Wagara Card" },
    { name: "description", content: "A Riso-style Japanese pattern card" },
  ];
}

export default function Home() {
  return (
    <main className="riso-container">
      <div className="pattern-box"></div>
      <div className="relative z-10 w-full">
        <Welcome />
      </div>
    </main>
  );
}
