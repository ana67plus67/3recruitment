import { contact, mailto } from "../data/content";
import { jobs, jobsNote } from "../data/jobs";

/** Compact rows only. Full briefs live on roles.html so this page stays short. */
export function Jobs() {
  return (
    <section id="roles" className="shell border-t border-rule py-20 md:py-28">
      <h2 className="headline m-0 max-w-[20ch] text-major leading-[1.06]">
        Roles we are filling now
      </h2>

      <ul className="m-0 mt-12 grid list-none gap-0 p-0">
        {jobs.map((job) => (
          <li
            key={job.slug}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule py-6 first:border-t"
          >
            <p className="m-0 text-[1.35rem] font-semibold tracking-tight">{job.title}</p>

            <p className="m-0 flex flex-wrap items-baseline gap-x-3 text-[0.95rem] text-mute">
              <span>{job.location}</span>
              <span aria-hidden="true">·</span>
              <span>{job.experience}</span>
              <span aria-hidden="true">·</span>
              <span>{job.seats === 1 ? "1 position" : `${job.seats} positions`}</span>
              <span aria-hidden="true">·</span>
              <a
                href={`roles.html#${job.slug}`}
                className="text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:decoration-flame"
              >
                Full brief
              </a>
            </p>
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
