# Graceland eCommerce

> Draft case study copy. Written from an interview transcript, not invented.
> `TODO` marks anything still needing your input, a fact check, or a decision.

---

## 1. Hero

**Role:** Software Lead (freelance) — architecture, backend, and most of the
build; directed one other developer's contribution.

**Timeline:**
- v1 — shipped Dec 2024 (MVP: browse, cart, checkout, order management)
- v2 — shipped Nov 2025 (customer accounts, order dashboard, more email
  notifications, SEO-oriented product pages)
- v3 — in progress, targeting Oct 2026 (currently on staging)

**Demo:** staging (v3) —
`https://storefront-production-b9ad.up.railway.app/`.

**Source code:** GitHub link shown greyed out / disabled, labelled
"Private — client project" instead of linking anywhere. This is paid client
work, so the codebase isn't public.

Implemented: `githubPrivate` is now a boolean field on the Project schema
([schemas/project.ts](../../schemas/project.ts)), and
[Header.tsx](../../components/ProjectDetails/Header.tsx) renders the disabled
label whenever it's checked, instead of the working GitHub link. The
`github` URL field can stay filled in for your own records — it just won't
be linked. **Remaining step (yours):** in Sanity Studio, open the Graceland
document and check "Source code is private" — I don't have write access to
Studio content, only code.

**Banner image:** the site already shows a laptop screenshot next to a phone
screenshot on every case study (via the `laptopImg`/`mobileImg` fields) —
that's the same "MacBook + iPhone" pairing this section asked for, rendered
live and responsively rather than as a flattened graphic. A flattened
composite would actually be worse: it loses dark-mode support and responsive
sizing.

Implemented: the two v3 staging screenshots are cropped-and-ready in
[public/case-studies/graceland/](../../public/case-studies/graceland/)
(`laptop-home.png`, `mobile-home.png`). **Remaining step (yours):** upload
those two files into the Graceland document's `Laptop Img` / `Mobile Img`
fields in Studio — another content write I can't make myself.

**Tech used:** Next.js, TypeScript, Prisma, Supabase (Postgres), NextAuth.js,
Paystack (payments), Zustand + local storage (cart), Tailwind CSS. v3 adds
Medusa.js as the commerce foundation (see Learnings).

---

## 2. Project Goal & Objective

Graceland is a brick-and-mortar baby store in Idumota, Lagos, that has sold
strollers, car seats, cots, carriers, and walkers to Nigerian families for
over 20 years, entirely on local reputation. Before this project, the
business had no online storefront; occasional online orders came in through
WhatsApp, when the store happened to post a product to its WhatsApp Story.

The goal was to give the store its own online presence and let customers
browse and order directly, rather than depend on informal, one-off requests.
The client's own framing, in their words: they wanted to consolidate baby
product sales the way Babylist.com or BestBuy.com does, and to own that
positioning locally before expanding into other brands.

**Why build custom instead of using Shopify or BigCommerce:** honestly,
mostly circumstance rather than a deliberate platform comparison. The project
began as a small personal exercise integrating Stripe; once it had real
functionality, the client's brand was attached to it and it became their
storefront. Note for the record, since it's tempting to lean on this and it
wouldn't hold up: Shopify *can* take Nigerian payments through Paystack's own
Shopify app, so "Shopify doesn't support Nigerian payments" isn't a real
justification. What is true: the client wanted full ownership of their brand
and platform, with room to sell other brands under it later, rather than
building on a third party's storefront.

---

## 3. Challenges Faced

**No server-side cart or session.** Speed to MVP mattered more than a fully
durable cart. The known cost: carts don't persist across devices and there's
no cart-abandonment data. The mitigation that made this an acceptable
trade-off rather than a gap: Paystack checkout sessions carry the cart's line
items in metadata, so incomplete transactions are still visible in the
Paystack dashboard even though nothing was written to Graceland's own
database.

**The order schema was the hardest problem.** The first schema didn't model
the states an order actually moves through, or which of those transitions an
admin should be allowed to make. In practice this showed up as things like an
admin being able to move a completed/delivered order back to draft, which
should never happen. Two fixes came out of this: an order event log was
added, so every state change is recorded rather than just the order's current
status; and the payment-tracking model was narrowed to a single
responsibility — tracking Paystack's *confirmed* payments — because Paystack
already tracks payment attempts on its side, so duplicating that in the
schema was unnecessary.

**Coordinating with a store admin who isn't at a desk.** The admin is on the
shop floor and can be busy with in-person customers, so "how often do they
check for online orders" was a real design input, not an assumption.

---

## 4. Strategy, Trade-offs & Validation

**Modular monolith.** The application is organized into four modules —
payments, orders, products, and admin — with clear boundaries between them,
but shipped and deployed as one codebase. The reasoning: this keeps
separation of concerns clean without taking on the operational cost of
keeping multiple services up and talking to each other, while still leaving
the option to extract a module into its own service later if one ever needs
to scale or ship independently. For a single-developer-then-small-team
project at this stage, one deployable was the right amount of complexity.

**Validating the order workflow with the client, not just the code.** Rather
than guessing at what an admin needs, the order workflow was defined through
a form of event storming: a call with the store admin walking through, step
by step, what they'd do for each order scenario — what happens when an order
comes in, how often they realistically check for one, what "delivered" means
in their process. The order-status model and the event log came directly out
of that conversation, then were confirmed by watching the admin use the
system live.

**Bringing in a second developer.** A friend who saw the project wanted to
contribute. Work was split by carving out a defined feature — email
notifications for order events — designing the flow, then creating tickets
in ClickUp for him to build against and review.

**Payments: Paystack, with webhook correctness handled directly.** Paystack
was chosen for feature fit (Nigerian payment methods, checkout sessions).
Implementation handled webhook delivery and duplicate-payment prevention:
each payment is tied to one unique Paystack reference, and an order is only
updated to paid once its webhook is confirmed — not optimistically at
checkout.

---

## 5. Outcome / Solution

- Replaced an ad hoc WhatsApp-Story ordering process with a single online
  storefront and a one-screen admin view for managing orders.
- v1 shipped with the core loop a physical retailer needed to test online
  demand: browse products, add to cart, check out, and have an admin receive
  and manage that order.
- v2 added customer accounts, a customer-facing order dashboard, expanded
  transactional email, and product pages built with SEO in mind.
- The storefront currently lists over 20 products and is used as the store's
  day-to-day order channel.
- Client feedback so far: excitement about the online visibility itself —
  notable because the business, after 20+ years trading on local reputation,
  had never had a digital presence before this.

`TODO` — no online-sales metric is confirmed yet (an earlier +14% figure was
unverified and has been removed from the site and should also be removed
from your resume). If you get real numbers later — order volume, repeat
customers, time saved on order handling — replace this section.

---

## 6. Learnings

**Modeling state is the real hard part of "just" building an order form.**
The schema didn't fail because of a technology choice; it failed because the
first version didn't encode which transitions were legal. An event log and a
narrower payment model fixed that — the lesson generalizes past this project.

**Talking to the person who'll actually use the software beats guessing.**
The order workflow got right the first real iteration because it was modeled
on the admin's actual routine (including that they're not always at a
screen), not on an assumption of how an online store "should" work.

**Knowing when not to build from scratch.** Looking back, a foundation like
Medusa.js would have provided commerce features — inventory, returns, an
admin API — that were instead hand-built. That's not a story about getting it
wrong the first time; it's what makes the trade-off visible now: build custom
when the client needs control and a specific payment path a platform doesn't
give you, reach for existing infrastructure when the commerce logic itself
isn't the differentiator.

**Connecting this to why I build financial technology.** My why is giving
people clarity and control over money. Here, the person on the other side of
that isn't a shopper — it's the merchant. A store that had run for 20+ years
on local reputation and occasional WhatsApp orders had no reliable way to
take a payment online, and no visibility into whether a checkout succeeded,
failed, or was abandoned. Handling that correctly — confirming payment by
webhook rather than assuming it went through, keying every payment to one
unique reference so it can't be double-counted — gave the client clarity on
what money had actually come in, and control over their own sales channel for
the first time. It's the same belief, applied to a small business's finances
rather than an individual's.
