import { contact, mailto, offers } from "../data/content";

export function Offers() {
  return (
    <>
      {offers.map((offer) => (
        <section key={offer.action} className="shell border-t border-rule py-20 md:py-28">
          <p className="headline m-0 max-w-[26ch] text-major leading-[1.06]">{offer.line}</p>
          <a
            href={mailto(contact[offer.subject])}
            className="mt-8 inline-block rounded-full border border-rule px-7 py-3.5 text-[1rem] text-ink transition-colors duration-200 hover:border-ink"
          >
            {offer.action}
          </a>
        </section>
      ))}
    </>
  );
}
