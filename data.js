/* 209 Briarwood Ave — deal data. Every view on the page renders from this file; update it and push to refresh the tracker. */
window.DEAL = {
  updated: "2026-10-29T16:30:00-04:00",
  property: {
    address: "209 Briarwood Avenue",
    town: "Haddon Township, NJ",
    mailing: "Haddonfield, NJ 08033",
    parcel: "Block 17.02 · Lot 14",
    built: 1951,
    form: "NJ REALTORS Form 118",
    buyers: "Hursh Patel & Nisha Desai"
  },

  // Contract and lender dates. "at" drives countdowns and the calendar export.
  dates: [
    { id: "attorney", label: "Attorney review ends", at: "2026-10-30T23:59:00-04:00", allDay: false, show: "Fri Oct 30 · 11:59 PM", owner: "Attorneys" },
    { id: "inspection", label: "Home, radon and termite inspection", at: "2026-11-06T09:00:00-05:00", end: "2026-11-06T12:00:00-05:00", show: "Fri Nov 6 · 9 AM", owner: "Jaybird", where: "209 Briarwood Ave" },
    { id: "commitment", label: "Mortgage commitment due", at: "2026-11-12T17:00:00-05:00", allDay: true, show: "Thu Nov 12", owner: "NFM Lending" },
    { id: "cd", label: "Closing Disclosure to buyers", at: "2026-11-20T17:00:00-05:00", allDay: true, show: "Fri Nov 20", owner: "NFM Lending" },
    { id: "walk", label: "Final walk-through", at: "2026-11-24T12:00:00-05:00", allDay: true, show: "Tue Nov 24", owner: "Buyers + Jamie" },
    { id: "closing", label: "Closing at Spire Abstract", at: "2026-11-25T00:00:00-05:00", allDay: true, show: "Wed Nov 25", owner: "Everyone" }
  ],

  stages: [
    { name: "Under contract", pct: 100 },
    { name: "Attorney review", pct: 45, now: true },
    { name: "Inspections", pct: 25 },
    { name: "Mortgage", pct: 60 },
    { name: "Closing", pct: 0 }
  ],

  milestones: [
    { phase: "Under contract", items: [
      { t: "Contract fully signed", d: "Tue Oct 27", s: "done", n: "Sellers signed; Jamie sent the fully executed copy." },
      { t: "Title ordered", d: "Tue Oct 27", s: "done", n: "Spire Abstract, enhanced owner's policy. Spire also handles closing. Order confirmed Oct 29." },
      { t: "Buyer agency agreement signed", d: "Wed Oct 28", s: "done" },
      { t: "Earnest money deposit", d: "Thu Oct 29", s: "done", n: "$15,000 paid to Spire Abstract." }
    ]},
    { phase: "Attorney review", items: [
      { t: "Buyer's attorney engaged", d: "Wed Oct 28", s: "done", n: "Jeffrey P. Barnes, KingBarnes LLC." },
      { t: "Attorney review period ends", d: "Fri Oct 30 · 11:59 PM", due: "attorney", s: "now", tags: ["Attorneys"] },
      { t: "Desert Dry warranty addendum", d: "buyers signed Oct 28", s: "now", n: "Seller signatures to follow.", tags: ["Sellers", "Jamie"] }
    ]},
    { phase: "Inspections", items: [
      { t: "Inspections booked", d: "Tue Oct 27", s: "done", n: "Jaybird: home inspection, radon and termite." },
      { t: "Inspection day", d: "Fri Nov 6 · 9 AM", due: "inspection", s: "next", n: "Jamie or her agent provides access. Utilities on; basement, sump area and attic reachable.", tags: ["Jaybird", "Jamie"] }
    ]},
    { phase: "Mortgage", items: [
      { t: "Application submitted", d: "Tue Oct 27", s: "done", n: "NFM Lending, 15-year fixed." },
      { t: "Rate locked", d: "Wed Oct 28", s: "done", n: "Locked through Nov 27, two days past closing." },
      { t: "Income and asset verification", d: "Oct 28–29", s: "done", n: "Payroll and bank accounts linked for the lender." },
      { t: "Homeowners insurance binder", d: "after inspection", s: "now", n: "Quote in hand. Binder goes to NFM once the inspection report is in.", tags: ["Buyers", "All4"] },
      { t: "Mortgage commitment", d: "Thu Nov 12", due: "commitment", s: "next", n: "Delivered to Jamie and the attorneys.", tags: ["NFM Lending"] }
    ]},
    { phase: "Closing", items: [
      { t: "Certificate of occupancy", d: "before Nov 25", s: "next", n: "Haddon Township resale CO, including smoke and CO detector certification.", tags: ["Sellers"] },
      { t: "Closing Disclosure", d: "Fri Nov 20", due: "cd", s: "next", n: "At least three business days before closing.", tags: ["NFM Lending"] },
      { t: "Final walk-through", d: "Tue Nov 24", due: "walk", s: "next", tags: ["Buyers", "Jamie"] },
      { t: "Closing", d: "Wed Nov 25", due: "closing", s: "next", n: "At Spire Abstract, the day before Thanksgiving.", tags: ["Everyone"] },
      { t: "Move-in day", d: "Sun Nov 29 or Mon Nov 30", s: "next", n: "Final day picked once schedules are set.", tags: ["Buyers"] }
    ]}
  ],

  // Shown as Google Drive folder paths.
  drive: "Google Drive / 209 Briarwood Ave",
  documents: [
    { f: "01 Contract & Addenda", t: "Contract of Sale (NJ REALTORS Form 118)", s: "signed", d: "2026-10-27", from: "Jamie Quinn", n: "Fully executed" },
    { f: "01 Contract & Addenda", t: "Buyer agency agreement", s: "signed", d: "2026-10-28", from: "Authentisign" },
    { f: "01 Contract & Addenda", t: "Desert Dry warranty addendum", s: "waiting", d: "2026-10-28", from: "Sellers", n: "Buyers signed Oct 28; seller signatures pending" },
    { f: "02 Seller Disclosures", t: "Seller's property disclosure", s: "received", d: "2026-10-25", from: "Listing file" },
    { f: "02 Seller Disclosures", t: "Disclosure part 2: drainage work", s: "received", d: "2026-10-25", from: "Listing file" },
    { f: "02 Seller Disclosures", t: "Lead-based paint disclosure", s: "received", d: "2026-10-25", from: "Listing file" },
    { f: "02 Seller Disclosures", t: "Desert Dry basement warranty", s: "received", d: "2026-10-26", from: "Jamie Quinn" },
    { f: "02 Seller Disclosures", t: "Service records: HVAC, tankless water heater, termite", s: "received", d: "2026-10-27", from: "Jamie Quinn" },
    { f: "02 Seller Disclosures", t: "Survey and backyard drainage plans", s: "received", d: "2026-10-27", from: "Jamie Quinn" },
    { f: "02 Seller Disclosures", t: "House notes for buyers", s: "received", d: "2026-10-27", from: "Jamie Quinn" },
    { f: "03 Mortgage (NFM)", t: "Pre-approval letter", s: "received", d: "2026-10-27", from: "Ron Gosewisch" },
    { f: "03 Mortgage (NFM)", t: "Loan application", s: "sent", d: "2026-10-27", from: "Buyers" },
    { f: "03 Mortgage (NFM)", t: "Initial disclosures and Loan Estimate", s: "signed", d: "2026-10-28", from: "NFM Lending" },
    { f: "03 Mortgage (NFM)", t: "Rate lock confirmation", s: "received", d: "2026-10-28", from: "Ron Gosewisch" },
    { f: "03 Mortgage (NFM)", t: "Bank and payroll verification", s: "sent", d: "2026-10-29", from: "Buyers" },
    { f: "03 Mortgage (NFM)", t: "Credit inquiry letter", s: "waiting", d: null, due: "this week", from: "Buyers", n: "Nisha signs, then back to Jenna" },
    { f: "03 Mortgage (NFM)", t: "Mortgage commitment", s: "expected", d: "2026-11-12", from: "NFM Lending" },
    { f: "03 Mortgage (NFM)", t: "Closing Disclosure", s: "expected", d: "2026-11-20", from: "NFM Lending" },
    { f: "04 Title & Escrow (Spire)", t: "Title order confirmation", s: "received", d: "2026-10-29", from: "Spire Abstract" },
    { f: "04 Title & Escrow (Spire)", t: "Earnest money payment, $15,000", s: "sent", d: "2026-10-29", from: "Buyers", n: "Waiting on Spire's receipt" },
    { f: "04 Title & Escrow (Spire)", t: "Title commitment", s: "expected", d: null, due: "mid-November", from: "Spire Abstract" },
    { f: "04 Title & Escrow (Spire)", t: "Certificate of occupancy", s: "expected", d: null, due: "before Nov 25", from: "Sellers" },
    { f: "05 Inspections", t: "Inspection reports: home, radon, termite", s: "expected", d: "2026-11-06", from: "Jaybird" },
    { f: "06 Insurance", t: "Homeowners insurance quote", s: "received", d: "2026-10-28", from: "All4 Insurance" },
    { f: "06 Insurance", t: "Insurance binder", s: "expected", d: null, due: "after inspection", from: "All4 Insurance" },
    { f: "07 Attorney", t: "Attorney engagement confirmation", s: "received", d: "2026-10-28", from: "KingBarnes LLC" }
  ],

  // Open loops: someone owes a reply. "since" starts the 24-hour follow-up clock.
  loops: [
    { id: "spire-deposit", who: "Rachel Rau · Spire Abstract", email: "rachel@spireabstract.com", what: "Confirm the $15,000 deposit arrived", since: "2026-10-29T11:41:00-04:00", auto: true,
      subject: "Re: 209 Briarwood Avenue",
      draft: "Hi Rachel,\n\nFollowing up on the $15,000 earnest money deposit for 209 Briarwood Avenue, paid through your online portal on Oct 29. Could you confirm it was received?\n\nThank you,\nHursh Patel" },
    { id: "addendum", who: "Jamie Quinn · for the sellers", email: "jamie@unlockedteam.com", what: "Seller-signed Desert Dry addendum", since: "2026-10-29T15:47:00-04:00", auto: false,
      subject: "Re: 209 Briarwood – status update",
      draft: "Hi Jamie,\n\nChecking in on the seller-signed copy of the Desert Dry warranty addendum. Could you send it over when you have it?\n\nThank you,\nHursh" }
  ],
  onUs: [
    { what: "Credit inquiry letter to NFM", who: "Nisha", when: "this week" },
    { what: "Inspection with Jaybird", who: "Buyers", when: "Fri Nov 6" },
    { what: "Insurance details and report to All4", who: "Hursh", when: "after Nov 6" },
    { what: "Move-in day", who: "Buyers", when: "Nov 29 or 30" }
  ],

  comms: [
    { d: "2026-10-24", ch: "email", who: "Jamie Quinn", party: "Jamie", dir: "in", t: "Welcome to the Unlocked Real Estate family", n: "Buyer guide and closing cost estimates." },
    { d: "2026-10-26", ch: "email", who: "Ron Gosewisch · NFM", party: "Lender", dir: "out", t: "Pre-approval request", n: "Ron sent the pre-approval the same morning." },
    { d: "2026-10-26", ch: "email", who: "Jamie Quinn", party: "Jamie", dir: "in", t: "Preparing for an offer" },
    { d: "2026-10-26", ch: "email", who: "Jamie Quinn", party: "Jamie", dir: "both", t: "Desert Dry basement warranty", n: "Warranty PDF received; buyers replied Oct 27." },
    { d: "2026-10-27", ch: "portal", who: "NFM Lending", party: "Lender", dir: "out", t: "Loan application submitted" },
    { d: "2026-10-27", ch: "email", who: "Jamie Quinn", party: "Jamie", dir: "both", t: "Accepted offer: next steps", n: "Signatures exchanged; fully signed contract received that night." },
    { d: "2026-10-27", ch: "email", who: "Jeffrey P. Barnes · KingBarnes", party: "Attorney", dir: "both", t: "Attorney review engagement", n: "Jeff confirmed Oct 28 and is handling the review." },
    { d: "2026-10-27", ch: "phone", who: "Jason · Jaybird", party: "Inspector", dir: "out", t: "Inspection booked", n: "Home, radon and termite on Fri Nov 6." },
    { d: "2026-10-28", ch: "email", who: "Ron Gosewisch · NFM", party: "Lender", dir: "both", t: "Rate lock", n: "Locked through Nov 27." },
    { d: "2026-10-28", ch: "email", who: "Thomas Rafferty", party: "Jamie", dir: "both", t: "Under-contract details", n: "Attorney, title and deposit details sent. Thomas connected Jeff to the file." },
    { d: "2026-10-28", ch: "email", who: "Rachel Rau · Spire Abstract", party: "Title", dir: "in", t: "Title and escrow introduction", n: "Deposit instructions." },
    { d: "2026-10-28", ch: "email", who: "Jenna Surloff · NFM", party: "Lender", dir: "both", t: "Processing kickoff", n: "Verification links, document requests and insurance." },
    { d: "2026-10-28", ch: "email", who: "Cole Buchanan · All4", party: "Insurance", dir: "in", t: "Homeowners insurance quote", n: "Quote received; final details after the inspection." },
    { d: "2026-10-29", ch: "email", who: "Spire Abstract", party: "Title", dir: "in", t: "Title order confirmed", n: "Jamie copied." },
    { d: "2026-10-29", ch: "email", who: "Rachel Rau · Spire Abstract", party: "Title", dir: "out", t: "Earnest money paid", n: "Confirmation sent with Thomas and Jamie copied. Waiting on Spire's receipt.", open: "spire-deposit" },
    { d: "2026-10-29", ch: "email", who: "Jenna Surloff · NFM", party: "Lender", dir: "both", t: "Verification update", n: "Bank accounts linked; Ron and Jenna confirmed next steps." },
    { d: "2026-10-29", ch: "text", who: "Jamie Quinn", party: "Jamie", dir: "in", t: "Inspection access", n: "Jamie or her agent will provide access on Nov 6." },
    { d: "2026-10-29", ch: "email", who: "Jamie Quinn", party: "Jamie", dir: "out", t: "Status update", n: "Asked for the seller-signed Desert Dry addendum.", open: "addendum" }
  ],

  move: {
    options: [
      { id: "nov29", label: "Sun Nov 29", at: "2026-11-29T09:00:00-05:00" },
      { id: "nov30", label: "Mon Nov 30", at: "2026-11-30T09:00:00-05:00" }
    ],
    tasks: [
      { id: "sched", t: "Adjust work schedules for Boris and Pawan", n: "Once the move date is final." },
      { id: "uhaul", t: "Book a U-Haul", link: { href: "https://www.uhaul.com/", label: "Open U-Haul" } },
      { id: "dryclean", t: "Grab dry-clean bags to cover clothes" },
      { id: "boxes", t: "Borrow boxes from Marisol" },
      { id: "bags", t: "Buy moving bags", link: { href: "https://www.amazon.com/s?k=heavy+duty+moving+bags", label: "Shop on Amazon" } }
    ]
  },

  projects: [
    { id: "lights", t: "Christmas lights", n: "Schedule Boris and Pawan to hang them after move-in.", when: "Early December" },
    { id: "siding", t: "Siding quote", n: "Send the renderings and house dimensions to the siding contractor.", when: "November", action: { key: "siding", label: "Send for quote" } }
  ],

  // {BASE} becomes the tracker's web address so the contractor can open the renderings.
  siding: {
    subject: "Siding quote: board and batten for 209 Briarwood Ave, Haddonfield, NJ",
    body: "Hi,\n\nWe close on 209 Briarwood Avenue, Haddonfield, NJ 08033 on November 25 and would like a quote to re-side the house in white vertical board and batten, like the renderings below.\n\nRenderings:\n- Front: {BASE}assets/exterior-front.jpg\n- Side and front angle: {BASE}assets/exterior-side.jpg\n- Back: {BASE}assets/exterior-back.jpg\n\nThe house:\n- Two-story colonial, built 1951, with a one-story rear addition\n- About 2,140 sq ft of living space on a 60 x 125 ft lot\n- Front wall: ___ ft wide\n- Side walls: ___ ft deep\n- Wall height to the eaves: ___ ft\n- Rear addition: ___ x ___ ft\n\nScope: vertical board-and-batten siding and trim as shown. Could you also share your timing and whether you'd like to see it in person?\n\nThank you,\nHursh Patel"
  },

  money: [
    { t: "Purchase price", v: 600000 },
    { t: "Earnest money deposit", sub: "Paid to Spire Abstract, Oct 29", v: 15000 },
    { t: "Mortgage", sub: "NFM Lending, 15-year fixed", v: 350000 },
    { t: "Balance due at closing", sub: "Plus closing costs", v: 235000 },
    { t: "Inspections", sub: "Jaybird: home, radon and termite", v: 700 }
  ],

  team: [
    { role: "Agent", name: "Jamie Quinn", org: "Keller Williams Main Street", phone: "215-478-7218", email: "jamie@unlockedteam.com" },
    { role: "Transaction coordinator", name: "Thomas Rafferty", org: "Working with Jamie", email: "thomas@portrworks.com" },
    { role: "Buyers' attorney", name: "Jeffrey P. Barnes", org: "KingBarnes LLC · assistant Michele Snyder", phone: "609-522-7530", email: "jpbarnes@kingbarnes.com", email2: "michele@kingbarnes.com" },
    { role: "Lender", name: "Ron Gosewisch", org: "NFM Lending · loan officer", phone: "856-912-4748", email: "rong@nfmlending.com" },
    { role: "Loan processor", name: "Jenna Surloff", org: "NFM Lending", phone: "856-605-7663", email: "jsurloff@nfmlending.com" },
    { role: "Title & closing", name: "Rachel Rau", org: "Spire Abstract", phone: "856-484-5284", email: "rachel@spireabstract.com" },
    { role: "Inspector", name: "Jason", org: "Jaybird · home, radon and termite", phone: "609-744-7805" },
    { role: "Insurance", name: "Cole Buchanan", org: "All4 Insurance Group", phone: "717-439-3867", email: "cole@all4insurancegroup.com" }
  ],

  quote: {
    subject: "Homeowners insurance quote: 209 Briarwood Ave, Haddonfield, NJ 08033",
    body: "Hi,\n\nWe're buying 209 Briarwood Avenue, Haddonfield, NJ 08033 (Haddon Township, Block 17.02, Lot 14) and close on Wednesday, November 25. Could you quote a homeowners policy effective that date?\n\n- Single-family colonial, built 1951, about 2,140 sq ft plus an unfinished partial basement (25 x 17.75 ft)\n- Roof 2023, tankless water heater 2023, central air\n- Sump pump with a Desert Dry interior French drain (2023, lifetime warranty)\n- Ring camera\n- Lender: NFM Lending (mortgagee clause to follow)\n\nBuyers: Hursh Patel and Nisha Desai\n\nThank you,\nHursh Patel",
    agents: [
      { name: "Cole Buchanan · All4 Insurance", email: "cole@all4insurancegroup.com", note: "current quote" }
    ]
  }
};
