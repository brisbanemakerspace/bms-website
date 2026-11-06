globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as spamReason, n as buildEmail, o as siteData, r as contactSchema } from "./_astro_actions_BjcUx3jW.mjs";
import { A as ActionError, t as defineAction } from "./server_CrEIlFfA.mjs";
import { i as setOnSetGetEnv, n as getEnv$1, t as createInvalidVariablesError } from "./runtime_BoS_rzMD.mjs";
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/env/validators.js
function getEnvFieldType(options) {
	const optional = options.optional ? options.default !== void 0 ? false : true : false;
	let type;
	if (options.type === "enum") type = options.values.map((v) => `'${v}'`).join(" | ");
	else type = options.type;
	return `${type}${optional ? " | undefined" : ""}`;
}
var stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
	if (typeof input !== "string") return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (max !== void 0 && !(input.length <= max)) errors.push("max");
	if (min !== void 0 && !(input.length >= min)) errors.push("min");
	if (length !== void 0 && !(input.length === length)) errors.push("length");
	if (url !== void 0 && !URL.canParse(input)) errors.push("url");
	if (includes !== void 0 && !input.includes(includes)) errors.push("includes");
	if (startsWith !== void 0 && !input.startsWith(startsWith)) errors.push("startsWith");
	if (endsWith !== void 0 && !input.endsWith(endsWith)) errors.push("endsWith");
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: input
	};
};
var numberValidator = ({ gt, min, lt, max, int }) => (input) => {
	const num = Number.parseFloat(input ?? "");
	if (isNaN(num)) return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (gt !== void 0 && !(num > gt)) errors.push("gt");
	if (min !== void 0 && !(num >= min)) errors.push("min");
	if (lt !== void 0 && !(num < lt)) errors.push("lt");
	if (max !== void 0 && !(num <= max)) errors.push("max");
	if (int !== void 0) {
		const isInt = Number.isInteger(num);
		if (!(int ? isInt : !isInt)) errors.push("int");
	}
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: num
	};
};
var booleanValidator = (input) => {
	const bool = input === "true" ? true : input === "false" ? false : void 0;
	if (typeof bool !== "boolean") return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: bool
	};
};
var enumValidator = ({ values }) => (input) => {
	if (!(typeof input === "string" ? values.includes(input) : false)) return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: input
	};
};
function selectValidator(options) {
	switch (options.type) {
		case "string": return stringValidator(options);
		case "number": return numberValidator(options);
		case "boolean": return booleanValidator;
		case "enum": return enumValidator(options);
	}
}
function validateEnvVariable(value, options) {
	const isOptional = options.optional || options.default !== void 0;
	if (isOptional && value === void 0) return {
		ok: true,
		value: options.default
	};
	if (!isOptional && value === void 0) return {
		ok: false,
		errors: ["missing"]
	};
	return selectValidator(options)(value);
}
// src/js/resend.ts
var RESEND_ENDPOINT = "https://api.resend.com/emails";
/** Cap a hung request; Resend is usually sub-second. */
var SEND_TIMEOUT_MS = 1e4;
/**
* * POST the built email to Resend and classify the outcome. Never throws.
* @returns `{ ok: true }` on a 2xx, else a failure describing why (for logging + a generic reply).
*/
async function sendContactEmail(email, config, { fetchImpl = fetch, timeoutMs = SEND_TIMEOUT_MS } = {}) {
	let res;
	try {
		res = await fetchImpl(RESEND_ENDPOINT, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${config.apiKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				from: config.from,
				to: config.to,
				subject: email.subject,
				html: email.html,
				reply_to: email.replyTo
			}),
			signal: AbortSignal.timeout(timeoutMs)
		});
	} catch (e) {
		return {
			ok: false,
			reason: "network",
			detail: e instanceof Error ? e.message : String(e)
		};
	}
	if (!res.ok) {
		const detail = await res.text().catch(() => "");
		return {
			ok: false,
			reason: "provider",
			status: res.status,
			detail
		};
	}
	return { ok: true };
}
// \0virtual:astro:env/internal
var schema = {
	"RESEND_API_KEY": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"CONTACT_TO_EMAIL": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"CONTACT_FROM_EMAIL": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"CONTACT_DEMO_MODE": {
		"context": "server",
		"access": "public",
		"optional": true,
		"default": false,
		"type": "boolean"
	}
};
// \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === "" ? void 0 : rawVariable;
	const options = schema[key];
	const result = validateEnvVariable(variable, options);
	if (result.ok) return result.value;
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};
setOnSetGetEnv(() => {
	RESEND_API_KEY = _internalGetSecret("RESEND_API_KEY");
	CONTACT_TO_EMAIL = _internalGetSecret("CONTACT_TO_EMAIL");
	CONTACT_FROM_EMAIL = _internalGetSecret("CONTACT_FROM_EMAIL");
});
var RESEND_API_KEY = _internalGetSecret("RESEND_API_KEY");
var CONTACT_TO_EMAIL = _internalGetSecret("CONTACT_TO_EMAIL");
var CONTACT_FROM_EMAIL = _internalGetSecret("CONTACT_FROM_EMAIL");
// src/actions/index.ts
/**
* * Astro Actions - the one server mutation in 8-BitQuest: the contact form.
*
* `accept: "form"` binds the action to a native `<form method="POST">`, so it works with JavaScript
* disabled: the browser posts real FormData, Astro runs `contactSchema` first (the handler starts
* from valid data), and `/contact/` re-renders with the result. Non-validation failures are thrown as
* `ActionError`s whose message the page surfaces in one `role="alert"`; validation failures surface
* per-field via `isInputError`. The Resend send itself lives in `@js/resend` (a tested, framework-free
* boundary); here we translate its result - logging the provider detail server-side (it can name the
* account, so it never reaches the visitor) and throwing a generic ActionError on any failure.
*/
var server = { contact: defineAction({
	accept: "form",
	input: contactSchema,
	handler: async (input) => {
		const reason = spamReason(input);
		if (reason) throw new ActionError({
			code: "BAD_REQUEST",
			message: reason
		});
		const apiKey = RESEND_API_KEY;
		const to = CONTACT_TO_EMAIL;
		if (!apiKey || !to) {
			const missing = [!apiKey && "RESEND_API_KEY", !to && "CONTACT_TO_EMAIL"].filter(Boolean);
			console.error(`[contact] Not configured - set ${missing.join(" and ")} (see .env.example). On Cloudflare: pnpm wrangler secret put <NAME>.`);
			throw new ActionError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Your message could not be sent. Please email me directly."
			});
		}
		const from = CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
		const result = await sendContactEmail(buildEmail(input, siteData.name), {
			apiKey,
			to,
			from
		});
		if (!result.ok) {
			const context = result.reason === "provider" ? `provider ${result.status}` : result.reason;
			console.error(`[contact] Resend send failed (${context}):`, result.detail);
			throw new ActionError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Your message could not be sent. Please email me directly."
			});
		}
		return { ok: true };
	}
}) };
export { server };

//# sourceMappingURL=entrypoint_DeC9oLX-.mjs.map