import { promises } from "../data/content";

export function Promises() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <ul className="m-0 grid max-w-[46ch] list-none gap-5 p-0">
        {promises.map((promise) => (
          <li key={promise} className="flex items-start gap-4 text-[1.15rem] leading-snug">
            <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-flame" />
            {promise}
          </li>
        ))}
      </ul>
    </section>
  );
}
