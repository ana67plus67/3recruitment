/**
 * Live roles. Never list a role we cannot actually submit to, and never invent
 * a detail — a wrong location or salary misleads candidates and costs us the
 * client. Where a field is not confirmed, say the brief is sent on request.
 *
 * Remove a role the day it is filled. A stale board is worse than a short one.
 */

export type Job = {
  title: string;
  seats: number;
  /** Confirmed facts only. Leave undefined rather than guessing. */
  detail?: string;
  location?: string;
};

export const jobs: Job[] = [
  {
    title: "SDE 3",
    seats: 1,
  },
  {
    title: "SDE 2 — AI / ML Engineer",
    seats: 2,
  },
];

export const jobsNote =
  "Full brief, compensation and company details sent on request. We do not list a role we cannot submit to, and we remove it the day it is filled.";
