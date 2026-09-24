import { contact, hero, mailto } from "../data/content";

export function Hero() {
  return (
    <section id="top" className="shell pb-24 pt-10 md:pb-36 md:pt-16">
      <h1 className="headline rise m-0 max-w-[14ch] text-mega">{hero.headline}</h1>

      <p className="rise m-0 mt-10 max-w-[28ch] text-[1.3rem] leading-snug text-mute [animation-delay:120ms] md:text-[1.6rem]">
        {hero.line}
      </p>

      <div className="rise mt-12 [animation-delay:200ms]">
        <a
          href={mailto(contact.candidate)}
          className="inline-block rounded-full bg-ink px-7 py-3.5 text-[1rem] text-paper transition-opacity duration-200 hover:opacity-80"
        >
          {hero.action}
        </a>
      </div>
    </section>
  );
}
