import { mailto } from "../data/content";
import { jobs, jobsNote, partialNote } from "../data/jobs";
import { Wordmark } from "./Wordmark";

export function Roles() {
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
        <h1 className="headline m-0 max-w-[18ch] text-major leading-[1.06]">
          Roles we are filling now
        </h1>
        <p className="m-0 mt-6 max-w-[56ch] text-[1.1rem] leading-relaxed text-mute">{jobsNote}</p>

        <div className="mt-16 grid gap-20 md:max-w-[68ch]">
          {jobs.map((job) => (
            <article key={job.slug} id={job.slug} className="scroll-mt-28">
              <h2 className="headline m-0 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.06]">
                {job.title}
              </h2>

              <p className="m-0 mt-4 flex flex-wrap items-baseline gap-x-3 text-[0.98rem] text-mute">
                <span>{job.employer}</span>
                <span aria-hidden="true">·</span>
                <span>{job.location}</span>
                <span aria-hidden="true">·</span>
                <span>{job.experience}</span>
                <span aria-hidden="true">·</span>
                <span>{job.seats === 1 ? "1 position" : `${job.seats} positions`}</span>
              </p>

              <p className="m-0 mt-6 text-[1.08rem] leading-relaxed">{job.summary}</p>

              {job.engagement && (
                <p className="m-0 mt-4 text-[1.05rem] leading-relaxed text-mute">
                  {job.engagement}
                </p>
              )}

              {job.responsibilities && (
                <>
                  <h3 className="mb-0 mt-9 text-[1.1rem] font-semibold tracking-tight">
                    The work
                  </h3>
                  <ul className="m-0 mt-4 grid list-none gap-4 p-0">
                    {job.responsibilities.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-[0.72em] h-px w-5 shrink-0 bg-flame"
                        />
                        <span className="text-[1.05rem] leading-relaxed">
                          <strong className="font-semibold">{item.label}.</strong> {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {job.requirements && (
                <>
                  <h3 className="mb-0 mt-9 text-[1.1rem] font-semibold tracking-tight">
                    What the client is looking for
                  </h3>
                  <ul className="m-0 mt-4 grid list-none gap-4 p-0">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-[0.72em] h-px w-5 shrink-0 bg-flame"
                        />
                        <span className="text-[1.05rem] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {job.partial && (
                <p className="m-0 mt-7 max-w-[52ch] border-l-2 border-rule pl-5 text-[1rem] leading-relaxed text-mute">
                  {partialNote}
                </p>
              )}

              <a
                href={mailto(`${job.title} — application`)}
                className="mt-9 inline-block rounded-full bg-ink px-7 py-3.5 text-[1rem] text-paper transition-opacity duration-200 hover:opacity-80"
              >
                Apply for {job.title}
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
