/* ------------------------------------------------------------------ */
/*  CONTENT MODEL                                                       */
/*  All page copy lives here so sections stay presentational and the    */
/*  site can be re-skinned or localized without touching layout code.   */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Covent",
  email: "hello@joincovent.com",
};

export const nav = {
  primary: [
    { label: "For GTM Teams", href: "#gtm" },
    { label: "For Organizers", href: "#network" },
    { label: "Event Formats", href: "#formats", caret: true },
    { label: "Resources", href: "#faq", caret: true },
  ],
  actions: [
    { label: "Login", href: "#login", variant: "outline" as const },
    { label: "Contact Us", href: "#contact", variant: "primary" as const },
  ],
};

export const hero = {
  eyebrow: "The Fully Managed Events Platform",
  title: "We produce events with the audiences you want to reach.",
  body: "Tell us your target audience. We'll produce fully customized events, invite them, and handle all execution and logistics so you just show up.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "See how it works", href: "#how" },
  rating: "5/5 from",
  ratingSub: "Hundreds of GTM teams",
};

export const clientLogos = [
  "monday.com",
  "Alma",
  "syndio",
  "knowbe4",
  "FILEVINE",
  "Meltwater",
  "Lightfield",
  "SEEDLEGALS",
  "jenni",
  "telesign",
  "ATLASSIAN",
  "Apollo.io",
  "navan",
];

export const whyItWorks = {
  eyebrow: "Why It Works",
  title: "The One B2B Growth Channel AI Can Never Replace",
  body: "AI flooded every digital channel. The only channel it can't replace is a conversation in real life.",
  channels: [
    {
      name: "Email",
      span: "1971 — 2024",
      note: "AI writes 10,000 a day. Yours goes straight to spam.",
    },
    {
      name: "Digital Ads",
      span: "1994 — 2024",
      note: "AI-generated clicks. AI-generated fraud. No humans involved.",
    },
    {
      name: "Cold Calling",
      span: "1876 — 2024",
      note: "AI autodialers killed the cold call. SDRs never stood a chance.",
    },
    {
      name: "LinkedIn",
      span: "2003 — 2024",
      note: "Your prospect's AI is ignoring your AI.",
    },
  ],
  highlight: { name: "In-Person Events" },
};

export const problems = {
  eyebrow: "The Problem",
  title: "Why most events never generate results",
  items: [
    {
      tone: "rose",
      icon: "user-x",
      title: "Wrong people in the room",
      body: "You spend thousands and half the room is your own team. Audience quality is the only thing separating growth from an expensive happy hour.",
    },
    {
      tone: "amber",
      icon: "clock",
      title: "Events eat the time you don't have",
      body: "Venues, catering, invites, RSVPs, follow-up — weeks of coordination on top of your actual job.",
    },
    {
      tone: "sage",
      icon: "chart",
      title: "No way to measure what worked",
      body: "You can't attribute a closed deal back to a dinner three months ago. So the budget never gets approved again.",
    },
  ],
  testimonial: {
    quote:
      "Events used to eat up more time than they were worth — and even then, we weren't sure we were in the right rooms. There was no clear way to connect the events we did to actual sales outcomes.",
    name: "Tyler",
    role: "Head of Growth @ Presscart",
  },
};

export const steps = {
  eyebrow: "How It Works",
  title: "We handle everything. You just show up.",
  items: [
    {
      no: "01",
      title: "Share your goals",
      body: "Tell us your ICP, target cities, preferred format, and budget.",
    },
    {
      no: "02",
      title: "We build it",
      body: "We source the venue, handle logistics, and recruit ICP-matched attendees via qualification RSVP.",
    },
    {
      no: "03",
      title: "You approve the room",
      body: "See the full guest list before the event. Approve or decline any attendee.",
    },
    {
      no: "04",
      title: "You just show up",
      body: "Walk into a full room and get a complete recap with attribution and next-step leads.",
    },
  ],
};

export const gallery = {
  eyebrow: "Inside a Covent Event",
  title: "Inside a Covent Event",
  body: "Hundreds of curated experiences your audience loves.",
};

export const formats = {
  eyebrow: "What We Run",
  title: "Every format. Any city. Fully managed.",
  items: [
    {
      name: "Executive Dinners",
      desc: "10–25 attendees · Enterprise growth acceleration",
      icon: "dining",
      tone: "tan",
      popular: true,
    },
    {
      name: "Cocktail Mixers",
      desc: "50–150 attendees · Brand awareness and relationship-building",
      icon: "wine",
      tone: "rose",
      popular: false,
    },
    {
      name: "Breakfasts",
      desc: "20–50 attendees · Perfect for roadshows and market entry",
      icon: "coffee",
      tone: "tan",
      popular: false,
    },
    {
      name: "Hackathons",
      desc: "50–100 developers · Developer engagement and product feedback",
      icon: "code",
      tone: "purple",
      popular: false,
    },
    {
      name: "Conference Side Events",
      desc: "15–40 attendees · Capture the conference audience",
      icon: "ticket",
      tone: "blue",
      popular: false,
    },
    {
      name: "Fully Custom Events",
      desc: "Any size · Golf outings, yacht parties, ski trips — whatever fits your audience",
      icon: "sparkle",
      tone: "gray",
      popular: false,
    },
  ],
};

export const testimonials = {
  eyebrow: "Built for GTM Teams",
  title: "We'll Sweat the Details. You Just Show Up.",
  body: "Covent runs your private events from start to finish so your team can stop worrying about logistics and start having the conversations that turn into business outcomes.",
  items: [
    {
      company: "Syndio",
      quote:
        "We engaged 100+ Fortune 500 HR leaders through a series of intimate events, achieving a 95% qualified lead rate. Covent helped us turn thought leadership into real pipeline.",
      name: "",
      role: "CMO",
      cta: "Read story",
    },
    {
      company: "Telesign",
      quote:
        "Across 14 private executive events in major U.S. markets, Covent delivered a 92%+ qualified lead rate by getting us in front of CISOs and VP Engineering leaders at top enterprise companies.",
      name: "",
      role: "Field Marketing Director",
      cta: "Read story",
    },
    {
      company: "TriNet",
      quote:
        "With Covent, we've been able to access event communities we didn't even know existed and consistently get in front of the right people.",
      name: "Christina L. Sclafani",
      role: "Sr. Sales Consultant",
      cta: "",
    },
    {
      company: "Unicorner",
      quote:
        "We're getting access to 10x more sponsors in a fraction of the time. Covent has completely changed how we approach partnerships.",
      name: "Arek Der-Sarkissian",
      role: "Founder",
      cta: "",
    },
    {
      company: "Apollo.io",
      quote:
        "The audience quality was unreal. Every person in the room was someone we'd actively wanted to meet for months.",
      name: "Sarah L.",
      role: "VP Marketing",
      cta: "",
    },
    {
      company: "Meltwater",
      quote:
        "We sourced more qualified pipeline from one Covent dinner than a full quarter of paid social.",
      name: "Daniel R.",
      role: "Director of Demand Gen",
      cta: "",
    },
  ],
};

export const network = {
  eyebrow: "The Network",
  title:
    "Covent's global network getting you access to every type of audience you want to reach.",
  body: "500+ vetted organizers. 25+ industries. 30+ markets. 5M+ contacts. We source the right room, fill it with your ICP, and handle everything else.",
  communities: [
    "BLANCO",
    "Alumni & Community",
    "Founders Mesh",
    "TechWalk",
    "Startup CPG",
    "Allocator One",
    "Shanti House",
    "Founder Social Club",
    "Founders Forum",
    "The Cut Pitch",
    "Step",
    "Chew On This",
    "Tavern",
    "KINN",
    "Illinois Cyber",
    "ENTRE",
    "Weeknd",
    "Black Women Talk Tech",
    "The AI Collective",
    "Pico",
    "Parlor Social Club",
    "GenZTea",
    "B2B Growth Expo",
    "Pitch Roast Live",
  ],
};

export const faqs = {
  title: "Frequently asked questions",
  items: [
    {
      q: "What is Covent?",
      a: "Covent is a fully managed B2B event marketing platform that helps go-to-market (GTM) teams meet their target customers through curated in-person events. Founded in 2024, Covent partners with a vetted network of 500+ event organizers across 30+ markets in North America, Europe, the Middle East, and Asia-Pacific. We produce executive dinners, cocktail mixers, breakfasts, hackathons, conference side events, and fully custom experiences end-to-end — handling audience sourcing, ICP qualification, organizer matching, registration, logistics, and on-the-ground coordination. Every event includes a make-good guarantee, and events are white-labeled by default under the client's brand.",
    },
    {
      q: "What exactly does Covent handle, and what do I need to do?",
      a: "We handle everything: venue sourcing, vendors, catering, branding, guest recruitment, invites and reminders, on-site run-of-show, and the post-event report with attribution. On your side, all we need is a short brief — your ICP, target cities, preferred format and budget — and your approval on the final guest list.",
    },
    {
      q: "How do you find and qualify the right attendees for our event?",
      a: "We recruit from a vetted network of 500+ organizers and 5M+ contacts, then score every prospective guest against your ICP. You approve or decline the final list before any invite goes out, so you know exactly who will be in the room.",
    },
    {
      q: "How far in advance do I need to reach out?",
      a: "Three to five weeks is the sweet spot for most formats, but we regularly turn around side events and dinners on a shorter runway.",
    },
    {
      q: "Do you work with virtual or online events?",
      a: "Our focus and our edge is in-person. That's the channel AI can't replace and the one that produces the pipeline our clients come to us for.",
    },
    {
      q: "How do we measure ROI — and what does success look like?",
      a: "Every event closes with a report: who attended, ICP match rate, qualified leads and projected pipeline — mapped straight back to your revenue motion.",
    },
    {
      q: "Can we co-host with a partner or split costs with a co-sponsor?",
      a: "Absolutely. Co-hosted and partner-led formats are some of our highest-performing events, and pricing starts lower for co-hosted events. We handle the coordination across both sides.",
    },
    {
      q: "Do you operate outside the US?",
      a: "Yes. Our organizer network spans 30+ markets across North America, EMEA and APAC.",
    },
  ],
};

export const finalCta = {
  title: "Ready to stop planning and start showing up?",
  body: "Tell us who you want in the room. We'll build the event.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "Login", href: "#login" },
};

export const footer = {
  description:
    "Covent helps B2B GTM teams meet their target customers through curated events — partnering with top organizers to deliver high-impact experiences.",
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "X", href: "#", icon: "x" },
  ],
  columns: [
    {
      title: "For GTM Teams",
      links: [
        { label: "Overview", href: "#gtm" },
        { label: "Case Studies", href: "#gtm" },
        { label: "Event Formats", href: "#formats" },
      ],
    },
    {
      title: "For Organizers",
      links: [{ label: "Join the Network", href: "#network" }],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#faq" },
        { label: "Careers", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Covent (formerly CoVent). All rights reserved.",
};
