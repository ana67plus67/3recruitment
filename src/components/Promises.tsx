import { promises } from "../data/content";

export function Promises() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      {promises.map((promise) => (
        <p key={promise} className="headline m-0 flex max-w-[30ch] items-start gap-5 text-major leading-[1.06]">
          <span aria-hidden="true" className="mt-[0.62em] h-px w-8 shrink-0 bg-flame" />
          {promise}
        </p>
      ))}
    </section>
  );
}
