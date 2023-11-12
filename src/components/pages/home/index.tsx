import { Client } from "./client";
import { Hero } from "./hero";
import { Remember } from "./remember";
import { Sale } from "./sale";
import { Talk } from "./talk";

export function HomePage() {
  return (
    <>
      <Hero />
      <Client />
      <Sale />
      <Talk />
      <Remember />
    </>
  )
}
