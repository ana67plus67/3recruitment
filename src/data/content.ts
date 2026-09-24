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

/**
 * Only valid while the business actually holds GST registration. If it does
 * not, replace with the registered entity type instead — the claim is
 * verifiable against the government portal and must not be aspirational.
 */
export const legal = "GST registered";

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
    note: undefined,
    action: "Send your resume",
    subject: "fresher" as const,
  },
  {
    line: `Rejected someone good? We pay you ${fee.referral} of their salary when we place them.`,
    // Paying an individual for their employer's candidates is a kickback, not a
    // referral. The entity is the counterparty, and it has to be invoiceable.
    note: "Paid to a registered company against an invoice, never to an individual.",
    action: "Refer a candidate",
    subject: "referral" as const,
  },
];

export const bar = {
  rule: "You reached the final round, and the offer went to someone else.",
  exclusion: "Recruiter screens, HR chats and scheduling calls do not count.",
};

/**
 * The boundary. Drawn precisely: an honest read on a specific hiring process is
 * recruitment and we do offer it, which is why the first sentence exists. Without
 * it, "no career counselling" would read as a refusal to give feedback at all.
 */
export const scope = {
  line: "Email only, and strictly recruitment.",
  body: "We will tell you honestly how a hiring process went and where you stand in it. We do not offer career counselling, life advice, motivational support or mentoring, and we cannot help with anything outside a genuine hiring process. We are professional, and we ask the same in return.",
};

/** The one commitment we make to the reader. */
export const promises = [
  "Everyone who writes to us gets a reply. It may take time, but hold on.",
];
