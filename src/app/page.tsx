import Cars from "@/components/Cars";
import { Hello } from "@/components/TypeScript";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>My First Typescript App</h1>
      <Hello name="World" age={23} />

      <Cars name="json" car="Audi A4" workshop={["Spanner", "shed"]} />
    </main>
  );
}
