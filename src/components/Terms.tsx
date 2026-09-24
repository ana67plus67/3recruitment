import { terms } from "../data/content";

export function Terms() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <dl className="m-0 grid gap-12 md:grid-cols-2 md:gap-16">
        {terms.map((term) => (
          <div key={term.figure}>
            <dt className="headline m-0 text-[3.4rem] leading-none">{term.figure}</dt>
            <dd className="m-0 mt-4 max-w-[22ch] text-[1rem] leading-snug text-mute">
              {term.note}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
