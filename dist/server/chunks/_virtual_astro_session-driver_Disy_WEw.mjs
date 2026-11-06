globalThis.process ??= {};
globalThis.process.env ??= {};
// node_modules/.pnpm/unstorage@1.17.6_idb-keyval@6.2.6/node_modules/unstorage/drivers/utils/index.mjs
function defineDriver(factory) {
	return factory;
}
function normalizeKey(key, sep = ":") {
	if (!key) return "";
	return key.replace(/[:/\\]/g, sep).replace(/^[:/\\]|[:/\\]$/g, "");
}
function joinKeys(...keys) {
	return keys.map((key) => normalizeKey(key)).filter(Boolean).join(":");
}
function createError(driver, message, opts) {
	const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
	if (Error.captureStackTrace) Error.captureStackTrace(err, createError);
	return err;
}
// node_modules/.pnpm/unstorage@1.17.6_idb-keyval@6.2.6/node_modules/unstorage/drivers/utils/cloudflare.mjs
function getBinding(binding) {
	let bindingName = "[binding]";
	if (typeof binding === "string") {
		bindingName = binding;
		binding = globalThis[bindingName] || globalThis.__env__?.[bindingName];
	}
	if (!binding) throw createError("cloudflare", `Invalid binding \`${bindingName}\`: \`${binding}\``);
	for (const key of [
		"get",
		"put",
		"delete"
	]) if (!(key in binding)) throw createError("cloudflare", `Invalid binding \`${bindingName}\`: \`${key}\` key is missing`);
	return binding;
}
function getKVBinding(binding = "STORAGE") {
	return getBinding(binding);
}
// node_modules/.pnpm/unstorage@1.17.6_idb-keyval@6.2.6/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs
var DRIVER_NAME = "cloudflare-kv-binding";
// \0virtual:astro:session-driver
var _virtual_astro_session_driver_default = defineDriver((opts) => {
	const r = (key = "") => opts.base ? joinKeys(opts.base, key) : key;
	async function getKeys(base = "") {
		const prefix = joinKeys(opts.base || "", base);
		const binding = getKVBinding(opts.binding);
		const keys = [];
		let cursor = void 0;
		do {
			const kvList = await binding.list({
				prefix: prefix ? `${prefix}:` : void 0,
				cursor
			});
			keys.push(...kvList.keys);
			cursor = kvList.list_complete ? void 0 : kvList.cursor;
		} while (cursor);
		return keys.map((key) => key.name);
	}
	return {
		name: DRIVER_NAME,
		options: opts,
		getInstance: () => getKVBinding(opts.binding),
		async hasItem(key) {
			key = r(key);
			return await getKVBinding(opts.binding).get(key) !== null;
		},
		getItem(key) {
			key = r(key);
			return getKVBinding(opts.binding).get(key);
		},
		setItem(key, value, topts) {
			key = r(key);
			return getKVBinding(opts.binding).put(key, value, topts ? {
				expirationTtl: topts?.ttl ? Math.max(topts.ttl, opts.minTTL ?? 60) : void 0,
				...topts
			} : void 0);
		},
		removeItem(key) {
			key = r(key);
			return getKVBinding(opts.binding).delete(key);
		},
		getKeys(base) {
			return getKeys(base).then((keys) => keys.map((key) => opts.base ? key.slice(opts.base.length) : key));
		},
		async clear(base) {
			const binding = getKVBinding(opts.binding);
			const keys = await getKeys(base);
			await Promise.all(keys.map((key) => binding.delete(key)));
		}
	};
});
export { _virtual_astro_session_driver_default as default };

//# sourceMappingURL=_virtual_astro_session-driver_Disy_WEw.mjs.map