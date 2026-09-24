import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Steps } from "./components/Steps";
import { Bar } from "./components/Bar";
import { Terms } from "./components/Terms";
import { Offers } from "./components/Offers";
import { Promises } from "./components/Promises";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Bar />
        <Terms />
        <Offers />
        <Promises />
      </main>
      <Footer />
    </>
  );
}
