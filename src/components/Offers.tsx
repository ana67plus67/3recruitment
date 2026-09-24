import { contact, mailto, offers } from "../data/content";

export function Offers() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        {offers.map((offer) => (
          <div key={offer.action} className="flex flex-col items-start">
            <p className="headline m-0 max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              {offer.line}
            </p>
            <a
              href={mailto(contact[offer.subject])}
              className="mt-7 inline-block rounded-full border border-rule px-7 py-3.5 text-[1rem] text-ink transition-colors duration-200 hover:border-ink"
            >
              {offer.action}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
