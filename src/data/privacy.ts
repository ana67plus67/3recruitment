/**
 * Notice under the Digital Personal Data Protection Act, 2023.
 *
 * Written to be accurate about what we actually do — in particular that we
 * disclose candidate data to prospective employers, which is the service
 * itself and must not be buried. Have it reviewed by an Indian data
 * protection lawyer before relying on it.
 */

export const updated = "24 September 2026";

export type Clause = { heading: string; paragraphs: string[]; list?: string[] };

export const clauses: Clause[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "3Recruitment is the Data Fiduciary responsible for the personal data described in this notice. Every question, request or complaint about your data reaches us at support@3recruitment.com, and that address is also how you contact the person responsible for handling grievances.",
    ],
  },
  {
    heading: "What we hold",
    paragraphs: ["We hold only what you send us, together with notes we make ourselves:"],
    list: [
      "Your name and contact details",
      "Your resume, employment history and qualifications",
      "Your account of a hiring process, and correspondence you forward to evidence it — interview invitations, scheduling threads, the notification you received",
      "The name and contact details of one recruiter or HR contact, where you give them to us and ask us to approach that person",
      "Our own notes from assessing your work",
      "For an organisation referring candidates, the business contact details of the person we correspond with",
    ],
  },
  {
    heading: "Why we hold it",
    paragraphs: [
      "To assess whether we can represent you, to verify the hiring process you describe, and to introduce you to organisations recruiting at a comparable standard. We do not use your data for any other purpose, and we do not use it to train automated decision-making systems.",
    ],
  },
  {
    heading: "Your consent",
    paragraphs: [
      "We process your data on the basis of the consent you give when you write to us. That consent is specific to the purposes above.",
      "You may withdraw it at any time by replying to any email from us. Withdrawal is as easy as giving consent, and we act on it without asking you to justify the decision. Where we have already made an introduction, we cannot unmake it, but we will make no further disclosure after you withdraw.",
    ],
  },
  {
    heading: "Who we disclose it to",
    paragraphs: [
      "Introducing you to an employer means disclosing your data to them. This is the service, so we are explicit about it: we disclose only to organisations you have approved, and only after you have approved that specific introduction.",
      "Where you ask us to verify a hiring process, we contact the single recruiter or HR contact you nominate. We ask that person one question and disclose nothing about you beyond what answering it requires. We contact nobody else at that organisation, and we contact nobody at all without your instruction on each occasion.",
      "Any reply we receive stays with us. It is not forwarded to you and it is not quoted to a prospective employer.",
      "You may name organisations we must never approach, and we will not.",
      "We do not sell your data, we do not licence it, and we do not share it with any party for advertising or analytics.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "Until you ask us to delete it, or until twenty-four months have passed with no contact between us, whichever comes first. At that point we erase it, other than a minimal record of the fact that we corresponded, which we keep only where law requires it.",
      "Notes from a verification are erased once the verification has been recorded.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Under the Digital Personal Data Protection Act, 2023 you have the right to:",
    ],
    list: [
      "Ask what personal data we hold about you and what we have done with it",
      "Have inaccurate or incomplete data corrected, completed or updated",
      "Have your data erased",
      "Withdraw your consent at any time",
      "Nominate another person to exercise these rights on your behalf if you are unable to",
      "Have a grievance addressed by us",
    ],
  },
  {
    heading: "How to exercise them",
    paragraphs: [
      "Email support@3recruitment.com. We will respond, and we do not require you to explain why you are asking.",
      "If you are not satisfied with how we handle a grievance, you may complain to the Data Protection Board of India. Using our process first is not a precondition, though we would rather resolve it ourselves.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "We do not knowingly process the personal data of anyone under eighteen. If you are under eighteen, please do not send us your data. Where we learn that we hold such data without verifiable consent from a parent or guardian, we erase it.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We keep your data on access-controlled systems, limit access to the people who need it to do the work described here, and hold no more than we need. If a breach affects your data we will notify you and the Data Protection Board as the Act requires.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "If this notice changes we will post the revised version here with a new date. Where a change materially affects how we use data you have already given us, we will tell you directly and ask for consent again.",
    ],
  },
];
