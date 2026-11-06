/**
 * * Community policy links - the Safe Space Policy and Code of Conduct, hosted on the community wiki.
 *
 * One definition shared by every place that links to them (the footer's bottom-right legal spot and
 * the About page), so a URL or label changes in one edit. They are absolute URLs on another host, so
 * consumers open them in a new tab.
 */
export interface PolicyLink {
  label: string;
  href: string;
}

export const policyLinks = {
  safeSpace: {
    label: "Safe Space Policy",
    href: "https://wiki.brisbanemaker.space/bylaws/safespace",
  },
  codeOfConduct: {
    label: "Code of Conduct",
    href: "https://wiki.brisbanemaker.space/bylaws/coc",
  },
} as const satisfies Record<string, PolicyLink>;

/** The policies in the order the footer shows them. */
export const policyLinkList: readonly PolicyLink[] = [
  policyLinks.safeSpace,
  policyLinks.codeOfConduct,
];
