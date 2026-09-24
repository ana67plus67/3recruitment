import { promises } from "../data/content";

export function Promises() {
  return (
    <section className="shell border-t border-rule py-16 md:py-20">
      {promises.map((promise) => (
        <p
          key={promise}
          className="m-0 flex max-w-[42ch] items-start gap-4 text-[1.1rem] leading-relaxed"
        >
          <span aria-hidden="true" className="mt-[0.8em] h-px w-6 shrink-0 grad-bar" />
          {promise}
        </p>
      ))}
    </section>
  );
}
