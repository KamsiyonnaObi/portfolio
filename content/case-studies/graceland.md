---
title: "Graceland eCommerce"
isFeatured: false
color: "#FFBE62"
status: "Shipped"
desc: "Led the rebuild of a 20-year-old Lagos baby store's ordering process, replacing ad hoc WhatsApp orders with a full online storefront: browsing, cart, checkout, and order management."
demo: "https://storefront-production-b9ad.up.railway.app/"
githubPrivate: true
product: "Graceland Store"
skills: ["Full-Stack Development", "Payment Systems", "Order Workflow Design"]
role: "Software Lead (freelance)"
timeline: "Jun 2024 – present (v1–v3)"
laptopImg: "/case-studies/graceland/laptop-mockup.png"
mobileImg: "/case-studies/graceland/mobile-mockup.png"
frontEndtags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"]
backEndtags: ["Prisma", "Supabase", "NextAuth.js", "Paystack", "Medusa.js"]
sections:
  - type: text
    eyebrow: "Overview"
    heading: "Three releases, one storefront"
    body: |
      - **v1** — shipped Dec 2024 (MVP: browse, cart, checkout, order management)
      - **v2** — shipped Nov 2025 (customer accounts, order dashboard, more email notifications, SEO-oriented product pages)
      - **v3** — in progress, targeting Oct 2026 (currently on staging), adding Medusa.js as the commerce foundation
    callouts:
      - icon: "🔒"
        title: "Private client work"
        body: "Source code is private because this is paid client work."

  - type: text
    eyebrow: "Goal"
    heading: "Project Goal & Objective"
    body: |
      Graceland is a brick-and-mortar baby store in Idumota, Lagos, that has sold strollers, car seats, cots, carriers, and walkers to Nigerian families for over 20 years, entirely on local reputation. Before this project, the business had no online storefront; occasional online orders came in through WhatsApp, when the store happened to post a product to its WhatsApp Story.

      The goal was to give the store its own online presence and let customers browse and order directly, rather than depend on informal, one-off requests.

      **Why build custom instead of using Shopify or BigCommerce:** the project began as a small personal exercise integrating Stripe. Once it had real functionality, the client's brand was attached to it and it became their storefront. The client also wanted full ownership of their brand and platform, with room to sell other brands under it later, rather than building on a third party's storefront.
    callouts:
      - icon: "🎯"
        title: "Objective"
        body: "Consolidate baby product sales the way Babylist.com or BestBuy.com does, and own that positioning locally before expanding into other brands — the client's own framing."

  - type: text
    eyebrow: "Challenges"
    heading: "Challenges Faced"
    body: |
      **No server-side cart or session.** Speed to MVP mattered more than a fully durable cart. The known cost: carts don't persist across devices and there's no cart-abandonment data. The mitigation: Paystack checkout sessions carry the cart's line items in metadata, so incomplete transactions are still visible in the Paystack dashboard even though nothing was written to Graceland's own database.

      **Coordinating with a store admin who isn't at a desk.** The admin is on the shop floor and can be busy with in-person customers, so "how often do they check for online orders" was a real design input, not an assumption.
    callouts:
      - icon: "🧩"
        title: "Hardest problem"
        body: "The order schema. The first version didn't model which state transitions an admin should legally be allowed to make — an admin could move a delivered order back to draft."

  - type: cardGrid
    eyebrow: "Strategy"
    heading: "Trade-offs & Validation"
    items:
      - title: "Modular Monolith"
        body: "Four modules — payments, orders, products, admin — with clear boundaries, shipped as one codebase. Clean separation without the operational cost of running multiple services, while leaving room to extract a module later if one ever needs to scale independently."
      - title: "Validating with the Client, Not Just the Code"
        body: "The order workflow was defined through a form of event storming — a call with the store admin walking through what they'd do for each order scenario — then confirmed by watching the admin use the system live."
      - title: "Bringing in Two Developers"
        body: "I onboarded two developers. To split the work, I carved out a defined feature — email notifications for order events — designed the flow, then created tickets in ClickUp for them to build against and review."
      - title: "Payments: Webhook Correctness"
        body: "Paystack was chosen for feature fit (Nigerian payment methods, checkout sessions). Each payment is tied to one unique Paystack reference, and an order is only updated to paid once its webhook is confirmed — not optimistically at checkout."

  - type: statGrid
    eyebrow: "Outcome"
    heading: "From WhatsApp Story to Storefront"
    subheading: "Replaced an ad hoc ordering process with a single online storefront and a one-screen admin view."
    stats:
      - value: "20+"
        body: "Products currently listed and used as the store's day-to-day order channel."
      - value: "2"
        body: "Releases shipped: v1 in Dec 2024 and v2 in Nov 2025, with v3 in progress."
      - value: "4"
        body: "Modules (payments, orders, products, admin) in one deployable codebase."

  - type: cardGrid
    eyebrow: "Learnings"
    heading: "Learnings"
    items:
      - title: "Modeling State Is the Real Hard Part"
        body: "The schema didn't fail because of a technology choice; it failed because the first version didn't encode which transitions were legal. An event log and a narrower payment model — tracking only Paystack's confirmed payments — fixed that."
      - title: "Talk to the Person Who'll Use the Software"
        body: "The order workflow got right the first real iteration because it was modeled on the admin's actual routine — including that they're not always at a screen — not on an assumption of how an online store \"should\" work."
      - title: "Know When Not to Build From Scratch"
        body: "A foundation like Medusa.js would have provided commerce features — inventory, returns, an admin API — that were instead hand-built. Build custom when the client needs control a platform doesn't give you; reach for existing infrastructure when the commerce logic itself isn't the differentiator."
      - title: "Why I Build Financial Technology"
        body: "My why is giving people clarity and control over money. Here, the person on the other side of that isn't a shopper — it's the merchant. Confirming payment by webhook rather than assuming it went through, and keying every payment to one unique reference, gave the client clarity on what money had actually come in — and control over their own sales channel for the first time."
---
