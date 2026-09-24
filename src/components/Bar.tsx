import { bar } from "../data/content";

export function Bar() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <p className="headline m-0 max-w-[24ch] text-major">{bar.rule}</p>
      <p className="m-0 mt-6 max-w-[34ch] text-[1.05rem] leading-snug text-mute">
        {bar.exclusion}
      </p>
    </section>
  );
}
