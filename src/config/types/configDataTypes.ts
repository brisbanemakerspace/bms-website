import type { PixelIconName } from "@components/svg/pixel-icons";
/**
 * * Types for the typed config data files in src/config/.
 * Add interfaces here as you add data files (faq, testimonials, team, …).
 */

// --------------------------------------------------------
// site data (meta / branding)
export interface SiteDataProps {
  name: string;
  tabTitle: string; // browser-tab title: whole <title> on the home page, suffix on the others
  title: string; // home page title for search results + link previews (og:title / twitter:title)
  description: string;
  location: string; // shortened physical address for the site
  address: string; // fuller street address (Visit page, event pages)
  // used for blog post / article metadata
  author: {
    name: string;
    email: string;
    phone?: string; // volunteer-staffed line, shown on the Contact page
    twitter: string; // for twitter card attribution, e.g. "@handle" minus the @
  };
  // fallback social/OG image when a page has none
  defaultImage: {
    src: string;
    alt: string;
  };
  // links used on more than one page (own routes + the makerspace's separately hosted services)
  links: {
    portal: string;
    portalSignup: string;
    webcams: string;
    status: string;
    wiki: string;
    wikiPages: Record<
      | "tools"
      | "policies"
      | "orgStructure"
      | "findSomeone"
      | "gettingThere"
      | "dgrDonation"
      | "donationPolicy"
      | "fees"
      | "fairUse"
      | "lasercutterTools",
      string
    >;
    routes: Record<
      | "visit"
      | "events"
      | "workshops"
      | "facilities"
      | "signup"
      | "giftCards"
      | "mailingList"
      | "mediaPack"
      | "membership"
      | "contact"
      | "donate"
      | "privacy",
      string
    >;
  };
  // social/profile URLs for the site's Organization JSON-LD (`sameAs`). Empty is fine.
  sameAs?: readonly string[];
}

// --------------------------------------------------------
// primary navigation (the header link set). See src/config/navData.json.ts.
export interface NavLinkProps {
  label: string; // Title-case; uppercased in the UI (Press Start 2P)
  href: string; // trailing-slash route (astro.config `trailingSlash: "always"`)
}

// A nav entry is either a link, or a group: a label (not a link itself) that opens a dropdown of links.
export type NavItemProps =
  NavLinkProps | { label: string; children: readonly NavLinkProps[] };

// --------------------------------------------------------
// social platforms (label + glyph + how the URL resolves). See src/config/socialData.json.ts.
export interface SocialPlatformProps {
  label: string; // accessible name / chip label, e.g. "Twitter/X"
  // pixel-icon glyph name; omitted for a platform with no glyph in the pixel set
  icon?: PixelIconName;
  // host substring(s) identifying this platform inside siteData.sameAs
  match: string | readonly string[];
  // where the link points when sameAs has no match - a platform home page, not a profile
  fallback: string;
}

// --------------------------------------------------------
// legal pages (privacy), keyed by document
// a body entry: a plain string is a <p>; `subheading` an <h3>; `list` a <ul>
export type LegalBlock = string | { subheading: string } | { list: string[] };

export interface LegalSection {
  heading: string;
  body: LegalBlock[];
}

export interface LegalPageProps {
  title: string;
  description: string; // meta description (SEO)
  lastUpdated: string; // ISO date (YYYY-MM-DD); formatted at render via formatDate
  intro: string;
  introBlocks?: LegalBlock[]; // optional extra intro content (paragraphs / lists) after `intro`
  sections: LegalSection[];
}

// the documents the legalData file must provide
export type LegalData = Record<"privacy", LegalPageProps>;

// --------------------------------------------------------
// portfolio data (buyer-customized copy + values). See src/config/portfolioData.json.ts.
// Only the facts a buyer is expected to make their own - identity, biography, experience/stat values,
// the home intro, and the contact prompt. Presentational labels (SYS_SPECS, "Role:", stat colours)
// stay in their components. First-person singular voice throughout (one developer's portfolio).
export interface PortfolioDataProps {
  profile: {
    tagline: string; // About-hero badge, e.g. "Dev 01"
    heading: string; // About-hero H1
    role: string; // DevProfile ROLE value
    years: string; // DevProfile YRS value
    bio: readonly string[]; // About-hero biography, one <p> per entry
    shortBio: string; // home About-section bio
    meta: { location: string; role: string; favorite: string }; // home About-section meta values
    skills: readonly { label: string; pct: number }[]; // DevProfile HP-style skill bars
  };
  // Retro scoreboard values (home Stats strip + About-hero strip). Display text only; each strip's
  // per-stat colours live in its component and pair by order.
  stats: {
    home: readonly string[];
    profile: readonly string[];
  };
  home: { tagline: string; heading: string; intro: string }; // home hero
  contact: { prompt: string }; // home Contact-section prompt
}

// --------------------------------------------------------
// site settings
export interface SiteSettingsProps {
  useViewTransitions?: boolean;
  // master switch for the decorative motion layer (scroll-reveal via <Reveal>, etc.).
  // Independent of `prefers-reduced-motion`, which is always honored by the global guard in motion/index.css.
  useAnimations?: boolean;
}

// --------------------------------------------------------
// workshops. See src/config/workshopData.json.ts.
export interface WorkshopProps {
  slug: string; // /workshops/<slug>/
  title: string;
  listing: boolean; // show on the /workshops/ index (seasonal ones are detail-page only)
  listPrice?: string; // price line on the index card
  listDescription?: readonly string[]; // index card copy
  price: string; // detail page price line
  description: readonly string[]; // detail page intro paragraphs
  coverHeading: string; // "What we'll cover…" / "What is included…"
  covers: readonly string[];
  closing: readonly string[]; // paragraphs after the list
  accessibility: string;
  bookingId: string; // ClassBento booking-widget id
  unavailable?: boolean; // shows a "Currently unavailable" banner on the index card
}

// events (regular meetups). See src/config/eventData.json.ts.
export interface EventProps {
  slug: string; // /events/<slug>/
  title: string;
  summary: string; // one line for the index
  description: readonly string[];
  agendaIntro?: string;
  agenda?: readonly string[];
  closing: readonly string[];
  when: { date: string; time: string };
  eventbriteUrl?: string;
  facebookUrl?: string;
}
