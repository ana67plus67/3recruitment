import { clauses, updated } from "../data/privacy";
import { Wordmark } from "./Wordmark";

export function Privacy() {
  return (
    <>
      <header
        className="sticky z-50 bg-paper/90 backdrop-blur-md"
        style={{ top: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="shell flex h-20 items-center justify-between">
          <Wordmark />
          <a
            href="./"
            className="text-[0.95rem] text-mute underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-flame"
          >
            Back
          </a>
        </div>
      </header>

      <main className="shell pb-24 pt-8 md:pt-12">
        <h1 className="headline m-0 max-w-[20ch] text-major leading-[1.06]">
          How we handle your data
        </h1>
        <p className="m-0 mt-6 max-w-[58ch] text-[1.1rem] leading-relaxed text-mute">
          This is our notice under the Digital Personal Data Protection Act, 2023. Last
          updated {updated}.
        </p>

        <div className="mt-16 grid gap-12 md:max-w-[68ch]">
          {clauses.map((clause) => (
            <section key={clause.heading}>
              <h2 className="m-0 text-[1.25rem] font-semibold tracking-tight">
                {clause.heading}
              </h2>

              {clause.paragraphs.map((text) => (
                <p key={text} className="m-0 mt-4 text-[1.05rem] leading-relaxed">
                  {text}
                </p>
              ))}

              {clause.list && (
                <ul className="m-0 mt-5 grid list-none gap-3 p-0">
                  {clause.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[1.05rem] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.72em] h-px w-5 shrink-0 bg-flame"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
