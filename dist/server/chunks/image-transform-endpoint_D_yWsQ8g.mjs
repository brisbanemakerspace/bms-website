globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_COXxpbMV.mjs";
import { t as transform } from "./image-binding-transform_gMjcyuE5.mjs";
import { env } from "cloudflare:workers";
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/entrypoints/image-transform-endpoint.js
var image_transform_endpoint_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async (ctx) => {
	const cache = caches.default;
	if (cache) {
		const cached = await cache.match(ctx.request.url);
		if (cached) return cached;
	}
	const response = await transform(ctx.request.url, env.IMAGES, env.ASSETS);
	if (!response.ok) return response;
	const headers = new Headers(response.headers);
	headers.set("Cache-Control", "public, max-age=31536000, immutable");
	const cachedResponse = new Response(response.body, {
		status: response.status,
		headers
	});
	if (cache) {
		const cfContext = ctx.locals.cfContext;
		if (cfContext) cfContext.waitUntil(cache.put(ctx.request.url, cachedResponse.clone()));
	}
	return cachedResponse;
};
// \0virtual:astro:page:node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/entrypoints/image-transform-endpoint@_@js
var page = () => image_transform_endpoint_exports;
export { page };

//# sourceMappingURL=image-transform-endpoint_D_yWsQ8g.mjs.map