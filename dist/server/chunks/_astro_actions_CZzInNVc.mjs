globalThis.process ??= {};
globalThis.process.env ??= {};
import { Dt as ActionCalledFromServerError, dt as object, ft as string, lt as ZodNumber, pt as _coercedNumber, rt as fetchStateSymbol, ut as email, wt as AstroError } from "./remote_iGfF20G-.mjs";
import { M as createGetActionPath, i as getAction, j as createActionsProxy } from "./server_EGrafT3n.mjs";
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/coerce.js
function number(params) {
	return _coercedNumber(ZodNumber, params);
}
// src/config/siteData.json.ts
var siteData = {
	name: "8-BitQuest",
	title: "8-BitQuest — retro pixel-art dev portfolio",
	description: "A retro 8-bit, pixel-art developer portfolio built on Astro 7 and a CSS-first Tailwind v4 token system.",
	author: {
		name: "Your Name",
		email: "you@example.com",
		twitter: ""
	},
	defaultImage: {
		src: "/og.jpg",
		alt: "8-BitQuest"
	},
	sameAs: []
};
// src/js/contact.ts
/**
* * Contact form — the trust boundary.
*
* Pure and framework-free on purpose: no `import.meta.env`, no `fetch`, no Astro imports — so it
* type-strips for `pnpm test` and the action handler (`src/actions/index.ts`) starts from data that
* is already validated and, for the email, already escaped. One Zod schema is the ONLY definition of
* a valid submission; the action re-runs it, never trusts the client.
*/
/**
* Reject CR/LF: `name` and `subject` are the two fields that reach a mail header (the subject line),
* so a line break in either is a header-injection attempt. We reject rather than strip so the visitor
* sees why.
*/
var noLineBreaks = (value) => !/[\r\n]/.test(value);
/** The single source of truth for a valid submission. The two hidden fields feed the spam gates. */
var contactSchema = object({
	name: string().trim().min(1, "Enter your name, player.").max(100, "That name is too long.").refine(noLineBreaks, "Line breaks are not allowed here."),
	email: string().trim().pipe(email("Please enter a valid email address.").max(254)),
	subject: string().trim().min(1, "Give your transmission a subject.").max(150, "That subject is too long.").refine(noLineBreaks, "Line breaks are not allowed here."),
	message: string().trim().min(10, "Tell me a little more than that.").max(5e3, "That transmission is too long."),
	/** Honeypot — permissive on purpose, so a filled value becomes a readable form-level rejection. */
	_gotcha: string().optional(),
	/** Render timestamp for the time gate; coerced from the hidden field's string. */
	_ts: number().int().positive()
});
/**
* * Pull the visitor's submitted values back out of a raw `FormData`, so a validation failure
* re-renders the form filled in rather than blank.
*
* Needed because Astro's `isInputError(error)` exposes `.fields` — the messages — but never the input
* that produced them. Without this a bad email address discards up to 5000 characters of message,
* which is exactly the no-JS path the template advertises.
*
* The two hidden fields are excluded on purpose, not by omission: echoing `_gotcha` back would defeat
* the honeypot on the retry, and `_ts` must carry the CURRENT render's timestamp or the time gate
* rejects every resubmission of a form that was slow to fill.
*
* @param form the submitted FormData, or `null` on a fresh GET render
* @returns every repopulated field as a string — `""` where absent or where the entry was a File
*/
function repopulate(form) {
	const read = (name) => {
		const value = form?.get(name);
		return typeof value === "string" ? value : "";
	};
	return {
		name: read("name"),
		email: read("email"),
		subject: read("subject"),
		message: read("message")
	};
}
/**
* * Spam gates, cheapest first: honeypot then time. Both judged server-clock to server-clock, never
* the visitor's device. Returns a rejection reason, or `null` to proceed.
*
* The time gate has no upper bound (a form left open an hour still submits) and `_ts` is a forgeable
* hidden field: this stops drive-by bots, not a targeted attacker. `ponytail:` ceiling — add
* Cloudflare Turnstile (both keys or neither) if drive-by volume becomes a problem; it costs the
* no-JS path, so it's deliberately left out here.
*
* @param fields the two hidden anti-spam fields
* @param now    current epoch ms (injectable for the self-check)
* @returns a reason string to reject, or `null` when the submission clears both gates
*/
function spamReason({ _gotcha, _ts }, now = Date.now()) {
	if (_gotcha) return "Message rejected.";
	if (now - _ts < 3e3) return "That was quick — please take another look and resend.";
	return null;
}
/** Escape the five HTML-significant characters so a field can't inject markup into the email body. */
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
/**
* * Build the email subject + HTML body from validated fields. Header-safe (`name`/`subject` carry no
* line breaks, enforced by the schema) and body-safe (every interpolation is HTML-escaped).
*
* @param fields   the validated name/email/subject/message
* @param siteName the brand, prefixed to the subject line (passed in to keep this module config-free)
*/
function buildEmail({ name, email, subject, message }, siteName) {
	return {
		subject: `[${siteName}] ${subject} — ${name}`,
		replyTo: email,
		html: [
			`<h2>New transmission from ${escapeHtml(name)}</h2>`,
			`<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
			`<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
			`<p><strong>Message:</strong></p>`,
			`<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`
		].join("\n")
	};
}
createGetActionPath({
	baseUrl: "/",
	shouldAppendTrailingSlash: true
});
var actions = createActionsProxy({ handleAction: async (param, path, context) => {
	const state = context ? Reflect.get(context, fetchStateSymbol) : void 0;
	if (!state) throw new AstroError(ActionCalledFromServerError);
	const action = await getAction(state.manifest, path);
	if (!action) throw new Error(`Action not found: ${path}`);
	return action.bind(context)(param);
} });
export { spamReason as a, repopulate as i, buildEmail as n, siteData as o, contactSchema as r, actions as t };

//# sourceMappingURL=_astro_actions_CZzInNVc.mjs.map