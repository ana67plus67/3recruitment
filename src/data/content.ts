/**
 * The whole site's copy. Keep it this short.
 *
 * Budget: one sentence per idea, and no sentence explaining a previous one.
 * If something needs a paragraph, it belongs in an email reply, not here.
 * Nothing may claim a result we have not produced.
 */

/** Fee figures shown on the page. */
export const fee = {
  referral: "5%",
};

export const contact = {
  inbox: "support@3recruitment.com",
  candidate: "Rejected at the final round — my profile",
  fresher: "Fresh out of college — my resume",
  referral: "We rejected someone good",
  hiring: "A role I need to fill",
};

export const mailto = (subject: string) =>
  `mailto:${contact.inbox}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  headline: "Rejected at the final round?",
  line: "Send us your profile. We will find you the right opportunity.",
  action: "Share your profile",
};

export const offers = [
  {
    line: "Fresh out of college? Send your resume. We keep it and come back when an internship fits.",
    action: "Send your resume",
    subject: "fresher" as const,
  },
  {
    line: `Rejected someone good? We pay you ${fee.referral} of their salary when we place them.`,
    action: "Refer a candidate",
    subject: "referral" as const,
  },
];

export const bar = {
  rule: "Five rounds or more, and you reached the decision.",
  exclusion: "Recruiter screens, HR chats and scheduling calls do not count.",
};

/** The one commitment we make to the reader. */
export const promises = [
  "Everyone who writes to us gets a reply. It may take time, but hold on.",
];
