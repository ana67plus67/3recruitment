import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Bar } from "./components/Bar";
import { Offers } from "./components/Offers";
import { Promises } from "./components/Promises";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bar />
        <Offers />
        <Promises />
      </main>
      <Footer />
    </>
  );
}
