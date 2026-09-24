import { scope } from "../data/content";

export function Scope() {
  return (
    <section className="shell border-t border-rule py-20 md:py-28">
      <p className="headline m-0 max-w-[24ch] text-major leading-[1.06]">{scope.line}</p>
      <p className="m-0 mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed text-mute">
        {scope.body}
      </p>
    </section>
  );
}
