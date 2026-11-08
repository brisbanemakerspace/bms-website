import { type NavItemProps } from "./types/configDataTypes";

/**
 * * Primary navigation - the header's link set, laid out like the old brisbanemaker.space menu:
 * VISIT · MEMBERSHIP · WORKSHOPS · ABOUT (a dropdown: Facilities, Contact, About, Events, Brand and Logo Guidelines) · DONATE.
 *
 * Labels are Title-case and uppercased in the UI (Press Start 2P). Hrefs carry the trailing slash
 * to match `astro.config.mjs` `trailingSlash: "always"`. An entry with `children` is a dropdown group
 * on desktop (its label isn't a link); the mobile drawer lists the children inline. Home is
 * intentionally not a nav item - the brand wordmark (Header.astro `<a href="/">`) is the home link.
 * Pages without a nav entry (Projects, Blog, Signup, Gift cards, Mailing list) are linked
 * from elsewhere on the site.
 */
export const navItems = [
  { label: "Visit", href: "/visit/" },
  { label: "Membership", href: "/membership/" },
  { label: "Workshops", href: "/workshops/" },
  { label: "Donate", href: "/donate/" },
  {
    label: "About",
    children: [
      { label: "Facilities", href: "/facilities/" },
      { label: "Contact", href: "/contact/" },
      { label: "About", href: "/about/" },
      { label: "Events", href: "/events/" },
      { label: "Logos", href: "/brand-guidelines/" },
    ],
  },
] as const satisfies readonly NavItemProps[];
