import { steps } from "../data/content";

export function Steps() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <ol className="m-0 grid list-none gap-12 p-0 md:grid-cols-3 md:gap-8">
        {steps.map((step) => (
          <li key={step} className="max-w-[22ch] text-[1.3rem] leading-snug tracking-tight">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
