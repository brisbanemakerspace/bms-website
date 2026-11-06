globalThis.process ??= {};
globalThis.process.env ??= {};
import { Nt as EnvInvalidVariables, wt as AstroError } from "./remote_iGfF20G-.mjs";
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/env/errors.js
function invalidVariablesToError(invalid) {
	const _errors = [];
	for (const { key, type, errors } of invalid) if (errors[0] === "missing") _errors.push(`${key} is missing`);
	else if (errors[0] === "type") _errors.push(`${key}'s type is invalid, expected: ${type}`);
	else _errors.push(`The following constraints for ${key} are not met: ${errors.join(", ")}`);
	return _errors;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/env/runtime.js
var _getEnv = (key) => process.env[key];
function setGetEnv(fn) {
	_getEnv = fn;
	_onSetGetEnv();
}
var _onSetGetEnv = () => {};
function setOnSetGetEnv(fn) {
	_onSetGetEnv = fn;
}
function getEnv(...args) {
	return _getEnv(...args);
}
function createInvalidVariablesError(key, type, result) {
	return new AstroError({
		...EnvInvalidVariables,
		message: EnvInvalidVariables.message(invalidVariablesToError([{
			key,
			type,
			errors: result.errors
		}]))
	});
}
export { setOnSetGetEnv as i, getEnv as n, setGetEnv as r, createInvalidVariablesError as t };

//# sourceMappingURL=runtime_BoS_rzMD.mjs.map