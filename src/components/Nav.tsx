import { contact, mailto } from "../data/content";
import { Wordmark } from "./Wordmark";

export function Nav() {
  return (
    <header
      className="sticky z-50 bg-paper/90 backdrop-blur-md"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Wordmark />
        <a
          href={mailto(contact.hiring)}
          className="text-[0.95rem] text-mute underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-flame"
        >
          I'm hiring
        </a>
      </div>
    </header>
  );
}
