import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Jobs } from "./components/Jobs";
import { Bar } from "./components/Bar";
import { Offers } from "./components/Offers";
import { Scope } from "./components/Scope";
import { Promises } from "./components/Promises";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Jobs />
        <Bar />
        <Offers />
        <Scope />
        <Promises />
      </main>
      <Footer />
    </>
  );
}
