import { Client } from "./client";
import { Form } from "./form";
import { Hero } from "./hero";
import { Integrations } from "./integrations";
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
      <Integrations />
      <Form />
    </>
  )
}
