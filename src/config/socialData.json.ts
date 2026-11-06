import type { PixelIconName } from "@components/svg/pixel-icons";
import { socialUrl } from "@js/social";

import siteData from "./siteData.json";
import { type SocialPlatformProps } from "./types/configDataTypes";

/** Every platform a section may ask for. */
export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "discord"
  | "facebook"
  | "instagram";

/**
 * * Social platforms - one definition per platform, resolved against `siteData.sameAs`.
 *
 * Previously the footer, the home Contact section and the contact InfoCards each carried their own
 * platform list, so a platform's label, glyph and URL derivation existed in three places and a change
 * to any of them was a three-file edit. They live here now; a section still chooses WHICH platforms it
 * shows (that is genuinely per-section), but never how one resolves.
 *
 * `match` is the host substring(s) that identify the platform inside `sameAs`; `fallback` is where the
 * link points when `sameAs` has no match. **A buyer who leaves `sameAs` empty gets the fallbacks -
 * bare platform home pages, not profiles.** That is deliberate (a dead link to your own handle is
 * worse than a link to the platform), but it means filling `sameAs` is a launch task, not a nicety.
 * See the README's "Before you deploy".
 *
 * **Every entry is optional.** Comment a platform out (or delete it) and it simply stops rendering:
 * `socialHref` / `socialLink` return `undefined` for it and each section skips it.
 */
export const socialPlatforms: Partial<
  Record<SocialPlatform, SocialPlatformProps>
> = {
  github: {
    label: "GitHub",
    icon: "github",
    match: "github.com",
    fallback: "https://github.com/brisbanemakerspace/",
  },
  // linkedin: {
  //   label: "LinkedIn",
  //   icon: "linkedin",
  //   match: "linkedin.com",
  //   fallback: "https://www.linkedin.com/",
  // },
  // `author.twitter` wins when set, because a handle is more specific than a sameAs host match.
  // twitter: {
  //   label: "Twitter/X",
  //   icon: "twitter",
  //   match: ["x.com", "twitter.com"],
  //   fallback: "https://x.com/",
  // },
  // youtube: {
  //   label: "YouTube",
  //   icon: "youtube",
  //   match: "youtube.com",
  //   fallback: "https://www.youtube.com/",
  // },
  facebook: {
    label: "Facebook",
    icon: "facebook",
    match: "facebook.com",
    fallback: "https://www.facebook.com/brisbanemakerspace",
  },
  instagram: {
    label: "Instagram",
    icon: "instagram",
    match: "instagram.com",
    fallback: "https://www.instagram.com/brisbanemakerspace/",
  },
  discord: {
    label: "Discord",
    icon: "discord",
    match: ["discord.gg", "discord.com"],
    fallback: "https://discord.brisbanemaker.space/",
  },
};

/**
 * * Resolve a platform's destination URL.
 *
 * The one derivation every section shares: the first matching `sameAs` entry, else the platform's
 * fallback. Twitter/X additionally prefers `siteData.author.twitter` when the buyer set a handle.
 *
 * @param platform a {@link SocialPlatform}
 * @returns an absolute URL, or `undefined` when the platform isn't configured in `socialPlatforms`
 */
export function socialHref(platform: SocialPlatform): string | undefined {
  const config = socialPlatforms[platform];
  if (!config) return undefined;
  if (platform === "twitter" && siteData.author.twitter) {
    return `https://x.com/${siteData.author.twitter}`;
  }
  return socialUrl(siteData.sameAs, config.match, config.fallback);
}

/**
 * A platform's label + glyph + resolved href - the shape the footer row and home chips render.
 * `undefined` when the platform isn't configured or has no pixel glyph, so callers just filter it out.
 */
export function socialLink(platform: SocialPlatform):
  | {
      name: PixelIconName;
      label: string;
      href: string;
    }
  | undefined {
  const config = socialPlatforms[platform];
  const href = socialHref(platform);
  if (!config?.icon || !href) return undefined;
  return { name: config.icon, label: config.label, href };
}
