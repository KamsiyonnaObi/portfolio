---
title: "Financial Goals at ACU"
isFeatured: true
color: "#9CC4FF"
status: "Shipped"
desc: "Led the design and API build for the Financial Goals feature at Assiniboine Credit Union, replacing free-text review notes with structured goals and review history so any advisor can pick up where the last one left off."
product: "Advisor platform at Assiniboine Credit Union"
skills: ["Backend API Development", "System Design", "Stakeholder Management"]
role: "Software Developer"
timeline: "May – Aug 2026"
backEndtags: ["C#", ".NET REST API", "Azure DevOps"]
cardImg: "/case-studies/financial-goals/review-lifecycle.svg"
sections:
  - type: text
    eyebrow: "Problem"
    heading: "Notes were doing a job they weren't built for"
    body: |
      A financial review is a structured conversation between an advisor and a member. Together they pick one to three key financial goals the member commits to acting on, and the advisor follows up on each one afterward. There was no dedicated web tool to capture those goals, track their details, or manage the follow-up. Advisors used notes.

      Notes are searchable, but advisors write them for all kinds of reasons, and they're often thin: sometimes just "review done". That tells the next advisor nothing when they're sitting in front of the member.

      **What a bad day looked like:** scrolling through every note to find the last financial review (if one even exists), then starting the conversation from scratch because there's no context on the member's goals or plan from last time.

      The executive advice team and the service delivery team raised the problem. They wanted two things: a more detailed record of what was discussed in a review, and insight into how many advisors were completing financial reviews with members.
    callouts:
      - icon: "🎯"
        title: "Objective"
        body: "Give any advisor a member's goals and last review in one place, and give leadership a way to see reviews happening."
      - icon: "👥"
        title: "Who it's for"
        body: "Roughly 200–300 financial advisors, plus the executive and service delivery teams who wanted visibility."

  - type: text
    eyebrow: "My role"
    heading: "Owning the feature end to end"
    body: |
      My manager raised this alongside other work. I took it because it sits squarely on why I build software: tools that help advisors give members confidence and clarity in their financial plans, with business value for leadership on top.

      I was assigned the whole feature and asked to propose the solution. I wrote the Azure DevOps feature and user stories, then built the .NET REST API service while another software developer built the UI screens. Our Product Owner approved every piece of UI wording, a senior software developer signed off on each design decision I made, and I demoed incrementally to advisors and stakeholders.
    callouts:
      - icon: "🤝"
        title: "Who was involved"
        body: "A product manager, my manager, the senior software developer who signed off on design, a second software developer on the UI, a Product Owner, and QA."

  - type: text
    eyebrow: "The decision"
    heading: "Extend an existing service, or build a new one?"
    body: |
      At sprint planning, with the product manager, my manager, the senior software developer, and teammates, we went through the requirements and the limits of the current system. The first recommendation from some teammates was to build another service for this feature to live in, which is how the team had built every feature so far.

      I pushed back, because of where the team already stood: five of us were running and maintaining close to 30 services, and the maintenance burden was already being felt. I raised the nanoservices anti-pattern and wrote a decision document laying out two options and a recommendation. A financial goal on its own wasn't big enough to justify a standalone service, and it's easier to start with a well-scoped service and split it later than to justify a new one up front. That follows Sam Newman's warning about premature decomposition in *Building Microservices*.

      **The option I recommended:** add the goals to the existing net worth statement service, and rename it the Financial Planning Service, since net worth and financial review goals belong to the same business domain. The goals shipped in that service; the rename is planned but not done yet. Extending it also gave us deployment, and a financial review starts with the member's net worth statement, which the advisor may want to update.

      **The risk I named:** this breaks an established pattern the team had agreed on, and a pattern break shouldn't be one person's call. The document said so directly and asked the team to decide together, and the team agreed. It also covered the other outcome: if the team kept the pattern, we'd open a separate story to investigate how service-per-entity scales for a team our size.

      A third idea also came up: let advisors tick a box on the services tab and write a note on the service they performed (here, a financial review), so all the notes live in one place. It would have cost very little development time, but advisors could still write anything in that box, including "review done". Free text was the original problem.

      I demoed the work to the wider software team, including DBAs, QA, the software development manager, the Product Owner, and other developers.
    callouts:
      - icon: "⚖️"
        title: "The trade-off I accepted"
        body: "That service was built only to manipulate and persist net worth items. Extending it breaks the team's service-per-entity pattern, and the plan is to rename it so the name fits its wider job."
      - icon: "🗒️"
        title: "The cheaper option I passed on"
        body: "A tick-box note on the services tab would have been almost free, but it wouldn't have made review notes structured."

  - type: solution
    eyebrow: "Diagrams"
    heading: "How the decision and the flow worked"
    subheading: "Redrawn as generic diagrams, with nothing from the internal system."
    surfaces:
      - title: "Where should Financial Goals live?"
        caption: "Architecture decision"
        body: "The three options on the table, with what each cost. I recommended extending the net worth statement service, and the senior software developer signed off on the design."
        image: "/case-studies/financial-goals/decision-map.svg"
      - title: "Financial review lifecycle"
        caption: "MVP flow"
        body: "What an advisor does from opening a member's profile to completing a review, and what the next advisor sees. The executive view was deferred."
        image: "/case-studies/financial-goals/review-lifecycle.svg"

  - type: cardGrid
    eyebrow: "MVP"
    heading: "What shipped"
    items:
      - title: "Financial goals"
        body: "Endpoints to create, read, update, and delete a member's goals. Each goal has a name, follow-up date, status (not started, in progress, complete, or cancelled), and notes. Advisors see them when they open the member's profile."
      - title: "Financial reviews"
        body: "An advisor starts a review for a specific member, the review date is recorded, and they can view and edit its goals after saving. Completing a review closes it out with a summary."
      - title: "A cap of three goals"
        body: "A review holds one to three goals, and the system prevents adding a fourth. It keeps each review focused on what the member is committing to act on."
      - title: "Review history"
        body: "Past reviews are kept, so the next advisor can study what was discussed before the conversation starts."
      - title: "Access auditing, reused"
        body: "The app already audits which profiles advisors open, so I built on that instead of adding something new."
    note: "Out of scope for v1: reporting on goals and a Power BI dashboard for executives. The Product Owner chose to get the feature into advisors' hands and collect feedback first."

  - type: statGrid
    eyebrow: "Outcome"
    heading: "Shipped and tested end to end"
    subheading: "Started in May 2026 and delivered in August 2026."
    stats:
      - value: "May–Aug"
        body: "From kickoff to delivery in 2026, with QA testing the feature end to end."
      - value: "0"
        body: "New services added. The feature extends an existing one."
      - value: "200–300"
        body: "Roughly how many financial advisors the feature is built for."
    note: "Official adoption numbers aren't in yet. Informally, usage was high in the first week and advisors and their managers were excited about it."

  - type: cardGrid
    eyebrow: "Learnings"
    heading: "Learnings"
    items:
      - title: "The cheap fix can leave the real problem in place"
        body: "A note box on the services tab would have cost almost nothing, but advisors could still write anything, including \"review done\". The problem was unstructured data, so the fix had to be structured data."
      - title: "Reuse isn't free"
        body: "Extending the net worth service meant no new service to maintain, but it also meant stretching a service built for one narrow job and breaking a team pattern. Its name now needs to catch up. Reuse moves the cost somewhere else."
      - title: "A pattern break is a team decision"
        body: "I recommended an option that broke an agreed pattern, so I wrote down both options, the risk, and a fallback, and asked the team to decide together. They agreed. A deviation nobody understands looks like an accident to the next developer."
      - title: "Ship to users, then build the reporting"
        body: "The Product Owner deferred the executive dashboard so advisors could use the feature and give feedback before we built reporting on top of it."
      - title: "Model how the experts work"
        body: "Next time I'd run an event storming session with the advisors whose reviews work best, then turn how they run a review into steps the software can guide others through. I used the same technique on Graceland and would bring it in earlier here."
---
