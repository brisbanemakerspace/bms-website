globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_COXxpbMV.mjs";
import { n as getActionContext } from "./server_EGrafT3n.mjs";
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/actions/runtime/entrypoints/route.js
var route_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async (context) => {
	const { action, serializeActionResult } = getActionContext(context);
	if (action?.calledFrom !== "rpc") return new Response("Not found", { status: 404 });
	const serialized = serializeActionResult(await action.handler());
	if (serialized.type === "empty") return new Response(null, { status: serialized.status });
	return new Response(serialized.body, {
		status: serialized.status,
		headers: { "Content-Type": serialized.contentType }
	});
};
// \0virtual:astro:page:node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/actions/runtime/entrypoints/route@_@js
var page = () => route_exports;
export { page };

//# sourceMappingURL=route_D3qAjQif.mjs.map