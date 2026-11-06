globalThis.process ??= {};
globalThis.process.env ??= {};
import { B as getRenderOptions, D as escape, E as getResolvedLogger, F as FetchFeatures, H as getAmbientManifest, I as getUsedFeatures, L as markFeatureUsed, O as getDefaultStatusCode, P as ALL_FETCH_FEATURES, R as createCrossOriginForbiddenResponse, S as getEnvironment, T as getLogger, U as manifest, V as setRenderOptions, _ as handlePages, a as FetchState, b as getI18n, c as renderErrorFromState, d as handleCache, f as provideCache, g as updateRouteTable, h as matchRoute, k as getSetCookiesFromResponse, l as renderErrorPage, m as matchAllRoutes, n as getActionContext, o as computePathnameFromDomain, p as getRouteTable, r as serializeActionResult, s as handleMiddleware, u as provideSession, v as prepareResponse, w as validateAndDecodePathname, x as getRouteGenerator, y as finalizeI18n, z as isForbiddenCrossOriginRequest } from "./chunks/server_EGrafT3n.mjs";
import { Ht as LocalsNotAnObject, T as isRoute3xx, X as ASTRO_ERROR_HEADER, _ as removeTrailingForwardSlash, d as hasFileExtension, et as REROUTABLE_STATUS_CODES, f as isInternalPath, h as prependForwardSlash, i as AstroIntegrationLogger, l as collapseDuplicateTrailingSlashes, n as matchPattern, nt as clientAddressSymbol, o as appendForwardSlash, wt as AstroError, y as stripRequestBase } from "./chunks/remote_iGfF20G-.mjs";
import { r as setGetEnv } from "./chunks/runtime_BoS_rzMD.mjs";
import "./chunks/scope_DwWOLek-.mjs";
import "./chunks/image-binding-transform_gMjcyuE5.mjs";
import { env } from "cloudflare:workers";
// \0virtual:astro-cloudflare:config
var sessionKVBindingName = "SESSION";
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/invalid-encoding.js
/**
* Returns an empty `400 Bad Request` response when the request path was
* encoded too many times to fully decode, or is not valid percent-encoded
* UTF-8 (`state.invalidEncoding`), or `undefined` otherwise.
*
* Every entry point that routes the request or runs middleware calls this
* first, so composable pipelines reject the request the same way
* `handleRequest` does regardless of which handlers they include.
*/
function rejectInvalidEncoding(state) {
	if (state.invalidEncoding) return new Response(null, {
		status: 400,
		statusText: "Bad Request"
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/actions/handler.js
/**
* Handles Astro Action requests in both modes:
*
* - **RPC**: POST requests to `/_actions/<name>` (originating from the
*   generated JS client). Runs the action and returns the serialized result
*   as the response, so the caller can short-circuit rendering.
* - **Form**: POST requests with `?_action=<name>` targeting a page route
*   (originating from an HTML `<form action={actions.foo}>`). Runs the
*   action, stashes the result into `locals._actionPayload`, and returns
*   `undefined` so the caller continues to render the page.
*
* Non-action requests are a no-op (`undefined`).
*
* This handler is invoked at the bottom of the middleware chain, before
* page dispatch. That placement preserves the existing behavior where
* user middleware sees action requests and response finalization (cookies,
* sessions, etc.) runs around the action response.
*
* Expects the APIContext that is already being used by the render pipeline.
* Returns a `Response` when the action fully handles the request (RPC),
* or `undefined` when the caller should continue processing the request
* (form actions or non-action requests).
*/
function handleAction(apiContext, state) {
	markFeatureUsed(state.manifest, FetchFeatures.actions);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return Promise.resolve(invalidEncodingResponse);
	if (apiContext.isPrerendered) return;
	const { action, setActionResult } = getActionContext(apiContext);
	if (!action) return;
	if (state.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered)) return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
	return executeAction(action, setActionResult);
}
async function executeAction(action, setActionResult) {
	const actionResult = await action.handler();
	const serialized = serializeActionResult(actionResult);
	if (action.calledFrom === "rpc") {
		if (serialized.type === "empty") return new Response(null, { status: serialized.status });
		return new Response(serialized.body, {
			status: serialized.status,
			headers: { "Content-Type": serialized.contentType }
		});
	}
	setActionResult(action.name, serialized);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/3xx.js
/**
* Generates a minimal HTML redirect page used for SSR redirects.
*/
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
	const delay = status === 302 ? 2 : 0;
	const rel = escape(String(relativeLocation));
	return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/trailing-slash-handler.js
/**
* Handles trailing-slash normalization for incoming requests. If the
* request's pathname does not match the manifest's configured
* `trailingSlash` policy, a redirect `Response` is returned. Otherwise,
* returns `undefined` so the caller can continue processing the request.
* Paths encoded too many times to decode get a 400 instead of a redirect.
*/
function handleTrailingSlash(state) {
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const url = new URL(state.request.url);
	const redirect = redirectTrailingSlash(state.manifest.trailingSlash, url.pathname);
	if (redirect === url.pathname) return;
	const addCookieHeader = state.renderOptions.addCookieHeader;
	const status = state.request.method === "GET" ? 301 : 308;
	const location = redirect + url.search;
	const response = new Response(redirectTemplate({
		status,
		relativeLocation: location,
		absoluteLocation: location,
		from: state.request.url
	}), {
		status,
		headers: { location }
	});
	prepareResponse(response, { addCookieHeader });
	return response;
}
function redirectTrailingSlash(trailingSlash, pathname) {
	if (pathname === "/" || isInternalPath(pathname)) return pathname;
	const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
	if (path !== pathname) return path;
	if (trailingSlash === "ignore") return pathname;
	if (trailingSlash === "always" && !hasFileExtension(pathname)) return appendForwardSlash(pathname);
	if (trailingSlash === "never") return removeTrailingForwardSlash(pathname);
	return pathname;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/errors/not-found.js
/**
* Renders the 404 error page when no route matched the request, or returns
* `undefined` when a route matched. Returns an empty `400` when the request
* path is over-encoded.
*
* `FetchState` only falls back to an SSR `404.astro`, so this renders a
* prerendered (or absent) custom 404 page: through
* `renderOptions.prerenderedErrorPageFetch` in production, or by rendering
* the page source in dev.
*/
function handleNotFound(state) {
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return Promise.resolve(invalidEncodingResponse);
	if (state.routeData) return;
	return renderErrorFromState(state, state.request, {
		...state.renderOptions,
		status: 404,
		pathname: state.pathname
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/redirects/render.js
function isExternalURL(url) {
	return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
	if (typeof redirect === "string") return isExternalURL(redirect);
	else return isExternalURL(redirect.destination);
}
/**
* Computes the HTTP status code for a redirect response.
*
* - If the route has a `redirectRoute` and an explicit numeric status, that status is used.
* - Otherwise: GET → 301, non-GET (e.g. POST) → 308.
*/
function computeRedirectStatus(method, redirect, redirectRoute) {
	return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
/**
* Resolves the final redirect target URL by substituting dynamic params into
* the redirect string (e.g. `/[slug]/page` → `/hello/page`).
*
* When `redirectRoute` is provided its route generator is used; otherwise params
* are substituted manually into the string redirect target.
*/
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
	if (typeof redirectRoute !== "undefined") return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
	else if (typeof redirect === "string") {
		if (redirectIsExternal(redirect)) return redirect;
		else {
			let target = redirect;
			for (const param of Object.keys(params)) {
				const paramValue = params[param];
				target = target.replace(`[${param}]`, () => paramValue).replace(`[...${param}]`, () => paramValue);
			}
			return target;
		}
	} else if (typeof redirect === "undefined") return "/";
	return redirect.destination;
}
async function renderRedirect(state) {
	markFeatureUsed(state.manifest, FetchFeatures.redirects);
	const { redirect, redirectRoute } = state.routeData;
	const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
	const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.manifest.trailingSlash)) };
	if (redirect && redirectIsExternal(redirect)) {
		if (typeof redirect === "string") return Response.redirect(redirect, status);
		else return Response.redirect(redirect.destination, status);
	}
	return new Response(null, {
		status,
		headers
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/redirect-page.js
/** The delay Astro's built-in redirect page uses for `status`. */
function redirectDelayFor(status) {
	return status === 302 ? 2 : 0;
}
/**
* Renders the project's `src/pages/3xx.astro` as the body of a redirect,
* returning its HTML.
*
* Returns `undefined` when the project has no `3xx.astro`, or when rendering it
* fails — the caller falls back to Astro's built-in redirect page so a broken
* custom page degrades to a working redirect instead of failing the build.
*
* Middleware is skipped: it already ran for the request that produced the
* redirect, and re-running it around a template render would let a middleware
* that redirects recurse.
*/
async function renderRedirectPage(manifest, request, props) {
	const route = getRouteTable(manifest).routes.find((candidate) => isRoute3xx(candidate.route));
	if (!route) return;
	const state = new FetchState(manifest, request);
	try {
		state.skipMiddleware = true;
		state.routeData = route;
		state.pathname = route.route;
		state.status = 200;
		state.componentInstance = await getEnvironment(manifest).getComponentByRoute(manifest, route);
		state.initialProps = { ...props };
		return await (await handleMiddleware(state, handlePages)).text();
	} catch (err) {
		state.logger.error("redirects", `Failed to render \`src/pages/3xx.astro\` for the redirect from \`${props.from}\` to \`${props.to}\`. Falling back to the built-in redirect page.\n${err instanceof Error ? err.stack ?? err.message : String(err)}`);
		return;
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			state.logger.error("redirects", `Failed to finalize the \`src/pages/3xx.astro\` render for the redirect from \`${props.from}\` to \`${props.to}\`.\n${err instanceof Error ? err.stack ?? err.message : String(err)}`);
		}
	}
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/handler.js
/**
* Dispatches request logging: through the facade's late-bound
* `logThisRequest` hook when the state was built by `BaseApp.render`'s fast
* path (preserving subclass overrides), else through the environment's
* `logRequest` behavior (dev request lines; prod/build/container no-op).
*/
function logRequestFromState(state, payload) {
	if (state.logRequest) state.logRequest(payload);
	else getEnvironment(state.manifest).logRequest(state.manifest, payload);
}
/**
* Runs actions then pages — the callback at the bottom of the middleware
* chain. A module-level function so passing it by reference costs zero
* per-request allocation.
*/
function actionsAndPages(state, ctx) {
	if (!state.skipMiddleware) {
		const actionResult = handleAction(ctx, state);
		if (actionResult) return actionResult.then((response) => response ?? handlePages(state, ctx));
	}
	return handlePages(state, ctx);
}
/**
* Swaps a bodiless redirect response for one carrying the project's rendered
* `src/pages/3xx.astro`.
*
* Only the build environment opts in (see `RenderEnvironment.rendersRedirectPage`):
* a static site has no `Location` header to follow, so the HTML body is the
* redirect. Responses that already carry a body — the trailing-slash
* normalizer's, or a page that rendered its own — are left alone.
*/
async function withRedirectPageBody(state, response) {
	const status = response.status;
	if (status < 300 || status >= 400 || response.body !== null) return response;
	if (!getEnvironment(state.manifest).rendersRedirectPage()) return response;
	const to = response.headers.get("location");
	if (!to) return response;
	const html = await renderRedirectPage(state.manifest, state.request, {
		from: state.pathname,
		to,
		status,
		delay: redirectDelayFor(status)
	});
	if (html === void 0) return response;
	const headers = new Headers(response.headers);
	if (!headers.has("content-type")) headers.set("content-type", "text/html");
	return new Response(html, {
		status,
		statusText: response.statusText,
		headers
	});
}
/**
* The composite "batteries-included" handler that wires up every request
* feature internally; `astro(state)` (astro/fetch) delegates here, as does
* `BaseApp.render`'s default-handler fast path.
*/
async function handleRequest(state) {
	await getResolvedLogger(state.manifest);
	markFeatureUsed(state.manifest, ALL_FETCH_FEATURES);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const trailingSlashRedirect = handleTrailingSlash(state);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	const notFoundResponse = handleNotFound(state);
	if (notFoundResponse) return notFoundResponse;
	return render(state);
}
/**
* Renders a response for the given `FetchState`. Assumes trailing-slash
* redirects and routeData resolution have already run.
*
* User-triggered rewrites (`Astro.rewrite` / `ctx.rewrite`) go through
* `executeRewrite` on the current `FetchState` — they mutate the existing
* state in place and re-run middleware + page dispatch.
*/
async function render(state) {
	const routeData = state.routeData;
	const pathname = state.pathname;
	const request = state.request;
	const { addCookieHeader } = state.renderOptions;
	state.status = getDefaultStatusCode(state.manifest, routeData, pathname);
	let response;
	let finalizeError;
	try {
		const sessionP = state.manifest.sessionConfig ? provideSession(state) : void 0;
		const cacheP = provideCache(state);
		if (sessionP || cacheP) await Promise.all([sessionP, cacheP]);
		markFeatureUsed(state.manifest, FetchFeatures.sessions);
		if (routeData.type === "redirect") {
			const redirectResponse = await withRedirectPageBody(state, await renderRedirect(state));
			logRequestFromState(state, {
				pathname,
				method: request.method,
				statusCode: redirectResponse.status,
				isRewrite: false,
				timeStart: state.timeStart
			});
			prepareResponse(redirectResponse, { addCookieHeader });
			state.logger.flush();
			return redirectResponse;
		}
		const i18n = getI18n(state.manifest);
		if (!state.manifest.cacheProvider) {
			markFeatureUsed(state.manifest, FetchFeatures.cache);
			response = await handleMiddleware(state, actionsAndPages);
			if (i18n) response = await finalizeI18n(i18n, state, response);
		} else {
			const runPipeline = async () => {
				let res = await handleMiddleware(state, actionsAndPages);
				if (i18n) res = await finalizeI18n(i18n, state, res);
				return res;
			};
			response = await handleCache(state, runPipeline);
		}
		logRequestFromState(state, {
			pathname,
			method: request.method,
			statusCode: response.status,
			isRewrite: state.isRewriting,
			timeStart: state.timeStart
		});
	} catch (err) {
		state.logger.error(null, err.stack || err.message || String(err));
		return renderErrorFromState(state, request, {
			...state.renderOptions,
			status: 500,
			error: err,
			pathname: state.pathname
		});
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			finalizeError = err;
			state.logger.error(null, err.stack || err.message || String(err));
		}
	}
	if (finalizeError) return renderErrorFromState(state, request, {
		...state.renderOptions,
		status: 500,
		error: finalizeError,
		pathname: state.pathname
	});
	if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute) return renderErrorFromState(state, request, {
		...state.renderOptions,
		response,
		status: response.status,
		error: response.status === 500 ? null : void 0,
		pathname: state.pathname
	});
	response = await withRedirectPageBody(state, response);
	prepareResponse(response, { addCookieHeader });
	state.logger.flush();
	return response;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/fetch/default-handler.js
/**
* The default request handler for `BaseApp`. Stateless: builds the
* per-request `FetchState` from the manifest and delegates to
* `handleRequest`.
*
* The export path (`astro/app/fetch/default-handler`), the class name, and
* no-arg constructibility are baked into generated builds
* (`core/fetch/vite-plugin.ts` emits `new DefaultFetchHandler()`), so all
* three survive.
*/
var DefaultFetchHandler = class {
	#manifest;
	/**
	* `BaseApp` passes itself so states resolve that app's manifest ahead of
	* the ambient one; generated builds construct the handler with no
	* arguments and use the ambient manifest.
	*/
	constructor(app) {
		this.#manifest = app?.manifest;
	}
	fetch = (request) => {
		const options = getRenderOptions(request);
		const manifest = this.#manifest ?? getAmbientManifest();
		return handleRequest(new FetchState(manifest, request, options));
	};
};
// \0virtual:astro:fetchable
var _virtual_astro_fetchable_default = new DefaultFetchHandler();
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/routing/match-request.js
/**
* Fully decodes a pathname, falling back to a single decode and then the raw pathname
* when validation fails. Matching runs before `render()`, so it must not throw for
* request input that render-time validation handles.
*/
function safeDecodePathname(manifest, pathname) {
	try {
		return validateAndDecodePathname(pathname);
	} catch (e) {
		new AstroIntegrationLogger(getLogger(manifest).options, manifest.adapterName).debug(e.toString());
		try {
			return decodeURI(pathname);
		} catch {
			return pathname;
		}
	}
}
/**
* Given a `Request`, returns the `RouteData` that matches its pathname — the
* appless, purely functional body of `BaseApp.match()`. By default, prerendered
* routes aren't returned, even if they are matched; when
* `allowPrerenderedRoutes` is `true`, matched prerendered routes are returned
* too.
*/
function matchRequest(manifest, request, allowPrerenderedRoutes = false) {
	const url = new URL(request.url);
	if (manifest.assets.has(url.pathname)) return void 0;
	let pathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, manifest.allowedDomains, getLogger(manifest));
	if (!pathname) pathname = prependForwardSlash(stripRequestBase(url.pathname, manifest.base));
	pathname = safeDecodePathname(manifest, pathname);
	const routeData = matchRoute(manifest, pathname);
	if (!routeData) return void 0;
	if (allowPrerenderedRoutes) return routeData;
	if (routeData.prerender) {
		if (routeData.params.length > 0) return matchAllRoutes(manifest, pathname).find((r) => !r.prerender);
		return;
	}
	return routeData;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/app/base.js
var BaseApp = class BaseApp {
	manifest;
	#adapterLogger;
	baseWithoutTrailingSlash;
	/**
	* The streaming flag passed to the constructor, surfaced through the
	* protected `resolveStreaming()` hook and fed into the internal
	* `FetchState` facade hooks on the fast path.
	*/
	#streaming;
	/**
	* The handler that turns incoming `Request` objects into `Response`s.
	* Defaults to a `DefaultFetchHandler` pinned to this app and can be
	* overridden via `setFetchHandler` — typically by the bundled
	* entrypoint after importing `virtual:astro:fetchable`.
	*/
	#fetchHandler;
	#errorHandler;
	/**
	* Whether a custom fetch handler (from `src/fetch.ts`) has been set
	* via `setFetchHandler`. When false, the `DefaultFetchHandler` is
	* in use and all features are implicitly active.
	*/
	#hasCustomFetchHandler = false;
	/**
	* Whether the missing-feature check has already run. We only want
	* to warn once — after the first request in dev, or at build end.
	*/
	#featureCheckDone = false;
	get logger() {
		return getLogger(this.manifest);
	}
	/**
	* Route data derived from the manifest, used for route matching. Reads and
	* writes go through the single per-manifest route table, so HMR updates are
	* visible to every consumer at once.
	*/
	get manifestData() {
		return getRouteTable(this.manifest);
	}
	set manifestData(routesList) {
		updateRouteTable(this.manifest, routesList.routes);
	}
	get adapterLogger() {
		const currentOptions = this.logger.options;
		if (!this.#adapterLogger || this.#adapterLogger.options !== currentOptions) this.#adapterLogger = new AstroIntegrationLogger(currentOptions, this.manifest.adapterName);
		return this.#adapterLogger;
	}
	constructor(manifest, streaming = true) {
		this.manifest = manifest;
		this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest.base);
		this.#streaming = streaming;
		getRouteTable(manifest);
		getLogger(manifest);
		this.#fetchHandler = new DefaultFetchHandler(this);
		this.#errorHandler = this.createErrorHandler();
	}
	/**
	* Resolves the user-configured logger destination from the manifest and
	* returns the logger. Lazy and only resolves once; safe to call before
	* the first render (adapters use this to log startup messages through
	* the configured destination).
	*/
	getLogger() {
		return getResolvedLogger(this.manifest);
	}
	/**
	* The streaming flag fed into the internal `FetchState` facade hooks on
	* the fast path. Returns the constructor flag by
	* default; `BuildApp` overrides this to return `undefined` so streaming
	* falls through to the environment default (`manifest.serverLike`).
	*/
	resolveStreaming() {
		return this.#streaming;
	}
	/**
	* Override the fetch handler used to dispatch requests. Entrypoints
	* call this with the default export of `virtual:astro:fetchable` to
	* plug in a user-authored handler from `src/fetch.ts`.
	*/
	setFetchHandler(handler) {
		this.#fetchHandler = handler;
		this.#hasCustomFetchHandler = !(handler instanceof DefaultFetchHandler);
	}
	/**
	* Returns the error handler used by this app. The default is a thin
	* bridge over the functional error API — strategy selection (production
	* default / dev / build) is environment-driven inside `renderErrorPage`.
	* External subclasses can override this to customize error rendering.
	*/
	createErrorHandler() {
		return { renderError: (request, options) => renderErrorPage(this.manifest, request, options) };
	}
	/**
	* Resets the cached adapter logger so it picks up a new logger instance.
	* Used by BuildApp when the logger is replaced via setOptions().
	*/
	resetAdapterLogger() {
		this.#adapterLogger = void 0;
	}
	getAllowedDomains() {
		return this.manifest.allowedDomains;
	}
	matchesAllowedDomains(forwardedHost, protocol) {
		return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
	}
	static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
		if (!allowedDomains || allowedDomains.length === 0) return false;
		try {
			const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
			return allowedDomains.some((pattern) => {
				return matchPattern(testUrl, pattern);
			});
		} catch {
			return false;
		}
	}
	set setManifestData(newManifestData) {
		updateRouteTable(this.manifest, newManifestData.routes);
	}
	removeBase(pathname) {
		return stripRequestBase(pathname, this.manifest.base);
	}
	/**
	* Fully decodes a pathname, falling back to a single decode and then the raw pathname
	* when validation fails. Adapter matching runs before `render()`, so it must not throw
	* for request input that render-time validation handles.
	*/
	safeDecodePathname(pathname) {
		try {
			return validateAndDecodePathname(pathname);
		} catch (e) {
			this.adapterLogger.debug(e.toString());
			try {
				return decodeURI(pathname);
			} catch {
				return pathname;
			}
		}
	}
	/**
	* Extracts the base-stripped, decoded pathname from a request.
	* Used by adapters to compute the pathname for dev-mode route matching.
	*/
	getPathnameFromRequest(request) {
		const url = new URL(request.url);
		const pathname = prependForwardSlash(this.removeBase(url.pathname));
		return this.safeDecodePathname(pathname);
	}
	/**
	* Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
	* routes aren't returned, even if they are matched.
	*
	* When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
	* @param request
	* @param allowPrerenderedRoutes
	*/
	match(request, allowPrerenderedRoutes = false) {
		return matchRequest(this.manifest, request, allowPrerenderedRoutes);
	}
	/**
	* A matching route function to use in the development server.
	* Contrary to the `.match` function, this function resolves props and params, returning the correct
	* route based on the priority, segments. It also returns the correct, resolved pathname.
	* @param pathname
	*/
	devMatch(pathname) {}
	computePathnameFromDomain(request) {
		return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.manifest.allowedDomains, this.logger);
	}
	async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
		await getResolvedLogger(this.manifest);
		if (routeData) {
			this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
			this.logger.debug("router", "RouteData");
			this.logger.debug("router", routeData);
		}
		if (locals) {
			if (typeof locals !== "object") {
				const error = new AstroError(LocalsNotAnObject);
				this.logger.error(null, error.stack);
				return this.renderError(request, {
					addCookieHeader,
					clientAddress,
					prerenderedErrorPageFetch,
					locals: void 0,
					routeData,
					waitUntil,
					status: 500,
					error
				});
			}
		}
		if (!routeData) {
			const domainPathname = this.computePathnameFromDomain(request);
			if (domainPathname) routeData = matchRoute(this.manifest, this.safeDecodePathname(domainPathname));
		}
		const resolvedOptions = {
			addCookieHeader,
			clientAddress,
			prerenderedErrorPageFetch,
			locals,
			routeData,
			waitUntil
		};
		let response;
		if (this.#fetchHandler instanceof DefaultFetchHandler) response = await handleRequest(new FetchState(this.manifest, request, resolvedOptions, {
			streaming: this.resolveStreaming(),
			renderError: (req, opts) => this.renderError(req, opts),
			logRequest: (payload) => this.logThisRequest(payload)
		}));
		else {
			setRenderOptions(request, resolvedOptions);
			response = await this.#fetchHandler.fetch(request);
		}
		this.#warnMissingFeatures();
		if (response.headers.get("X-Astro-Error")) {
			response.headers.delete(ASTRO_ERROR_HEADER);
			return this.renderError(request, {
				addCookieHeader,
				clientAddress,
				prerenderedErrorPageFetch,
				locals,
				routeData,
				waitUntil,
				response,
				status: response.status,
				error: response.status === 500 ? null : void 0
			});
		}
		return response;
	}
	setCookieHeaders(response) {
		return getSetCookiesFromResponse(response);
	}
	/**
	* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
	* For example,
	* ```ts
	* for (const cookie_ of App.getSetCookieFromResponse(response)) {
	*     const cookie: string = cookie_
	* }
	* ```
	* @param response The response to read cookies from.
	* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
	*/
	static getSetCookieFromResponse = getSetCookiesFromResponse;
	/**
	* If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
	* This also handles pre-rendered /404 or /500 routes.
	*
	* Delegates to the app's configured `ErrorHandler`. To customize behavior
	* for a specific environment, override `createErrorHandler()` rather than
	* this method.
	*/
	async renderError(request, options) {
		return this.#errorHandler.renderError(request, options);
	}
	/**
	* One-shot check: after the first request with a custom `src/fetch.ts`,
	* compare `usedFeatures` against the manifest and warn about any
	* configured features the user's pipeline doesn't call.
	*/
	#warnMissingFeatures() {
		if (this.#featureCheckDone || !this.#hasCustomFetchHandler) return;
		this.#featureCheckDone = true;
		const manifest = this.manifest;
		const missing = [];
		const used = getUsedFeatures(this.manifest);
		if (manifest.routes.some((r) => r.routeData.type === "redirect") && !(used & FetchFeatures.redirects)) missing.push("redirects");
		if (manifest.sessionConfig && !(used & FetchFeatures.sessions)) missing.push("sessions");
		if (manifest.actions && !(used & FetchFeatures.actions)) missing.push("actions");
		if (manifest.middleware && !(used & FetchFeatures.middleware)) missing.push("middleware");
		if (manifest.i18n && manifest.i18n.strategy !== "manual" && !(used & FetchFeatures.i18n)) missing.push("i18n");
		if (manifest.cacheConfig && !(used & FetchFeatures.cache)) missing.push("cache");
		for (const feature of missing) this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless your fetch handler calls it.`);
	}
	getDefaultStatusCode(routeData, pathname) {
		return getDefaultStatusCode(this.manifest, routeData, pathname);
	}
	getManifest() {
		return this.manifest;
	}
	logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
		const timeEnd = performance.now();
		this.logRequest({
			pathname,
			method,
			statusCode,
			isRewrite,
			reqTime: timeEnd - timeStart
		});
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/app/app.js
var App = class extends BaseApp {
	isDev() {
		return false;
	}
	logRequest(_options) {}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/app/entrypoints/virtual/prod.js
var createApp$1 = ({ streaming } = {}) => {
	const app = new App(manifest, streaming);
	app.setFetchHandler(_virtual_astro_fetchable_default);
	return app;
};
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/core/app/entrypoints/virtual/index.js
var createApp = createApp$1;
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/utils/env.js
var createGetEnv = (env) => (key) => {
	const v = env[key];
	if (typeof v === "undefined" || typeof v === "string") return v;
	if (typeof v === "boolean" || typeof v === "number") return v.toString();
};
// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/request.js
/**
* Utilities for extracting information from `Request`
*/
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
}
var IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
/**
* Checks whether a string looks like an IP address (contains only characters
* that can appear in IPv4/IPv6 addresses and is within a reasonable length).
*
* This is a permissive allowlist — it won't catch every malformed IP, but it
* reliably rejects injection payloads. Does NOT use Node.js APIs so it works
* in all runtimes (Workers, Deno, etc.).
*/
function isValidIpAddress(value) {
	return IP_RE.test(value);
}
/**
* Extracts the first value from a potentially multi-value header and validates
* that it is a syntactically valid IP address.
*
* Useful for adapters that read client IP from a platform-specific header
*/
function getValidatedIpFromHeader(headerValue) {
	const raw = getFirstForwardedValue(headerValue);
	if (raw && isValidIpAddress(raw)) return raw;
}
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/utils/cf-helpers.js
/**
* Pure Cloudflare helpers with no virtual module dependencies.
* Shared by `handler.ts`, `@astrojs/cloudflare/fetch`, and `@astrojs/cloudflare/hono`.
* Testable without a Vite build context.
*/
/**
* Returns a `Response` from the ASSETS binding if the request pathname
* is a known static asset. Returns `undefined` otherwise.
*/
function matchStaticAsset(manifest, requestUrl, env) {
	const { pathname } = new URL(requestUrl);
	if (manifest.assets.has(pathname)) return env.ASSETS.fetch(requestUrl.replace(/\.html$/, ""));
}
/**
* Tries the ASSETS binding as a fallback for an unmatched route.
* Returns the asset `Response` if found (non-404), `undefined` otherwise.
*/
async function fallbackToAssets(requestUrl, env) {
	const asset = await env.ASSETS.fetch(requestUrl.replace(/index.html$/, "").replace(/\.html$/, ""));
	if (asset.status !== 404) return asset;
}
/**
* Creates a fetch function for prerendered error pages via the ASSETS binding.
*/
function createErrorPageFetch(env) {
	return async (url) => {
		return env.ASSETS.fetch(url.replace(/\.html$/, ""));
	};
}
/**
* Creates the Cloudflare-specific locals object with `cfContext`
* and deprecated `runtime` property getters.
*/
function createLocals(ctx) {
	const locals = { cfContext: ctx };
	Object.defineProperty(locals, "runtime", {
		enumerable: false,
		value: {
			get env() {
				throw new Error(`Astro.locals.runtime.env has been removed in Astro v6. Use 'import { env } from "cloudflare:workers"' instead.`);
			},
			get cf() {
				throw new Error(`Astro.locals.runtime.cf has been removed in Astro v6. Use 'Astro.request.cf' instead.`);
			},
			get caches() {
				throw new Error(`Astro.locals.runtime.caches has been removed in Astro v6. Use the global 'caches' object instead.`);
			},
			get ctx() {
				throw new Error(`Astro.locals.runtime.ctx has been removed in Astro v6. Use 'Astro.locals.cfContext' instead.`);
			}
		}
	});
	return locals;
}
/**
* Extracts the client IP address from the `cf-connecting-ip` header.
*/
function getClientAddress(request) {
	return getValidatedIpFromHeader(request.headers.get("cf-connecting-ip"));
}
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/utils/cf.js
/**
* Shared Cloudflare helpers used by `handler.ts` (the `handle()` entrypoint),
* `@astrojs/cloudflare/fetch`, and `@astrojs/cloudflare/hono`.
*
* Re-exports all pure helpers from `cf-helpers.ts` and adds
* `injectSessionBinding` which depends on the virtual module.
*/
/**
* Injects the SESSION KV binding into the app manifest's session config.
* Idempotent — safe to call on every request.
*/
function injectSessionBinding(manifest, env) {
	if (env["SESSION"]) {
		const sessionConfigOptions = manifest.sessionConfig?.options ?? {};
		Object.assign(sessionConfigOptions, { binding: env[sessionKVBindingName] });
	}
}
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/utils/response.js
function applyCloudflareResponseHeaders(response, setCookieHeaders, cacheProviderEnabled) {
	const cookies = [...setCookieHeaders];
	const needsNoStoreDefault = cacheProviderEnabled && !response.headers.has("Cloudflare-CDN-Cache-Control");
	if (cookies.length > 0 || needsNoStoreDefault) {
		const applyHeaders = (target) => {
			for (const cookie of cookies) target.headers.append("Set-Cookie", cookie);
			if (needsNoStoreDefault) target.headers.set("Cloudflare-CDN-Cache-Control", "no-store");
		};
		try {
			applyHeaders(response);
		} catch {
			response = new Response(response.body, response);
			applyHeaders(response);
		}
	}
	return response;
}
// node_modules/.pnpm/@astrojs+cloudflare@14.4.6_@types+node@24.13.3_astro@7.4.7_@types+node@24.13.3_esbuild@_5ba0aedf6df59cc07bd17d12363f3c96/node_modules/@astrojs/cloudflare/dist/utils/handler.js
setGetEnv(createGetEnv(env));
var app = createApp();
async function handle(request, env, context) {
	injectSessionBinding(app.manifest, env);
	const staticAsset = matchStaticAsset(app.manifest, request.url, env);
	if (staticAsset) return staticAsset;
	let routeData = void 0;
	if (app.isDev()) {
		const result = await app.devMatch(app.getPathnameFromRequest(request));
		if (result) routeData = result.routeData;
	} else routeData = app.match(request);
	if (!routeData) {
		const asset = await fallbackToAssets(request.url, env);
		if (asset) return asset;
	}
	const locals = createLocals(context);
	const waitUntil = context.waitUntil.bind(context);
	const response = await app.render(request, {
		routeData,
		locals,
		waitUntil,
		prerenderedErrorPageFetch: createErrorPageFetch(env),
		clientAddress: getClientAddress(request)
	});
	return applyCloudflareResponseHeaders(response, app.setCookieHeaders ? [...app.setCookieHeaders(response)] : [], false);
}
// \0virtual:cloudflare/worker-entry
var worker_entry_default = { fetch: handle };
export { worker_entry_default as default };

//# sourceMappingURL=entry.mjs.map