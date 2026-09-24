# 3recruitment.com

Marketing site for 3Recruitment. React 19 + TypeScript + Vite, styled with Tailwind v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/data/content.ts` | Every string on the site, plus the fee figures |
| `src/index.css` | Design tokens and the single accent colour |
| `src/components/` | One component per section, composed in `src/App.tsx` |

All copy lives in `content.ts`. Edit there rather than in components.

## Design

White, black, and one orange (`#FF4F0F`) used three times: the 3 in the wordmark, the
dashes beside the promises, and focus rings. Scale and whitespace carry the design. One
typeface, Instrument Sans. `color-scheme: light` is set explicitly — there is no dark
variant by design.

**The copy budget is part of the design.** The whole site is under a hundred words. One
sentence per idea, and no sentence that explains a previous one. An earlier version had
three paragraphs per section and read like a newspaper; if something now needs a paragraph,
it belongs in a reply to an email, not on the page. Adding an FAQ here would undo the
redesign.

## Editing rules

**No claim we cannot evidence.** No placement counts, retention rates or testimonials —
there are none yet, and the site says so. When real numbers exist, add them with the period
they cover and the sample size.

**The admission bar is exact.** Reaching the final round, with recruiter screens, HR chats
and scheduling calls excluded. The exclusion is what stops "final round" meaning a chat
with HR, so it carries the whole rule — do not drop it.

**`promises[0]` is a commitment, not copy.** It promises everyone a reply, worded to buy
time on purpose. Do not tighten it into a stated turnaround, and do not delete it.

**There is no privacy notice yet.** The site invites people to email resumes and interview
histories, so one is needed — a short page, linked from the footer, saying what is held,
for how long, and how to have it deleted.

**Referral payment goes to a registered company, against an invoice.** Never to an
individual. Paying a person for candidates out of their employer's pipeline is a kickback
rather than a referral: it puts them in breach with their employer and exposes us. The
condition is stated on the page and must stay there.

**`legal` in `content.ts` is a verifiable claim.** "GST registered" is checkable against
the government portal in seconds, so it is valid only while registration is actually held.
If it is not, replace it with the registered entity type — "a registered private limited
company in India" — which establishes the same thing without asserting a tax status.

## Intake

Every call to action is a `mailto:` to `support@3recruitment.com`. The audiences are
separated by subject line, set in `contact` — triage by subject rather than adding
addresses that do not exist.

A web intake form with storage behind it is the next planned change. Deliberately not
shipped yet: a form that silently discards submissions is worse than no form.

## Deploying

Static build, no server. On Vercel: framework preset Vite, build `npm run build`, output
`dist`.
