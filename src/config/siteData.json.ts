import { type SiteDataProps } from "./types/configDataTypes";

// Site metadata. Edit with your project's details.

// Links shared by more than one page or section live here (see `links` below), so a URL changes in one edit.
const wiki = "https://wiki.brisbanemaker.space";
const portal = "https://portal.brisbanemaker.space";

const siteData = {
  name: "BMS",
  // Browser-tab title: the whole <title> on the home page, and the suffix on every other page
  // ("About - Brisbane Makerspace"). Short on purpose: tabs truncate.
  tabTitle: "Brisbane Makerspace",
  // Page title for the home page: what search results and link previews (og:title, twitter:title) show.
  title: "Brisbane Makerspace - Brisbane's Friendliest Community Makerspace",
  // Where the makerspace is (Visit page, event pages).
  address: "35 Balaclava St, Woolloongabba, Brisbane, QLD",
  description:
    "BMS is Brisbane's friendliest community makerspace. We provide a collaborative environment for makers, hobbyists, and innovators to learn, create, and work on their projects with others.",
  location: "35 Balaclava St, Woolloongabba",

  author: {
    name: "Brisbane Makerspace",
    email: "hello@brisbanemaker.space",
    // Volunteer-staffed: emergencies and existing workshop bookings only (see the Contact page).
    phone: "07 2111 8684",
    // Ships EMPTY on purpose: BaseHead only emits `twitter:creator` when this is set, so an unfilled
    // template omits the tag rather than attributing every page to a handle that doesn't exist.
    twitter: "",
  },

  defaultImage: {
    src: "/og.jpg",
    alt: "Brisbane's friendliest community workshop & makerspace.",
  },

  // Links used on more than one page. `routes` are this site's own pages (trailing slash per
  // astro.config `trailingSlash: "always"`); the rest are the makerspace's separately hosted services.
  // Community-policy links (Safe Space, Code of Conduct) live in policyData.json.ts; social profiles in
  // socialData.json.ts.
  links: {
    portal,
    portalSignup: `${portal}/register`,
    webcams: `${portal}/webcams`,
    status: "https://status.brisbanemaker.space",
    wiki,
    wikiPages: {
      tools: `${wiki}/tools`,
      policies: `${wiki}/policies`,
      orgStructure: `${wiki}/howto/org-structure`,
      findSomeone: `${wiki}/howto/find-someone`,
      gettingThere: `${wiki}/en/getting-there`,
      dgrDonation: `${wiki}/howto/dgr-donation`,
      donationPolicy: `${wiki}/en/bylaws/donations`,
      fees: `${wiki}/policies/fees#tool-usage-fees`,
      fairUse: `${wiki}/en/policies/fair-use`,
      lasercutterTools: `${wiki}/en/tools/digifab/lasercutter`,
    },
    routes: {
      visit: "/visit/",
      events: "/events/",
      workshops: "/workshops/",
      facilities: "/facilities/",
      signup: "/signup/",
      giftCards: "/gift-cards/",
      mailingList: "/mailing-list/",
      mediaPack: "/brand-guidelines/",
      membership: "/membership/",
      contact: "/contact/",
      donate: "/donate/",
      privacy: "/privacy-policy/",
    },
  },

  // Social/profile URLs, surfaced as the Organization `sameAs` in JSON-LD (see @js/schema) AND used
  // by @config/socialData to point the footer row, the home contact chips and the contact InfoCards
  // at your real profiles. **Fill this before launch:** while it is empty those links fall back to
  // bare platform home pages (github.com, linkedin.com, discord.gg, …).
  // e.g. ["https://x.com/yourhandle", "https://github.com/yourorg"]
  sameAs: [],
} satisfies SiteDataProps;

export default siteData;
