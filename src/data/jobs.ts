/**
 * Live roles. Never list one we cannot submit to, and never invent a detail —
 * a wrong band or location misleads candidates and costs us the client. Remove
 * a role the day it is filled; a stale board is worse than a short one.
 *
 * Client requirements are attributed to the client, not stated as ours. We
 * represent a brief accurately without adopting it as our own standard, which
 * matters most for pedigree filters given what this business is for.
 */

export type Job = {
  slug: string;
  title: string;
  seats: number;
  location: string;
  experience: string;
  employer: string;
  summary: string;
  engagement?: string;
  responsibilities?: { label: string; detail: string }[];
  requirements?: string[];
  /** Set true where the brief is still incomplete, so the page says so. */
  partial?: boolean;
};

export const jobs: Job[] = [
  {
    slug: "sde2-ai",
    title: "SDE 2 — AI",
    seats: 2,
    location: "Bengaluru",
    experience: "4–8 years",
    employer: "A global capability centre in Bengaluru",
    summary:
      "An AI lab building the next generation of GenAI services. The work is first-principles problem solving on systems that carry real traffic, and it ships quickly enough that you see the impact.",
    engagement: "Open to full-time candidates and to freelancers.",
    responsibilities: [
      {
        label: "Model development",
        detail: "Selecting, fine-tuning and distilling large and small language models.",
      },
      {
        label: "Engineering",
        detail: "Efficient, concurrent Python for high-traffic systems.",
      },
      {
        label: "LLMOps",
        detail: "Building pipelines and implementing RLHF feedback loops.",
      },
    ],
    requirements: [
      "Expert-level Python, and scalable system design",
      "Four to eight years in software engineering, with at least two dedicated to the AI/ML lifecycle",
      "The client requires a B.Tech, M.Tech or PhD in Computer Science from a reputed institute, and states a preference for M.Tech or PhD graduates from an IIT",
    ],
  },
  {
    slug: "sde3",
    title: "SDE 3",
    seats: 1,
    location: "Bengaluru",
    experience: "8–10 years",
    employer: "A global capability centre in Bengaluru",
    summary:
      "A senior engineering role at the same Bengaluru capability centre, requiring deep Python expertise.",
    requirements: ["Eight to ten years in software engineering", "Deep Python expertise"],
    partial: true,
  },
];

export const jobsNote =
  "Compensation and the employer's name are shared when we send you the brief. We do not list a role we cannot submit to, and we remove it the day it is filled.";

export const partialNote =
  "We are still confirming the full brief for this role. Write to us and we will send it as soon as we have it, rather than guess at it here.";
