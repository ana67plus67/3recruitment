import { contact, mailto } from "../data/content";
import { jobs, jobsNote } from "../data/jobs";

export function Jobs() {
  return (
    <section id="roles" className="shell border-t border-rule py-20 md:py-28">
      <h2 className="headline m-0 max-w-[20ch] text-major leading-[1.06]">
        Roles we are filling now
      </h2>

      <ul className="m-0 mt-12 grid list-none gap-0 p-0">
        {jobs.map((job) => (
          <li
            key={job.title}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-rule py-6 first:border-t"
          >
            <div className="min-w-0">
              <p className="m-0 text-[1.35rem] font-semibold tracking-tight">{job.title}</p>
              {job.detail && (
                <p className="m-0 mt-1.5 max-w-[46ch] text-[1rem] leading-snug text-mute">
                  {job.detail}
                </p>
              )}
            </div>

            <div className="flex items-baseline gap-6">
              <p className="m-0 text-[0.95rem] text-mute">
                {job.location ? `${job.location} · ` : ""}
                {job.seats === 1 ? "1 position" : `${job.seats} positions`}
              </p>
              <a
                href={mailto(`${job.title} — application`)}
                className="text-[1rem] underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:decoration-flame"
              >
                Apply
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="m-0 mt-8 max-w-[52ch] text-[1.02rem] leading-relaxed text-mute">{jobsNote}</p>

      <a
        href={mailto(contact.hiring)}
        className="mt-8 inline-block rounded-full border border-rule px-7 py-3.5 text-[1rem] text-ink transition-colors duration-200 hover:border-ink"
      >
        I'm hiring for a role
      </a>
    </section>
  );
}
