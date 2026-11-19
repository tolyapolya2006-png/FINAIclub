import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <span id="about" className="anchor-target" aria-hidden="true" />
        <span id="activities" className="anchor-target" aria-hidden="true" />
        <span id="community" className="anchor-target" aria-hidden="true" />
        <span id="partners" className="anchor-target" aria-hidden="true" />
      </main>
    </>
  );
}
