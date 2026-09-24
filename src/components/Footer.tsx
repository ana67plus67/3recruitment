import { contact, legal } from "../data/content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer
      className="shell flex flex-wrap items-center justify-between gap-6 border-t border-rule py-12"
      style={{ paddingBottom: "calc(3rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <Wordmark />
      <a
        href={`mailto:${contact.inbox}`}
        className="text-[1.05rem] underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:decoration-flame"
      >
        {contact.inbox}
      </a>
      <p className="m-0 text-[0.9rem] text-mute">{legal} · © 2026</p>
    </footer>
  );
}
