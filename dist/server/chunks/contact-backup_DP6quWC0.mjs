globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_COXxpbMV.mjs";
import { t as createAstro } from "./compiler_Nyipi6hr.mjs";
import { i as repopulate, o as siteData, t as actions } from "./_astro_actions_BjcUx3jW.mjs";
import { N as isInputError } from "./server_CrEIlFfA.mjs";
import { B as createRenderInstruction, C as spreadAttributes, G as addAttribute, L as renderTemplate, P as renderSlot, R as maybeRenderHead, j as Fragment, k as renderComponent, q as unescapeHTML, wt as AstroError, z as renderHead, zt as InvalidComponentArgs } from "./remote_iGfF20G-.mjs";
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/dist/runtime/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
// src/components/Sections/Global/SectionHeading.astro
createAstro("https://example.com");
var $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHeading;
	const { title, id } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full items-center gap-4"><h2${addAttribute(id, "id")} class="h2 text-info">${title}</h2><span class="border-base-300 h-1 flex-1 border-b-4 border-dashed" aria-hidden="true"></span></div>`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/SectionHeading.astro", void 0);
// node_modules/.pnpm/tailwind-variants@3.2.2_tailwind-merge@3.6.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var SPACE_REGEX = /\s+/g;
var removeExtraSpaces = (str) => {
	if (typeof str !== "string" || !str) return str;
	return str.replace(SPACE_REGEX, " ").trim();
};
var cx = (...classnames) => {
	const classList = [];
	const buildClassString = (input) => {
		if (!input && input !== 0 && input !== 0n) return;
		if (Array.isArray(input)) {
			for (let i = 0, len = input.length; i < len; i++) buildClassString(input[i]);
			return;
		}
		const type = typeof input;
		if (type === "string" || type === "number" || type === "bigint") {
			if (type === "number" && input !== input) return;
			classList.push(String(input));
		} else if (type === "object") {
			const keys = Object.keys(input);
			for (let i = 0, len = keys.length; i < len; i++) {
				const key = keys[i];
				if (input[key]) classList.push(key);
			}
		}
	};
	for (let i = 0, len = classnames.length; i < len; i++) {
		const c = classnames[i];
		if (c !== null && c !== void 0) buildClassString(c);
	}
	return classList.length > 0 ? removeExtraSpaces(classList.join(" ")) : void 0;
};
var falsyToString = (value) => value === false ? "false" : value === true ? "true" : value === 0 ? "0" : value;
var isEmptyObject = (obj) => {
	if (!obj || typeof obj !== "object") return true;
	for (const _ in obj) return false;
	return true;
};
var isEqual = (obj1, obj2) => {
	if (obj1 === obj2) return true;
	if (!obj1 || !obj2) return false;
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	for (let i = 0; i < keys1.length; i++) {
		const key = keys1[i];
		if (!keys2.includes(key)) return false;
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
};
var joinObjects = (obj1, obj2) => {
	for (const key in obj2) if (Object.prototype.hasOwnProperty.call(obj2, key)) {
		const val2 = obj2[key];
		if (key in obj1) obj1[key] = cx(obj1[key], val2);
		else obj1[key] = val2;
	}
	return obj1;
};
var flat = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		if (Array.isArray(el)) flat(el, target);
		else if (el) target.push(el);
	}
};
var flatMergeArrays = (...arrays) => {
	const result = [];
	flat(arrays, result);
	const filtered = [];
	for (let i = 0; i < result.length; i++) if (result[i]) filtered.push(result[i]);
	return filtered;
};
var mergeObjects = (obj1, obj2) => {
	const result = {};
	for (const key in obj1) {
		const val1 = obj1[key];
		if (key in obj2) {
			const val2 = obj2[key];
			if (Array.isArray(val1) || Array.isArray(val2)) result[key] = flatMergeArrays(val2, val1);
			else if (typeof val1 === "object" && typeof val2 === "object" && val1 && val2) result[key] = mergeObjects(val1, val2);
			else result[key] = val2 + " " + val1;
		} else result[key] = val1;
	}
	for (const key in obj2) if (!(key in obj1)) result[key] = obj2[key];
	return result;
};
// node_modules/.pnpm/tailwind-variants@3.2.2_tailwind-merge@3.6.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-RZF76H2U.js
var defaultConfig = {
	twMerge: true,
	twMergeConfig: {}
};
function createState() {
	let cachedTwMerge = null;
	let cachedTwMergeConfig = {};
	let didTwMergeConfigChange = false;
	return {
		get cachedTwMerge() {
			return cachedTwMerge;
		},
		set cachedTwMerge(value) {
			cachedTwMerge = value;
		},
		get cachedTwMergeConfig() {
			return cachedTwMergeConfig;
		},
		set cachedTwMergeConfig(value) {
			cachedTwMergeConfig = value;
		},
		get didTwMergeConfigChange() {
			return didTwMergeConfigChange;
		},
		set didTwMergeConfigChange(value) {
			didTwMergeConfigChange = value;
		},
		reset() {
			cachedTwMerge = null;
			cachedTwMergeConfig = {};
			didTwMergeConfigChange = false;
		}
	};
}
var state = createState();
var getTailwindVariants = (cn) => {
	const tv = (options, configProp) => {
		const { extend = null, slots: slotProps = {}, variants: variantsProps = {}, compoundVariants: compoundVariantsProps = [], compoundSlots = [], defaultVariants: defaultVariantsProps = {} } = options;
		const config = {
			...defaultConfig,
			...configProp
		};
		const base = extend?.base ? cx(extend.base, options?.base) : options?.base;
		const variants = extend?.variants && !isEmptyObject(extend.variants) ? mergeObjects(variantsProps, extend.variants) : variantsProps;
		const defaultVariants = extend?.defaultVariants && !isEmptyObject(extend.defaultVariants) ? {
			...extend.defaultVariants,
			...defaultVariantsProps
		} : defaultVariantsProps;
		if (!isEmptyObject(config.twMergeConfig) && !isEqual(config.twMergeConfig, state.cachedTwMergeConfig)) {
			state.didTwMergeConfigChange = true;
			state.cachedTwMergeConfig = config.twMergeConfig;
		}
		const isExtendedSlotsEmpty = isEmptyObject(extend?.slots);
		const componentSlots = !isEmptyObject(slotProps) ? {
			base: cx(options?.base, isExtendedSlotsEmpty && extend?.base),
			...slotProps
		} : {};
		const slots = isExtendedSlotsEmpty ? componentSlots : joinObjects({ ...extend?.slots }, isEmptyObject(componentSlots) ? { base: options?.base } : componentSlots);
		const compoundVariants = isEmptyObject(extend?.compoundVariants) ? compoundVariantsProps : flatMergeArrays(extend?.compoundVariants, compoundVariantsProps);
		const component = (props) => {
			if (isEmptyObject(variants) && isEmptyObject(slotProps) && isExtendedSlotsEmpty) return cn(base, props?.class, props?.className)(config);
			if (compoundVariants && !Array.isArray(compoundVariants)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof compoundVariants}`);
			if (compoundSlots && !Array.isArray(compoundSlots)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof compoundSlots}`);
			const getVariantValue = (variant, vrs = variants, _slotKey = null, slotProps2 = null) => {
				const variantObj = vrs[variant];
				if (!variantObj || isEmptyObject(variantObj)) return null;
				const variantProp = slotProps2?.[variant] ?? props?.[variant];
				if (variantProp === null) return null;
				const variantKey = falsyToString(variantProp);
				if (typeof variantKey === "object") return null;
				const defaultVariantProp = defaultVariants?.[variant];
				return variantObj[(variantKey != null ? variantKey : falsyToString(defaultVariantProp)) || "false"];
			};
			const getVariantClassNames = () => {
				if (!variants) return null;
				const keys = Object.keys(variants);
				const result = [];
				for (let i = 0; i < keys.length; i++) {
					const value = getVariantValue(keys[i], variants);
					if (value) result.push(value);
				}
				return result;
			};
			const getVariantClassNamesBySlotKey = (slotKey, slotProps2) => {
				if (!variants || typeof variants !== "object") return null;
				const result = [];
				for (const variant in variants) {
					const variantValue = getVariantValue(variant, variants, slotKey, slotProps2);
					const value = slotKey === "base" && typeof variantValue === "string" ? variantValue : variantValue && variantValue[slotKey];
					if (value) result.push(value);
				}
				return result;
			};
			const propsWithoutUndefined = {};
			for (const prop in props) {
				const value = props[prop];
				if (value !== void 0) propsWithoutUndefined[prop] = value;
			}
			const getCompleteProps = (key, slotProps2) => {
				const initialProp = typeof props?.[key] === "object" ? { [key]: props[key]?.initial } : {};
				return {
					...defaultVariants,
					...propsWithoutUndefined,
					...initialProp,
					...slotProps2
				};
			};
			const getCompoundVariantsValue = (cv = [], slotProps2) => {
				const result = [];
				const cvLength = cv.length;
				for (let i = 0; i < cvLength; i++) {
					const { class: tvClass, className: tvClassName, ...compoundVariantOptions } = cv[i];
					let isValid = true;
					const completeProps = getCompleteProps(null, slotProps2);
					for (const key in compoundVariantOptions) {
						const value = compoundVariantOptions[key];
						const completePropsValue = completeProps[key];
						if (Array.isArray(value)) {
							if (!value.includes(completePropsValue)) {
								isValid = false;
								break;
							}
						} else {
							if ((value == null || value === false) && (completePropsValue == null || completePropsValue === false)) continue;
							if (completePropsValue !== value) {
								isValid = false;
								break;
							}
						}
					}
					if (isValid) {
						if (tvClass) result.push(tvClass);
						if (tvClassName) result.push(tvClassName);
					}
				}
				return result;
			};
			const getCompoundVariantClassNamesBySlot = (slotProps2) => {
				const compoundClassNames = getCompoundVariantsValue(compoundVariants, slotProps2);
				if (!Array.isArray(compoundClassNames)) return compoundClassNames;
				const result = {};
				const cnFn = cn;
				for (let i = 0; i < compoundClassNames.length; i++) {
					const className = compoundClassNames[i];
					if (typeof className === "string") result.base = cnFn(result.base, className)(config);
					else if (typeof className === "object") for (const slot in className) result[slot] = cnFn(result[slot], className[slot])(config);
				}
				return result;
			};
			const getCompoundSlotClassNameBySlot = (slotProps2) => {
				if (compoundSlots.length < 1) return null;
				const result = {};
				const completeProps = getCompleteProps(null, slotProps2);
				for (let i = 0; i < compoundSlots.length; i++) {
					const { slots: slots2 = [], class: slotClass, className: slotClassName, ...slotVariants } = compoundSlots[i];
					if (!isEmptyObject(slotVariants)) {
						let isValid = true;
						for (const key in slotVariants) {
							const completePropsValue = completeProps[key];
							const slotVariantValue = slotVariants[key];
							if (completePropsValue === void 0 || (Array.isArray(slotVariantValue) ? !slotVariantValue.includes(completePropsValue) : slotVariantValue !== completePropsValue)) {
								isValid = false;
								break;
							}
						}
						if (!isValid) continue;
					}
					for (let j = 0; j < slots2.length; j++) {
						const slotName = slots2[j];
						if (!result[slotName]) result[slotName] = [];
						result[slotName].push([slotClass, slotClassName]);
					}
				}
				return result;
			};
			if (!isEmptyObject(slotProps) || !isExtendedSlotsEmpty) {
				const slotsFns = {};
				if (typeof slots === "object" && !isEmptyObject(slots)) {
					const cnFn = cn;
					for (const slotKey in slots) slotsFns[slotKey] = (slotProps2) => {
						const compoundVariantClasses = getCompoundVariantClassNamesBySlot(slotProps2);
						const compoundSlotClasses = getCompoundSlotClassNameBySlot(slotProps2);
						return cnFn(slots[slotKey], getVariantClassNamesBySlotKey(slotKey, slotProps2), compoundVariantClasses ? compoundVariantClasses[slotKey] : void 0, compoundSlotClasses ? compoundSlotClasses[slotKey] : void 0, slotProps2?.class, slotProps2?.className)(config);
					};
				}
				return slotsFns;
			}
			return cn(base, getVariantClassNames(), getCompoundVariantsValue(compoundVariants), props?.class, props?.className)(config);
		};
		const getVariantKeys = () => {
			if (!variants || typeof variants !== "object") return;
			return Object.keys(variants);
		};
		component.variantKeys = getVariantKeys();
		component.extend = extend;
		component.base = base;
		component.slots = slots;
		component.variants = variants;
		component.defaultVariants = defaultVariants;
		component.compoundSlots = compoundSlots;
		component.compoundVariants = compoundVariants;
		return component;
	};
	const createTV = (configProp) => {
		return (options, config) => tv(options, config ? mergeObjects(configProp, config) : configProp);
	};
	return {
		tv,
		createTV
	};
};
// node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
	...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let i = 0; i < classGroupIds.length; i++) lookup[classGroupIds[i]] = true;
	return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers, postfixLookupClassGroupIds } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId;
		if (hasPostfixModifier) {
			classGroupId = getClassGroupId(baseClassName.substring(0, maybePostfixModifierPosition));
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/width
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/height
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
/**
* @param baseConfig Config where other config will be merged into. This object will be mutated.
* @param configExtension Partial config to merge into the `baseConfig`.
*/
var mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} }) => {
	overrideProperty(baseConfig, "cacheSize", cacheSize);
	overrideProperty(baseConfig, "prefix", prefix);
	overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
	overrideConfigProperties(baseConfig.theme, override.theme);
	overrideConfigProperties(baseConfig.classGroups, override.classGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
	overrideProperty(baseConfig, "postfixLookupClassGroups", override.postfixLookupClassGroups);
	overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
	mergeConfigProperties(baseConfig.theme, extend.theme);
	mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
	mergeArrayProperties(baseConfig, extend, "postfixLookupClassGroups");
	mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
	return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
	if (overrideValue !== void 0) baseObject[overrideKey] = overrideValue;
};
var overrideConfigProperties = (baseObject, overrideObject) => {
	if (overrideObject) for (const key in overrideObject) overrideProperty(baseObject, key, overrideObject[key]);
};
var mergeConfigProperties = (baseObject, mergeObject) => {
	if (mergeObject) for (const key in mergeObject) mergeArrayProperties(baseObject, mergeObject, key);
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
	const mergeValue = mergeObject[key];
	if (mergeValue !== void 0) baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
};
var extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
// node_modules/.pnpm/tailwind-variants@3.2.2_tailwind-merge@3.6.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/index.js
var createTwMerge = (cachedTwMergeConfig) => {
	return isEmptyObject(cachedTwMergeConfig) ? twMerge : extendTailwindMerge({
		...cachedTwMergeConfig,
		extend: {
			theme: cachedTwMergeConfig.theme,
			classGroups: cachedTwMergeConfig.classGroups,
			conflictingClassGroupModifiers: cachedTwMergeConfig.conflictingClassGroupModifiers,
			conflictingClassGroups: cachedTwMergeConfig.conflictingClassGroups,
			...cachedTwMergeConfig.extend
		}
	});
};
var executeMerge = (classnames, config) => {
	const base = cx(classnames);
	if (!base || !(config?.twMerge ?? true)) return base;
	if (!state.cachedTwMerge || state.didTwMergeConfigChange) {
		state.didTwMergeConfigChange = false;
		state.cachedTwMerge = createTwMerge(state.cachedTwMergeConfig);
	}
	return state.cachedTwMerge(base) || void 0;
};
var cnMerge = (...classnames) => {
	return (config) => executeMerge(classnames, config);
};
var { createTV, tv } = getTailwindVariants(cnMerge);
// src/components/ui/accordion/Accordion.astro
createAstro("https://example.com");
var accordion = tv({ base: ["border-border w-full border-t"] });
var $$Accordion = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Accordion;
	const { class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(accordion({ class: className }), "class")} data-slot="accordion"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/accordion/Accordion.astro", void 0);
// src/components/ui/accordion/AccordionContent.astro
createAstro("https://example.com");
var accordionContent = tv({ base: ["text-muted-foreground pb-4 text-sm"] });
var $$AccordionContent = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccordionContent;
	const { class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(accordionContent({ class: className }), "class")} data-slot="accordion-content"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/accordion/AccordionContent.astro", void 0);
// src/components/ui/accordion/AccordionItem.astro
createAstro("https://example.com");
var accordionItem = tv({ base: ["border-border border-b", "[&[open]_summary_svg]:rotate-180"] });
var $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccordionItem;
	const { class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<details${addAttribute(accordionItem({ class: className }), "class")} data-slot="accordion-item"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</details>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/accordion/AccordionItem.astro", void 0);
// src/components/ui/_Chevron.astro
createAstro("https://example.com");
tv({ base: "size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none" });
// src/components/ui/accordion/AccordionTrigger.astro
createAstro("https://example.com");
tv({ base: [
	"text-foreground flex w-full cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium",
	"outline-none hover:underline focus-visible:ring-3 focus-visible:ring-outline",
	"[&::-webkit-details-marker]:hidden"
] });
// src/components/ui/pixel-panel/PixelPanel.astro
createAstro("https://example.com");
var pixelPanel = tv({
	base: "bg-card text-card-foreground border-border border-4",
	variants: { elevated: {
		true: "shadow-pixel-lg",
		false: "shadow-pixel"
	} },
	defaultVariants: { elevated: false }
});
var $$PixelPanel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PixelPanel;
	const { as, elevated, class: className, ...rest } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Tag", as ?? "div", {
		"class": pixelPanel({
			elevated,
			class: className
		}),
		"data-slot": "pixel-panel",
		...rest
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/pixel-panel/PixelPanel.astro", void 0);
// src/config/siteSettings.json.ts
var siteLocale = "en-US";
var siteSettings = {
	useViewTransitions: true,
	useAnimations: true
};
// src/components/ui/reveal/Reveal.astro
createAstro("https://example.com");
var reveal = tv({
	base: ["timeline-view motion-reduce:animate-none"],
	variants: {
		animation: {
			"fade-in": "animate-fade-in",
			"fade-in-up": "animate-fade-in-up",
			"fade-in-down": "animate-fade-in-down",
			"fade-in-left": "animate-fade-in-left",
			"fade-in-right": "animate-fade-in-right",
			"zoom-in": "animate-zoom-in",
			"blurred-fade-in": "animate-blurred-fade-in",
			"slide-up-fade": "animate-slide-up-fade",
			"bounce-fade-in": "animate-bounce-fade-in",
			"flip-in-x": "animate-flip-in-x",
			"flip-in-y": "animate-flip-in-y"
		},
		range: {
			entry: "animate-range-entry",
			cover: "animate-range-cover",
			contain: "animate-range-contain",
			gradual: "animate-range-gradual",
			moderate: "animate-range-moderate",
			brisk: "animate-range-brisk",
			rapid: "animate-range-rapid"
		}
	},
	defaultVariants: {
		animation: "fade-in-up",
		range: "entry"
	}
});
var $$Reveal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Reveal;
	const { animation, range, as, animate, class: className, ...rest } = Astro.props;
	const Tag = as ?? "div";
	const cls = animate ?? siteSettings.useAnimations ?? true ? reveal({
		animation,
		range,
		class: className
	}) : className;
	return renderTemplate`${renderComponent($$result, "Tag", Tag, {
		"class": cls,
		"data-slot": "reveal",
		...rest
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/reveal/Reveal.astro", void 0);
// src/components/Sections/Contact/Faq.astro
var $$Faq = createComponent(($$result, $$props, $$slots) => {
	const faqs = [
		{
			q: "Q: Can I submit my own guest post / devlog?",
			a: "YES! I am always looking for fellow developers and historians to write about retro tech. Send me a pitch with your outline, and I'll check your specs."
		},
		{
			q: "Q: Where can I find the code for your projects?",
			a: "All my active pipelines, game engines, and retro devops pipelines are hosted on my GitHub repository. Pull requests are welcome, hero."
		},
		{
			q: "Q: How often are new quests published?",
			a: "New devlogs and tutorials are released every alternate Tuesday. Subscribe to my Discord transmissions to get live ping alerts."
		}
	];
	return renderTemplate`${renderComponent($$result, "Reveal", $$Reveal, {
		"as": "section",
		"aria-labelledby": "faq-heading",
		"class": "flex flex-col gap-6"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SectionHeading", $$SectionHeading, {
		"id": "faq-heading",
		"title": "Frequently Asked System Questions"
	})}${renderComponent($$result, "PixelPanel", $$PixelPanel, {
		"elevated": true,
		"class": "px-6 py-2 sm:px-8"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Accordion", $$Accordion, { "class": "border-t-0" }, { "default": ($$result) => renderTemplate`${faqs.map((faq, i) => renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, {
		"open": i === 0,
		"class": "border-base-300 border-t-0 border-b-2 border-dashed [&[open]_[data-faq-v]]:opacity-0"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<summary class="text-secondary-700 dark:text-secondary font-display focus-visible:ring-outline flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-xs leading-relaxed outline-none focus-visible:ring-3 [&amp;::-webkit-details-marker]:hidden"><span>${faq.q}</span><span class="relative ml-2 size-4 shrink-0" aria-hidden="true"><span class="bg-muted-foreground absolute top-1/2 left-0 h-1 w-full -translate-y-1/2"></span><span data-faq-v class="bg-muted-foreground absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 transition-opacity"></span></span></summary>${renderComponent($$result, "AccordionContent", $$AccordionContent, { "class": "text-muted-foreground pt-0 pb-4 text-sm" }, { "default": ($$result) => renderTemplate`${faq.a}` })}` })}`)}` })}` })}` })}`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Contact/Faq.astro", void 0);
// src/components/ui/badge/Badge.astro
createAstro("https://example.com");
var badge = tv({
	base: ["inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium"],
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground",
			secondary: "bg-secondary text-secondary-foreground",
			muted: "bg-muted text-muted-foreground",
			outline: "border-border text-foreground border",
			info: "bg-info text-info-foreground",
			success: "bg-success text-success-foreground",
			warning: "bg-warning text-warning-foreground",
			error: "bg-error text-error-foreground"
		},
		pixel: {
			true: "border-2 border-border px-2.5 py-1 font-bold tracking-wide uppercase",
			false: ""
		}
	},
	defaultVariants: { variant: "primary" }
});
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { variant, pixel, class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(badge({
		variant,
		pixel,
		class: className
	}), "class")} data-slot="badge"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/badge/Badge.astro", void 0);
// src/components/ui/_field.ts
/** Base look shared by all text-field primitives (layout, typography, focus ring, disabled). */
var fieldBase = [
	"text-foreground placeholder:text-muted-foreground w-full rounded-md border bg-transparent shadow-xs",
	"transition-[color,box-shadow] outline-none",
	"focus-visible:ring-3",
	"disabled:cursor-not-allowed disabled:opacity-50",
	"peer"
];
/** Validation `state` variant: border + focus ring per status. Tokens only. */
var fieldState = {
	default: "border-input focus-visible:border-outline focus-visible:ring-outline",
	error: "border-error focus-visible:border-error focus-visible:ring-error",
	success: "border-success focus-visible:border-success focus-visible:ring-success"
};
// src/components/ui/input/Input.astro
createAstro("https://example.com");
var input = tv({
	base: fieldBase,
	variants: {
		size: {
			sm: "h-9 px-2 text-sm",
			md: "h-11 px-3 text-base",
			lg: "h-12 px-4 text-lg"
		},
		state: fieldState
	},
	defaultVariants: {
		size: "md",
		state: "default"
	}
});
var $$Input = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Input;
	const { size, state, class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<input${addAttribute(input({
		size,
		state,
		class: className
	}), "class")} data-slot="input"${spreadAttributes(rest)}>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/input/Input.astro", void 0);
// src/components/ui/label/Label.astro
createAstro("https://example.com");
var label = tv({
	base: ["text-foreground leading-none font-medium", "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"],
	variants: { size: {
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { size: "md" }
});
var $$Label = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Label;
	const { size, class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<label${addAttribute(label({
		size,
		class: className
	}), "class")} data-slot="label"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</label>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/label/Label.astro", void 0);
// src/components/ui/textarea/Textarea.astro
createAstro("https://example.com");
var textarea = tv({
	base: [...fieldBase, "min-h-20 py-2"],
	variants: {
		size: {
			sm: "px-2 text-sm",
			md: "px-3 text-base",
			lg: "px-4 text-lg"
		},
		state: fieldState
	},
	defaultVariants: {
		size: "md",
		state: "default"
	}
});
var $$Textarea = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Textarea;
	const { size, state, class: className, value, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<textarea${addAttribute(textarea({
		size,
		state,
		class: className
	}), "class")} data-slot="textarea"${spreadAttributes(rest)}>${value ?? ""}</textarea>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/textarea/Textarea.astro", void 0);
// src/components/Sections/Contact/Form.astro
createAstro("https://example.com");
var $$Form = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Form;
	const result = Astro.getActionResult(actions.contact);
	const success = result?.data?.ok === true;
	const error = result?.error;
	const fieldErrors = error && isInputError(error) ? error.fields : {};
	const formError = error && !isInputError(error) ? error.message : void 0;
	const submitted = Astro.request.method === "POST" ? await Astro.request.formData().catch(() => null) : null;
	const values = repopulate(submitted);
	const renderedAt = Date.now();
	const FIELDS = [
		{
			name: "name",
			label: "Your Name",
			placeholder: "e.g. PLAYER ONE",
			as: "input",
			type: "text",
			autocomplete: "name",
			maxlength: 100
		},
		{
			name: "email",
			label: "Email Address",
			placeholder: "e.g. PLAYER1@EXAMPLE.COM",
			as: "input",
			type: "email",
			autocomplete: "email",
			maxlength: 254
		},
		{
			name: "subject",
			label: "Subject",
			placeholder: "e.g. TUTORIAL INQUIRY",
			as: "input",
			type: "text",
			autocomplete: "off",
			maxlength: 150
		},
		{
			name: "message",
			label: "Message Transmission",
			placeholder: "TYPE YOUR TRANSMISSION HERE...",
			as: "textarea",
			autocomplete: "off",
			maxlength: 5e3
		}
	];
	const fieldClass = ["bg-accent border-border rounded-none border-4 px-4 text-sm placeholder:text-muted-foreground", "aria-[invalid=true]:ring-3 aria-[invalid=true]:ring-error/60"].join(" ");
	return renderTemplate`${success ? renderTemplate`${renderComponent($$result, "PixelPanel", $$PixelPanel, {
		"elevated": true,
		"role": "status",
		"tabindex": "-1",
		"data-contact-status": true,
		"class": "primary-focus flex flex-col items-start gap-3 p-8"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"pixel": true,
		"variant": "success"
	}, { "default": ($$result) => renderTemplate`
        Transmission Sent
      ` })}${maybeRenderHead($$result)}<h2 class="h3 text-foreground">Message sent.</h2><p class="text-muted-foreground text-sm">Thanks - your transmission reached the array. I'll beam a reply back to your inbox.</p>` })}` : renderTemplate`${renderComponent($$result, "PixelPanel", $$PixelPanel, {
		"elevated": true,
		"class": "flex flex-col gap-6 p-6 sm:p-8"
	}, { "default": ($$result) => renderTemplate`<h2 class="text-secondary-700 dark:text-secondary font-display text-base uppercase sm:text-lg">Send Message</h2>${formError && renderTemplate`<p role="alert" tabindex="-1" data-contact-status class="border-error text-error bg-error/10 primary-focus border-2 p-3 text-sm">${formError}</p>`}<form method="POST"${addAttribute(actions.contact, "action")} class="flex flex-col gap-4">${FIELDS.map((field) => {
		const err = fieldErrors[field.name]?.[0];
		const attrs = {
			id: field.name,
			name: field.name,
			placeholder: field.placeholder,
			autocomplete: field.autocomplete,
			required: true,
			maxlength: field.maxlength,
			value: values[field.name] || void 0,
			"aria-invalid": err ? true : void 0,
			"aria-describedby": err ? `${field.name}-error` : void 0
		};
		return renderTemplate`<div class="flex flex-col gap-2">${renderComponent($$result, "Label", $$Label, {
			"for": field.name,
			"class": "text-info font-display text-xs uppercase"
		}, { "default": ($$result) => renderTemplate`${field.label}` })}${field.as === "textarea" ? renderTemplate`${renderComponent($$result, "Textarea", $$Textarea, {
			...attrs,
			"minlength": 10,
			"class": `${fieldClass} min-h-[120px] py-3`
		})}` : renderTemplate`${renderComponent($$result, "Input", $$Input, {
			...attrs,
			"type": field.type,
			"class": `${fieldClass} h-14`
		})}`}${err && renderTemplate`<p${addAttribute(`${field.name}-error`, "id")} role="alert" class="text-error text-xs">${err}</p>`}</div>`;
	})}<div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true"><label for="_gotcha">Leave this field empty</label><input id="_gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off"></div><input type="hidden" name="_ts"${addAttribute(renderedAt, "value")}><button type="submit" class="pixel-btn pixel-btn--green mt-2 self-start px-6 py-3 text-sm uppercase sm:text-base">Send Message</button></form>` })}`}${renderScript($$result, "/Users/jaimyn/dev/bms-website/src/components/Sections/Contact/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Contact/Form.astro", void 0);
// src/components/Sections/Global/HeroPanel.astro
createAstro("https://example.com");
var $$HeroPanel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$HeroPanel;
	const { tagline, heading, headingId, intro } = Astro.props;
	return renderTemplate`${renderComponent($$result, "PixelPanel", $$PixelPanel, {
		"as": "section",
		"elevated": true,
		"aria-labelledby": headingId,
		"class": "flex flex-col items-start gap-4 p-6 sm:p-8 md:p-9"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"pixel": true,
		"variant": "info"
	}, { "default": ($$result) => renderTemplate`${tagline}` })}${maybeRenderHead($$result)}<h1${addAttribute(headingId, "id")} class="h1 text-info text-balance">${heading}</h1>${intro && renderTemplate`<p class="text-muted-foreground max-w-3xl text-base text-balance">${intro}</p>`}${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/HeroPanel.astro", void 0);
// src/components/Sections/Contact/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "HeroPanel", $$HeroPanel, {
		"headingId": "contact-hero-heading",
		"tagline": "Quest Start",
		"heading": "Get in Touch",
		"intro": "Have a question about vintage hardware, spotted a glitch in my matrix, or want to collaborate on a new retro quest? Drop me a transmission. My communications array is fully operational."
	})}`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Contact/Hero.astro", void 0);
// src/js/social.ts
/**
* * Resolve a social/profile URL from the site's `sameAs` list.
*
* Returns the first `sameAs` entry whose URL contains any of `hosts`, else `fallback`. Keeps the
* `find … ?? fallback` derivation in one canonical place so the header/footer/contact sections don't
* each re-implement it.
*
* @param sameAs   the site's social/profile URLs (`siteData.sameAs`); may be undefined/empty
* @param hosts    host substring(s) to match, e.g. `"github.com"` or `["x.com", "twitter.com"]`
* @param fallback URL to use when nothing matches
* @returns the matched profile URL, or `fallback`
* @example socialUrl(siteData.sameAs, "linkedin.com", "https://www.linkedin.com/")
*/
function socialUrl(sameAs, hosts, fallback) {
	const list = typeof hosts === "string" ? [hosts] : hosts;
	return sameAs?.find((url) => list.some((host) => url.includes(host))) ?? fallback;
}
// src/config/socialData.json.ts
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
var socialPlatforms = {
	github: {
		label: "GitHub",
		icon: "github",
		match: "github.com",
		fallback: "https://github.com/brisbanemakerspace/"
	},
	facebook: {
		label: "Facebook",
		icon: "facebook",
		match: "facebook.com",
		fallback: "https://www.facebook.com/brisbanemakerspace"
	},
	instagram: {
		label: "Instagram",
		icon: "instagram",
		match: "instagram.com",
		fallback: "https://www.instagram.com/brisbanemakerspace/"
	},
	discord: {
		label: "Discord",
		icon: "discord",
		match: ["discord.gg", "discord.com"],
		fallback: "https://discord.brisbanemaker.space/"
	}
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
function socialHref(platform) {
	const config = socialPlatforms[platform];
	if (!config) return void 0;
	if (platform === "twitter" && siteData.author.twitter) return `https://x.com/${siteData.author.twitter}`;
	return socialUrl(siteData.sameAs, config.match, config.fallback);
}
/**
* A platform's label + glyph + resolved href - the shape the footer row and home chips render.
* `undefined` when the platform isn't configured or has no pixel glyph, so callers just filter it out.
*/
function socialLink(platform) {
	const config = socialPlatforms[platform];
	const href = socialHref(platform);
	if (!config?.icon || !href) return void 0;
	return {
		name: config.icon,
		label: config.label,
		href
	};
}
// src/components/Sections/Contact/InfoCards.astro
createAstro("https://example.com");
var $$InfoCards = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InfoCards;
	const { stacked = false } = Astro.props;
	const email = siteData.author.email;
	const github = socialHref("github");
	const discord = socialHref("discord");
	const display = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
	const platformCard = (href, card) => href ? {
		...card,
		value: display(href),
		href
	} : void 0;
	const cards = [
		{
			tag: "E-Mail",
			tone: "info",
			title: "Telepathy",
			blurb: "Direct digital link to my HQ mailbox",
			value: email,
			href: `mailto:${email}`
		},
		platformCard(discord, {
			tag: "Community",
			tone: "success",
			title: "Discord Bar",
			blurb: "Hang out with fellow retro hackers"
		}),
		platformCard(github, {
			tag: "Codebase",
			tone: "secondary",
			title: "GitHub Hub",
			blurb: "Inspect my open-source pipelines"
		})
	].filter((card) => card !== void 0);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["gap-6", stacked ? "grid" : "flex flex-wrap justify-center"], "class:list")}>${cards.map((card) => renderTemplate`${renderComponent($$result, "PixelPanel", $$PixelPanel, { "class:list": ["flex flex-col items-start gap-4 p-6", !stacked && "w-full md:w-[calc((100%-3rem)/3)]"] }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"pixel": true,
		"variant": card.tone
	}, { "default": ($$result) => renderTemplate`${card.tag}` })}<h2 class="h3 text-foreground">${card.title}</h2><p class="text-muted-foreground text-xs">${card.blurb}</p><a${addAttribute(card.href, "href")} class="bg-accent border-border text-info hover:text-success primary-focus block w-full truncate border-2 p-3 text-sm uppercase transition-colors">${card.value}</a>` })}`)}</div>`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Contact/InfoCards.astro", void 0);
// src/components/svg/pixel-icons/pixelIcons.ts
var PIXEL_ICONS = {
	moon: {
		viewBox: "0 0 30.48 30.48",
		body: "<path d=\"M28.95 10.67H27.43V12.19H25.91V13.72H27.43V15.24H28.95V13.72H30.48V12.19H28.95V10.67Z\"/><path d=\"M28.95 21.34H27.43V22.86H28.95V21.34Z\"/><path d=\"M25.91 0V1.53H24.38V3.05H25.91V4.57H27.43V3.05H28.95V1.53H27.43V0H25.91Z\"/><path d=\"M25.91 7.62H24.38V9.15H25.91V7.62Z\"/><path d=\"M24.38 25.91H22.86V27.43H21.33V28.96H22.86V30.48H24.38V28.96H25.91V27.43H24.38V25.91Z\"/><path d=\"M24.38 18.29H22.86V19.81H24.38V18.29Z\"/><path d=\"M21.33 21.34H12.19V22.86H19.81V24.38H21.33V21.34Z\"/><path d=\"M12.19 7.62V9.15H21.33V6.1H19.81V7.62H12.19Z\"/><path d=\"M19.81 24.38H16.76V25.91H19.81V24.38Z\"/><path d=\"M18.29 18.29V16.77H19.81V15.24H18.29V13.72H16.76V15.24H15.24V16.77H16.76V18.29H18.29Z\"/><path d=\"M19.81 4.57H16.76V6.1H19.81V4.57Z\"/><path d=\"M16.76 25.91H9.14V27.43H16.76V25.91Z\"/><path d=\"M12.19 19.81H10.67V21.34H12.19V19.81Z\"/><path d=\"M12.19 9.15H10.67V10.67H12.19V9.15Z\"/><path d=\"M16.76 3.05H9.14V4.57H16.76V3.05Z\"/><path d=\"M10.67 10.67H9.14V19.81H10.67V10.67Z\"/><path d=\"M9.14 24.38H6.1V25.91H9.14V24.38Z\"/><path d=\"M9.14 4.57H6.1V6.1H9.14V4.57Z\"/><path d=\"M6.1 22.86H4.57V24.38H6.1V22.86Z\"/><path d=\"M6.1 6.1H4.57V7.62H6.1V6.1Z\"/><path d=\"M4.57 19.81H3.05V22.86H4.57V19.81Z\"/><path d=\"M4.57 7.62H3.05V10.67H4.57V7.62Z\"/><path d=\"M3.05 28.96H1.53V30.48H3.05V28.96Z\"/><path d=\"M3.05 10.67H1.53V19.81H3.05V10.67Z\"/><path d=\"M1.53 3.05H0V4.57H1.53V3.05Z\"/>"
	},
	meteor: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M32 9.15H30.47V10.67H32V9.15Z\"/><path d=\"M32 4.57H30.47V6.1H32V4.57Z\"/><path d=\"M32 0H30.47V1.53H32V0Z\"/><path d=\"M30.47 13.72H28.95V15.24H30.47V13.72Z\"/><path d=\"M30.47 6.1H28.95V7.62H30.47V6.1Z\"/><path d=\"M30.47 1.53H28.95V3.05H30.47V1.53Z\"/><path d=\"M28.95 15.24H27.43V16.77H28.95V15.24Z\"/><path d=\"M28.95 7.62H27.43V9.15H28.95V7.62Z\"/><path d=\"M28.95 3.05H27.43V4.57H28.95V3.05Z\"/><path d=\"M27.43 16.77H25.9V19.81H27.43V16.77Z\"/><path d=\"M27.43 10.67H25.9V12.19H27.43V10.67Z\"/><path d=\"M27.43 4.57H25.9V6.1H27.43V4.57Z\"/><path d=\"M27.43 0H25.9V1.53H27.43V0Z\"/><path d=\"M25.9 19.81H24.38V22.86H25.9V19.81Z\"/><path d=\"M25.9 12.19H24.38V13.72H25.9V12.19Z\"/><path d=\"M25.9 6.1H24.38V7.62H25.9V6.1Z\"/><path d=\"M25.9 1.53H24.38V3.05H25.9V1.53Z\"/><path d=\"M24.38 22.86H22.85V25.91H24.38V22.86Z\"/><path d=\"M24.38 3.05H22.85V4.57H24.38V3.05Z\"/><path d=\"M22.85 15.24H21.33V16.77H22.85V15.24Z\"/><path d=\"M22.85 9.15H21.33V10.67H22.85V9.15Z\"/><path d=\"M22.85 0H21.33V1.53H22.85V0Z\"/><path d=\"M22.85 25.91H19.81V27.43H22.85V25.91Z\"/><path d=\"M21.33 4.57H19.81V6.1H21.33V4.57Z\"/><path d=\"M21.33 1.53H19.81V3.05H21.33V1.53Z\"/><path d=\"M19.81 27.43H18.28V28.96H19.81V27.43Z\"/><path d=\"M19.81 12.19H18.28V13.72H19.81V12.19Z\"/><path d=\"M18.28 7.62H16.76V9.15H18.28V7.62Z\"/><path d=\"M18.28 1.53H16.76V3.05H18.28V1.53Z\"/><path d=\"M18.28 28.96H15.24V30.48H18.28V28.96Z\"/><path d=\"M16.76 9.15H15.24V10.67H16.76V9.15Z\"/><path d=\"M16.76 3.05H13.71V4.57H16.76V3.05Z\"/><path d=\"M15.24 30.48H9.14V32H15.24V30.48Z\"/><path d=\"M13.71 4.57H12.19V6.1H13.71V4.57Z\"/><path d=\"M12.19 6.1H9.14V7.62H12.19V6.1Z\"/><path d=\"M15.24 27.43V25.91H16.76V24.38H18.28V22.86H19.81V16.77H18.28V15.24H16.76V13.72H15.24V12.19H9.14V13.72H7.62V15.24H6.09V16.77H4.57V22.86H6.09V24.38H7.62V25.91H9.14V27.43H15.24ZM12.19 15.24H15.24V16.77H16.76V18.29H18.28V21.34H16.76V18.29H15.24V16.77H12.19V15.24Z\"/><path d=\"M9.14 28.96H4.57V30.48H9.14V28.96Z\"/><path d=\"M9.14 7.62H6.09V9.15H9.14V7.62Z\"/><path d=\"M6.09 9.15H4.57V10.67H6.09V9.15Z\"/><path d=\"M4.57 27.43H3.05V28.96H4.57V27.43Z\"/><path d=\"M4.57 10.67H3.05V12.19H4.57V10.67Z\"/><path d=\"M3.05 24.38H1.52V27.43H3.05V24.38Z\"/><path d=\"M3.05 12.19H1.52V15.24H3.05V12.19Z\"/><path d=\"M1.52 15.24H0V24.38H1.52V15.24Z\"/>"
	},
	linkedin: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M32 3.05H30.47V28.95H32V3.05Z\"/><path d=\"M30.47 28.95H28.95V30.48H30.47V28.95Z\"/><path d=\"M30.47 1.52H28.95V3.05H30.47V1.52Z\"/><path d=\"M28.95 4.57H27.42V27.43H28.95V4.57Z\"/><path d=\"M28.95 30.48H3.04V32H28.95V30.48Z\"/><path d=\"M27.42 27.43H4.57V28.95H27.42V27.43Z\"/><path d=\"M22.85 15.24H21.33V13.71H18.28V15.24H16.76V13.71H13.71V22.86H16.76V18.29H18.28V16.76H19.81V18.29H21.33V22.86H24.38V16.76H22.85V15.24Z\"/><path d=\"M10.66 13.71H7.61V22.86H10.66V13.71Z\"/><path d=\"M10.66 9.14H7.61V12.19H10.66V9.14Z\"/><path d=\"M27.42 3.05H4.57V4.57H27.42V3.05Z\"/><path d=\"M28.95 0H3.04V1.52H28.95V0Z\"/><path d=\"M4.57 4.57H3.04V27.43H4.57V4.57Z\"/><path d=\"M3.04 28.95H1.52V30.48H3.04V28.95Z\"/><path d=\"M3.04 1.52H1.52V3.05H3.04V1.52Z\"/><path d=\"M1.52 3.05H0V28.95H1.52V3.05Z\"/>"
	},
	youtube: {
		viewBox: "0 0 32 22.86",
		body: "<path d=\"M32 4.57H30.47V18.29H32V4.57Z\"/><path d=\"M30.47 18.29H28.95V19.81H30.47V18.29Z\"/><path d=\"M30.47 3.05H28.95V4.57H30.47V3.05Z\"/><path d=\"M28.95 19.81H27.42V21.33H28.95V19.81Z\"/><path d=\"M28.95 1.52H27.42V3.05H28.95V1.52Z\"/><path d=\"M27.42 3.05H4.57V4.57H3.04V18.29H4.57V19.81H27.42V18.29H28.95V4.57H27.42V3.05ZM19.81 12.19H18.28V13.72H16.76V15.24H13.71V16.76H12.19V6.1H13.71V7.62H16.76V9.14H18.28V10.67H19.81V12.19Z\"/><path d=\"M27.42 21.33H4.57V22.86H27.42V21.33Z\"/><path d=\"M27.42 0H4.57V1.52H27.42V0Z\"/><path d=\"M4.57 19.81H3.04V21.33H4.57V19.81Z\"/><path d=\"M4.57 1.52H3.04V3.05H4.57V1.52Z\"/><path d=\"M3.04 18.29H1.52V19.81H3.04V18.29Z\"/><path d=\"M3.04 3.05H1.52V4.57H3.04V3.05Z\"/><path d=\"M1.52 4.57H0V18.29H1.52V4.57Z\"/>"
	},
	email: {
		viewBox: "0 0 32 25.9",
		body: "<path d=\"M32 3.05H30.47V22.85H32V3.05Z\"/><path d=\"M30.47 22.85H28.95V24.38H30.47V22.85Z\"/><path d=\"M30.47 1.52H28.95V3.05H30.47V1.52Z\"/><path d=\"M28.95 4.57H27.43V7.62H28.95V4.57Z\"/><path d=\"M28.95 24.38H3.05V25.9H28.95V24.38Z\"/><path d=\"M27.43 19.81H25.9V21.33H27.43V19.81Z\"/><path d=\"M27.43 7.62H25.9V9.14H27.43V7.62Z\"/><path d=\"M25.9 18.28H24.38V19.81H25.9V18.28Z\"/><path d=\"M25.9 9.14H24.38V10.66H25.9V9.14Z\"/><path d=\"M24.38 16.76H22.85V18.28H24.38V16.76Z\"/><path d=\"M24.38 10.66H22.85V12.19H24.38V10.66Z\"/><path d=\"M22.85 15.24H21.33V16.76H22.85V15.24Z\"/><path d=\"M22.85 12.19H21.33V13.71H22.85V12.19Z\"/><path d=\"M21.33 13.71H18.28V15.24H21.33V13.71Z\"/><path d=\"M18.28 15.24H13.71V16.76H18.28V15.24Z\"/><path d=\"M13.71 13.71H10.66V15.24H13.71V13.71Z\"/><path d=\"M10.66 15.24H9.14V16.76H10.66V15.24Z\"/><path d=\"M10.66 12.19H9.14V13.71H10.66V12.19Z\"/><path d=\"M9.14 16.76H7.62V18.28H9.14V16.76Z\"/><path d=\"M9.14 10.66H7.62V12.19H9.14V10.66Z\"/><path d=\"M7.62 18.28H6.09V19.81H7.62V18.28Z\"/><path d=\"M7.62 9.14H6.09V10.66H7.62V9.14Z\"/><path d=\"M6.09 19.81H4.57V21.33H6.09V19.81Z\"/><path d=\"M6.09 7.62H4.57V9.14H6.09V7.62Z\"/><path d=\"M28.95 0H3.05V1.52H28.95V0Z\"/><path d=\"M4.57 4.57H3.05V7.62H4.57V4.57Z\"/><path d=\"M3.05 22.85H1.52V24.38H3.05V22.85Z\"/><path d=\"M3.05 1.52H1.52V3.05H3.05V1.52Z\"/><path d=\"M1.52 3.05H0V22.85H1.52V3.05Z\"/>"
	},
	"arrow-left": {
		viewBox: "0 0 32 32",
		body: "<path d=\"M30.48 9.14H28.95V6.09H27.43V4.57H25.9V3.05H22.86V1.52H19.81V0H12.19V1.52H9.14V3.05H6.09V4.57H4.57V6.09H3.05V9.14H1.52V12.19H0V19.81H1.52V22.86H3.05V25.9H4.57V27.43H6.09V28.95H9.14V30.48H12.19V32H19.81V30.48H22.86V28.95H25.9V27.43H27.43V25.9H28.95V22.86H30.48V19.81H32V12.19H30.48V9.14ZM25.9 21.33H24.38V22.86H22.86V24.38H18.29V22.86H19.81V21.33H21.33V19.81H19.81V18.29H13.71V21.33H12.19V19.81H10.67V18.29H9.14V16.76H7.62V15.24H6.09V13.71H7.62V12.19H9.14V10.67H10.67V9.14H12.19V7.62H13.71V10.67H22.86V12.19H24.38V13.71H25.9V21.33Z\"/>"
	},
	"arrow-right": {
		viewBox: "0 0 32 32",
		body: "<path d=\"M30.48 9.14H28.95V6.09H27.43V4.57H25.91V3.05H22.86V1.52H19.81V0H12.19V1.52H9.14V3.05H6.1V4.57H4.57V6.09H3.05V9.14H1.52V12.19H0V19.81H1.52V22.86H3.05V25.9H4.57V27.43H6.1V28.95H9.14V30.48H12.19V32H19.81V30.48H22.86V28.95H25.91V27.43H27.43V25.9H28.95V22.86H30.48V19.81H32V12.19H30.48V9.14ZM25.91 15.24H24.38V16.76H22.86V18.29H21.33V19.81H19.81V21.33H18.29V18.29H12.19V19.81H10.67V21.33H12.19V22.86H13.71V24.38H9.14V22.86H7.62V21.33H6.1V13.71H7.62V12.19H9.14V10.67H18.29V7.62H19.81V9.14H21.33V10.67H22.86V12.19H24.38V13.71H25.91V15.24Z\"/>"
	},
	code: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M32 16.0049H30.48V23.6249H32V16.0049Z\"/><path d=\"M30.48 23.625H28.95V26.665H30.48V23.625Z\"/><path d=\"M30.48 12.9548H28.95V16.0048H30.48V12.9548Z\"/><path d=\"M28.95 26.6648H27.43V29.7148H28.95V26.6648Z\"/><path d=\"M28.95 11.4248H27.43V12.9548H28.95V11.4248Z\"/><path d=\"M27.43 29.7148H25.9V31.2348H27.43V29.7148Z\"/><path d=\"M27.43 20.575H25.9V23.625H27.43V20.575Z\"/><path d=\"M27.43 16.0049H25.9V19.0449H27.43V16.0049Z\"/><path d=\"M27.43 9.90479H25.9V11.4248H27.43V9.90479Z\"/><path d=\"M25.9 23.625H24.38V25.145H25.9V23.625Z\"/><path d=\"M25.9 11.4248H24.38V16.0048H25.9V11.4248Z\"/><path d=\"M25.9 5.33496H24.38V6.85496H25.9V5.33496Z\"/><path d=\"M24.38 25.1448H22.86V26.6648H24.38V25.1448Z\"/><path d=\"M25.9 19.0449H22.86V20.5749H25.9V19.0449Z\"/><path d=\"M24.38 6.85498H22.86V8.38498H24.38V6.85498Z\"/><path d=\"M24.38 3.81494H22.86V5.33494H24.38V3.81494Z\"/><path d=\"M22.86 20.575H21.33V22.0949H22.86V20.575Z\"/><path d=\"M22.86 8.38501H21.33V9.90501H22.86V8.38501Z\"/><path d=\"M22.86 2.28491H21.33V3.81491H22.86V2.28491Z\"/><path d=\"M21.33 29.7148H19.81V31.2348H21.33V29.7148Z\"/><path d=\"M21.33 22.095H19.81V23.625H21.33V22.095Z\"/><path d=\"M21.33 9.90479H19.81V11.4248H21.33V9.90479Z\"/><path d=\"M21.33 0.764893H19.81V2.28489H21.33V0.764893Z\"/><path d=\"M19.81 23.625H18.29V29.715H19.81V23.625Z\"/><path d=\"M18.29 0.764893H16.76V3.81489H18.29V0.764893Z\"/><path d=\"M16.76 3.81494H15.24V8.38494H16.76V3.81494Z\"/><path d=\"M15.24 8.38501H13.71V11.425H15.24V8.38501Z\"/><path d=\"M13.71 23.625H12.19V29.715H13.71V23.625Z\"/><path d=\"M12.19 29.7148H10.67V31.2348H12.19V29.7148Z\"/><path d=\"M12.19 22.095H10.67V23.625H12.19V22.095Z\"/><path d=\"M12.19 9.90479H10.67V11.4248H12.19V9.90479Z\"/><path d=\"M12.19 0.764893H10.67V2.28489H12.19V0.764893Z\"/><path d=\"M10.67 20.575H9.14001V22.0949H10.67V20.575Z\"/><path d=\"M10.67 8.38501H9.14001V9.90501H10.67V8.38501Z\"/><path d=\"M10.67 2.28491H9.14001V3.81491H10.67V2.28491Z\"/><path d=\"M9.14 25.1448H7.62V26.6648H9.14V25.1448Z\"/><path d=\"M9.13998 19.0449H6.09998V20.5749H9.13998V19.0449Z\"/><path d=\"M9.14 6.85498H7.62V8.38498H9.14V6.85498Z\"/><path d=\"M9.14 3.81494H7.62V5.33494H9.14V3.81494Z\"/><path d=\"M7.61998 23.625H6.09998V25.145H7.61998V23.625Z\"/><path d=\"M7.61998 11.4248H6.09998V16.0048H7.61998V11.4248Z\"/><path d=\"M7.61998 5.33496H6.09998V6.85496H7.61998V5.33496Z\"/><path d=\"M6.10001 29.7148H4.57001V31.2348H6.10001V29.7148Z\"/><path d=\"M6.10001 20.575H4.57001V23.625H6.10001V20.575Z\"/><path d=\"M6.10001 16.0049H4.57001V19.0449H6.10001V16.0049Z\"/><path d=\"M6.10001 9.90479H4.57001V11.4248H6.10001V9.90479Z\"/><path d=\"M4.56999 26.6648H3.04999V29.7148H4.56999V26.6648Z\"/><path d=\"M4.56999 11.4248H3.04999V12.9548H4.56999V11.4248Z\"/><path d=\"M3.05002 23.625H1.52002V26.665H3.05002V23.625Z\"/><path d=\"M3.05002 12.9548H1.52002V16.0048H3.05002V12.9548Z\"/><path d=\"M1.52 16.0049H0V23.6249H1.52V16.0049Z\"/>"
	},
	flash: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M31.24 8.38013H29.71V9.90013H31.24V8.38013Z\"/><path d=\"M29.7101 9.8999H28.1901V11.4299H29.7101V9.8999Z\"/><path d=\"M29.7101 6.86011H28.1901V8.38011H29.7101V6.86011Z\"/><path d=\"M28.19 8.38013H26.67V9.90013H28.19V8.38013Z\"/><path d=\"M26.67 28.1901V26.6601H28.19V25.1401H26.67V23.6201H25.14V25.1401H23.62V26.6601H25.14V28.1901H26.67Z\"/><path d=\"M26.67 12.95H25.14V16H26.67V12.95Z\"/><path d=\"M25.14 16H23.62V17.52H25.14V16Z\"/><path d=\"M25.14 3.81006H23.62V5.33006H25.14V3.81006Z\"/><path d=\"M23.62 17.52H22.09V19.05H23.62V17.52Z\"/><path d=\"M23.62 5.33008H22.09V6.86008H23.62V5.33008Z\"/><path d=\"M22.0901 19.05H20.5701V20.57H22.0901V19.05Z\"/><path d=\"M22.0901 6.86011H20.5701V8.38011H22.0901V6.86011Z\"/><path d=\"M20.57 20.5701H19.05V22.0901H20.57V20.5701Z\"/><path d=\"M20.57 8.38013H19.05V9.90013H20.57V8.38013Z\"/><path d=\"M19.05 29.71H17.52V31.24H19.05V29.71Z\"/><path d=\"M19.05 22.0901H17.52V23.6201H19.05V22.0901Z\"/><path d=\"M17.52 9.8999V11.4299H16V12.9499H25.14V11.4299H19.05V9.8999H17.52Z\"/><path d=\"M17.52 23.6201H16V25.1401H17.52V23.6201Z\"/><path d=\"M25.14 2.28001V3.81001H26.67V0.76001H14.48V2.28001H25.14Z\"/><path d=\"M16 25.1399H14.48V26.6599H16V25.1399Z\"/><path d=\"M14.48 26.6599H12.95V28.1899H14.48V26.6599Z\"/><path d=\"M14.48 2.28003H12.95V3.81003H14.48V2.28003Z\"/><path d=\"M12.9501 28.1899H11.4301V29.7099H12.9501V28.1899Z\"/><path d=\"M12.9501 16H3.81006V17.52H11.4301V20.57H12.9501V16Z\"/><path d=\"M12.9501 3.81006H11.4301V5.33006H12.9501V3.81006Z\"/><path d=\"M11.43 29.71H9.90002V31.24H11.43V29.71Z\"/><path d=\"M11.43 20.5701H9.90002V25.1401H11.43V20.5701Z\"/><path d=\"M11.43 5.33008H9.90002V6.86008H11.43V5.33008Z\"/><path d=\"M9.9 25.1399H8.38V29.7099H9.9V25.1399Z\"/><path d=\"M9.9 6.86011H8.38V8.38011H9.9V6.86011Z\"/><path d=\"M8.37999 8.38013H6.85999V9.90013H8.37999V8.38013Z\"/><path d=\"M6.85996 9.8999H5.32996V11.4299H6.85996V9.8999Z\"/><path d=\"M5.33006 22.0901H3.81006V23.6201H5.33006V22.0901Z\"/><path d=\"M5.33006 11.4299H3.81006V12.9499H5.33006V11.4299Z\"/><path d=\"M3.81004 0.76001V2.28001H2.29004V3.81001H3.81004V5.33001H5.33004V3.81001H6.86004V2.28001H5.33004V0.76001H3.81004Z\"/><path d=\"M3.81004 23.6201H2.29004V25.1401H3.81004V23.6201Z\"/><path d=\"M3.81004 20.5701H2.29004V22.0901H3.81004V20.5701Z\"/><path d=\"M3.81004 12.95H2.29004V16H3.81004V12.95Z\"/><path d=\"M2.29001 22.0901H0.76001V23.6201H2.29001V22.0901Z\"/>"
	},
	component: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M30.48 6.1001H28.96V7.6201H27.43V9.1501H28.96V10.6701H30.48V9.1501H32V7.6201H30.48V6.1001Z\"/><path d=\"M30.48 18.2899H28.96V16.7699H25.91V10.6699H15.24V16.7699H4.57V18.2899H3.05V19.8099H1.53V21.3399H0V22.8599H4.57V31.9999H27.43V22.8599H32V19.8099H30.48V18.2899ZM16.76 12.1899H24.38V16.7699H16.76V12.1899ZM18.29 30.4799H6.1V22.8599H16.76V21.3399H18.29V30.4799ZM25.91 30.4799H19.81V18.2899H25.91V30.4799Z\"/><path d=\"M21.34 3.05005H19.81V4.58005H21.34V3.05005Z\"/><path d=\"M16.76 0V7.62H24.38V6.1H22.86V4.58H21.34V6.1H18.29V3.05H19.81V1.53H18.29V0H16.76Z\"/><path d=\"M13.72 7.62012H12.19V12.1901H13.72V7.62012Z\"/><path d=\"M12.19 12.1899H10.67V13.7199H12.19V12.1899Z\"/><path d=\"M12.19 6.1001H10.67V7.6201H12.19V6.1001Z\"/><path d=\"M10.67 13.72H6.09998V15.24H10.67V13.72Z\"/><path d=\"M10.67 4.58008H6.09998V6.10008H10.67V4.58008Z\"/><path d=\"M6.10001 12.1899H4.57001V13.7199H6.10001V12.1899Z\"/><path d=\"M6.10001 6.1001H4.57001V7.6201H6.10001V6.1001Z\"/><path d=\"M4.56999 7.62012H3.04999V12.1901H4.56999V7.62012Z\"/><path d=\"M3.05003 1.53003H1.53003V3.05003H3.05003V1.53003Z\"/>"
	},
	server: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M28.19 27.4301H29.72V25.9101H31.24V6.1001H29.72V7.6201H28.19V9.1401H23.62V10.6701H8.38V12.1901H22.1V19.8101H23.62V18.2901H28.19V16.7601H29.72V18.2901H28.19V19.8101H23.62V21.3301H22.1V28.9501H8.38V30.4801H23.62V28.9501H28.19V27.4301Z\"/><path d=\"M29.72 4.57007H26.67V6.10007H29.72V4.57007Z\"/><path d=\"M26.67 3.05005H22.1V4.57005H26.67V3.05005Z\"/><path d=\"M22.1 19.8101H8.38V21.3301H22.1V19.8101Z\"/><path d=\"M14.48 24.3801H9.91003V25.9101H14.48V24.3801Z\"/><path d=\"M14.48 15.24H9.91003V16.76H14.48V15.24Z\"/><path d=\"M22.1 1.52002H9.91003V3.05002H22.1V1.52002Z\"/><path d=\"M8.38 27.4299H3.81V28.9499H8.38V27.4299Z\"/><path d=\"M8.38 18.29H3.81V19.81H8.38V18.29Z\"/><path d=\"M8.38 9.14014H3.81V10.6701H8.38V9.14014Z\"/><path d=\"M9.91002 3.05005H5.33002V4.57005H9.91002V3.05005Z\"/><path d=\"M6.86 21.3301H3.81V24.3801H6.86V21.3301Z\"/><path d=\"M6.86 12.1899H3.81V15.2399H6.86V12.1899Z\"/><path d=\"M5.33004 4.57007H2.29004V6.10007H5.33004V4.57007Z\"/><path d=\"M3.81004 25.9099H2.29004V27.4299H3.81004V25.9099Z\"/><path d=\"M2.29001 18.2901H3.81001V16.7601H2.29001V9.1401H3.81001V7.6201H2.29001V6.1001H0.76001V25.9101H2.29001V18.2901Z\"/>"
	},
	package: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M0 6.1001V25.9101H32V6.1001H0ZM18.29 24.3901H1.52V7.6251H18.29V24.3901ZM24.38 24.3901H19.81V7.6251H22.86V13.7151H24.38V24.3901ZM30.48 24.3901H25.91V13.7151H27.43V7.6251H30.48V24.3901Z\"/><path d=\"M16.76 9.14502H15.24V12.195H16.76V9.14502Z\"/><path d=\"M12.19 9.14502H10.67V12.195H12.19V9.14502Z\"/><path d=\"M7.61999 21.3352H3.04999V22.8652H7.61999V21.3352Z\"/><path d=\"M7.61999 18.2852H3.04999V19.8152H7.61999V18.2852Z\"/>"
	},
	globe: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M30.48 21.3401H27.43V19.8101H25.91V22.8601H21.33V24.3801H19.81V25.9101H16.76V28.9601H22.86V27.4301H30.48V25.9101H32V22.8601H30.48V21.3401Z\"/><path d=\"M25.91 4.57007H24.38V6.10007H25.91V4.57007Z\"/><path d=\"M24.38 28.96H22.86V30.48H24.38V28.96Z\"/><path d=\"M25.91 18.29H22.86V19.81H25.91V18.29Z\"/><path d=\"M24.38 9.1499H22.86V15.2399H24.38V9.1499Z\"/><path d=\"M24.38 6.1001H22.86V7.6201H24.38V6.1001Z\"/><path d=\"M24.38 3.05005H22.86V4.57005H24.38V3.05005Z\"/><path d=\"M22.86 15.24H21.33V18.29H22.86V15.24Z\"/><path d=\"M22.86 7.62012H21.33V9.15012H22.86V7.62012Z\"/><path d=\"M22.86 4.57007H21.33V6.10007H22.86V4.57007Z\"/><path d=\"M22.8599 30.48H12.1899V32H22.8599V30.48Z\"/><path d=\"M21.3301 9.1499H19.8101V10.6699H21.3301V9.1499Z\"/><path d=\"M21.3301 6.1001H19.8101V7.6201H21.3301V6.1001Z\"/><path d=\"M19.81 10.6699H18.29V12.1899H19.81V10.6699Z\"/><path d=\"M19.81 7.62012H18.29V9.15012H19.81V7.62012Z\"/><path d=\"M18.29 12.1899H16.76V13.7199H18.29V12.1899Z\"/><path d=\"M18.29 9.1499H16.76V10.6699H18.29V9.1499Z\"/><path d=\"M16.76 13.72H15.24V15.24H16.76V13.72Z\"/><path d=\"M16.76 10.6699H15.24V12.1899H16.76V10.6699Z\"/><path d=\"M15.2399 12.1899H12.1899V13.7199H15.2399V12.1899Z\"/><path d=\"M12.19 28.96H10.67V30.48H12.19V28.96Z\"/><path d=\"M15.24 22.86V21.34H13.72V19.81H16.76V16.77H12.19V18.29H7.61998V19.81H6.09998V21.34H9.13998V22.86H15.24Z\"/><path d=\"M12.19 4.57007H10.67V6.10007H12.19V4.57007Z\"/><path d=\"M13.72 1.53V4.57H15.24V7.62H18.29V6.1H19.81V4.57H21.33V3.05H19.81V1.53H16.76V0H9.14001V1.53H13.72Z\"/><path d=\"M10.6699 27.4299H4.56995V28.9599H10.6699V27.4299Z\"/><path d=\"M10.67 9.1499H9.14001V10.6699H10.67V9.1499Z\"/><path d=\"M10.67 6.1001H7.62V7.6201H10.67V6.1001Z\"/><path d=\"M9.13998 1.53003H6.09998V3.05003H9.13998V1.53003Z\"/><path d=\"M6.09995 18.29H4.56995V19.81H6.09995V18.29Z\"/><path d=\"M6.09995 3.05005H4.56995V4.57005H6.09995V3.05005Z\"/><path d=\"M4.57002 25.9099H1.52002V27.4299H4.57002V25.9099Z\"/><path d=\"M9.14002 22.8601H1.52002V24.3801H9.14002V22.8601Z\"/><path d=\"M6.10002 15.2401V16.7701H9.14002V12.1901H7.62002V10.6701H6.10002V7.62007H4.57002V4.57007H3.05002V7.62007H1.52002V15.2401H3.05002V18.2901H4.57002V15.2401H6.10002Z\"/><path d=\"M1.52 24.3799H0V25.9099H1.52V24.3799Z\"/>"
	},
	type: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M32 25.9099H30.48V30.4799H32V25.9099Z\"/><path d=\"M32 1.52002H30.48V6.10002H32V1.52002Z\"/><path d=\"M30.48 30.48H25.91V32H30.48V30.48Z\"/><path d=\"M25.91 6.1001V7.6201H27.43V24.3801H25.91V25.9101H30.48V24.3801H28.95V7.6201H30.48V6.1001H25.91Z\"/><path d=\"M30.48 0H25.91V1.52H30.48V0Z\"/><path d=\"M25.91 25.9099H24.38V27.4299H7.61998V25.9099H6.09998V30.4799H7.61998V28.9499H24.38V30.4799H25.91V25.9099Z\"/><path d=\"M22.86 9.13989H21.33V12.1899H22.86V9.13989Z\"/><path d=\"M10.67 7.62012V9.14012H15.24V22.8601H12.19V24.3801H19.81V22.8601H16.76V9.14012H21.33V7.62012H10.67Z\"/><path d=\"M10.67 9.13989H9.14001V12.1899H10.67V9.13989Z\"/><path d=\"M6.09998 6.10002H7.61998V4.57002H24.38V6.10002H25.91V1.52002H24.38V3.05002H7.61998V1.52002H6.09998V6.10002Z\"/><path d=\"M6.10002 30.48H1.52002V32H6.10002V30.48Z\"/><path d=\"M6.10002 25.9101V24.3801H4.57002V7.6201H6.10002V6.1001H1.52002V7.6201H3.05002V24.3801H1.52002V25.9101H6.10002Z\"/><path d=\"M6.10002 0H1.52002V1.52H6.10002V0Z\"/><path d=\"M1.52 25.9099H0V30.4799H1.52V25.9099Z\"/><path d=\"M1.52 1.52002H0V6.10002H1.52V1.52002Z\"/>"
	},
	"git-branch": {
		viewBox: "0 0 32 32",
		body: "<path d=\"M30.47 24.3801H28.95V21.3301H27.42V24.3801H25.9V25.9001H24.38V30.4801H25.9V32.0001H30.47V30.4801H32V25.9001H30.47V24.3801Z\"/><path d=\"M27.42 19.8101H25.9V21.3301H27.42V19.8101Z\"/><path d=\"M16.76 18.2899V13.7099H19.8V12.1899H12.19V13.7099H15.23V18.2899H6.08997V19.8099H15.23V24.3799H13.71V25.8999H12.19V30.4799H13.71V31.9999H18.28V30.4799H19.8V25.8999H18.28V24.3799H16.76V19.8099H25.9V18.2899H16.76Z\"/><path d=\"M22.85 3.05005H21.33V10.67H22.85V3.05005Z\"/><path d=\"M21.33 10.6699H19.8V12.1899H21.33V10.6699Z\"/><path d=\"M21.33 1.52002H19.8V3.05002H21.33V1.52002Z\"/><path d=\"M19.8 7.62012H18.28V9.14012H19.8V7.62012Z\"/><path d=\"M19.8 4.57007H18.28V6.09007H19.8V4.57007Z\"/><path d=\"M18.28 9.13989H13.71V10.6699H18.28V9.13989Z\"/><path d=\"M19.7999 0H12.1899V1.52H19.7999V0Z\"/><path d=\"M13.7099 7.62012H12.1899V9.14012H13.7099V7.62012Z\"/><path d=\"M13.7099 4.57007H12.1899V6.09007H13.7099V4.57007Z\"/><path d=\"M12.19 10.6699H10.66V12.1899H12.19V10.6699Z\"/><path d=\"M12.19 1.52002H10.66V3.05002H12.19V1.52002Z\"/><path d=\"M10.66 3.05005H9.14001V10.67H10.66V3.05005Z\"/><path d=\"M6.08995 19.8101H4.56995V21.3301H6.08995V19.8101Z\"/><path d=\"M3.04 24.3801H1.52V25.9001H0V30.4801H1.52V32.0001H6.09V30.4801H7.61V25.9001H6.09V24.3801H4.57V21.3301H3.04V24.3801Z\"/>"
	},
	twitter: {
		viewBox: "0 0 32 32",
		body: "<path d=\"M28.945 11.435V12.955H30.475V9.90498H25.905V6.85498H24.375V11.435H28.945Z\"/><path d=\"M28.945 12.9548H27.425V14.4748H28.945V12.9548Z\"/><path d=\"M27.425 14.4749H25.905V16.0049H27.425V14.4749Z\"/><path d=\"M25.905 16.0049H24.375V22.0949H25.905V16.0049Z\"/><path d=\"M24.375 22.095H22.855V25.145H24.375V22.095Z\"/><path d=\"M24.375 5.33496H22.855V6.85496H24.375V5.33496Z\"/><path d=\"M22.855 25.145H21.335V26.665H22.855V25.145Z\"/><path d=\"M22.855 3.81494H21.335V5.33494H22.855V3.81494Z\"/><path d=\"M21.3351 26.6648H19.8051V28.1948H21.3351V26.6648Z\"/><path d=\"M21.335 8.38501H18.285V11.435H21.335V8.38501Z\"/><path d=\"M4.56504 28.1948V26.6648H3.04504V29.7148H19.805V28.1948H4.56504Z\"/><path d=\"M21.335 2.28491H15.235V3.81491H21.335V2.28491Z\"/><path d=\"M15.235 3.81494H13.715V5.33494H15.235V3.81494Z\"/><path d=\"M13.715 5.33496H12.185V6.85496H13.715V5.33496Z\"/><path d=\"M12.185 11.435V6.85498H10.665V9.90498H9.14502V11.435H12.185Z\"/><path d=\"M9.14505 22.0949H10.6651V20.575H7.61505V23.625H9.14505V22.0949Z\"/><path d=\"M9.14505 8.38501H7.61505V9.90501H9.14505V8.38501Z\"/><path d=\"M7.61503 23.625H6.09503V25.145H7.61503V23.625Z\"/><path d=\"M7.61503 19.0449H6.09503V20.5749H7.61503V19.0449Z\"/><path d=\"M7.61503 6.85498H6.09503V8.38498H7.61503V6.85498Z\"/><path d=\"M6.095 25.145H4.565V26.665H6.095V25.145Z\"/><path d=\"M6.095 17.5249H4.565V19.0449H6.095V17.5249Z\"/><path d=\"M6.095 5.33496H4.565V6.85496H6.095V5.33496Z\"/><path d=\"M4.56504 16.0049H3.04504V17.5249H4.56504V16.0049Z\"/><path d=\"M3.04502 5.33494H4.56502V3.81494H1.52502V16.0049H3.04502V5.33494Z\"/>"
	},
	github: {
		viewBox: "0.75 0.75 22.5 22.5",
		body: "<polygon points=\"23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9\"/>"
	},
	discord: {
		viewBox: "0 2.6 24 18.9",
		body: "<path fill=\"#5865F2\" d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>"
	},
	"flag-aboriginal": {
		viewBox: "0 0 24 16",
		body: "<path fill=\"#000000\" d=\"M0 0h24v1h-24zM0 1h24v1h-24zM0 2h24v1h-24zM0 3h11v1h-11zM13 3h11v1h-11zM0 4h9v1h-9zM15 4h9v1h-9zM0 5h8v1h-8zM16 5h8v1h-8zM0 6h8v1h-8zM16 6h8v1h-8zM0 7h7v1h-7zM17 7h7v1h-7z\"/><path fill=\"#ffff00\" d=\"M11 3h2v1h-2zM9 4h6v1h-6zM8 5h8v1h-8zM8 6h8v1h-8zM7 7h10v1h-10zM7 8h10v1h-10zM8 9h8v1h-8zM8 10h8v1h-8zM9 11h6v1h-6zM11 12h2v1h-2z\"/><path fill=\"#e50000\" d=\"M0 8h7v1h-7zM17 8h7v1h-7zM0 9h8v1h-8zM16 9h8v1h-8zM0 10h8v1h-8zM16 10h8v1h-8zM0 11h9v1h-9zM15 11h9v1h-9zM0 12h11v1h-11zM13 12h11v1h-11zM0 13h24v1h-24zM0 14h24v1h-24zM0 15h24v1h-24z\"/>"
	},
	"flag-torres-strait": {
		viewBox: "0 0 31 20",
		body: "<path fill=\"#2d6a4a\" d=\"M0 0h31v1h-31zM0 1h31v1h-31zM0 2h31v1h-31zM0 3h31v1h-31zM0 16h31v1h-31zM0 17h31v1h-31zM0 18h31v1h-31zM0 19h31v1h-31z\"/><path fill=\"#000000\" d=\"M0 4h31v1h-31zM0 15h31v1h-31z\"/><path fill=\"#0b2161\" d=\"M0 5h12v1h-12zM19 5h12v1h-12zM0 6h10v1h-10zM21 6h10v1h-10zM0 7h9v1h-9zM13 7h5v1h-5zM22 7h9v1h-9zM0 8h9v1h-9zM12 8h3v1h-3zM16 8h3v1h-3zM22 8h9v1h-9zM0 9h9v1h-9zM12 9h1v1h-1zM18 9h1v1h-1zM22 9h9v1h-9zM0 10h9v1h-9zM12 10h2v1h-2zM17 10h2v1h-2zM22 10h9v1h-9zM0 11h9v1h-9zM13 11h1v1h-1zM15 11h1v1h-1zM17 11h1v1h-1zM22 11h9v1h-9zM0 12h10v1h-10zM13 12h5v1h-5zM21 12h10v1h-10zM0 13h10v1h-10zM13 13h5v1h-5zM21 13h10v1h-10zM0 14h8v1h-8zM13 14h5v1h-5zM23 14h8v1h-8z\"/><path fill=\"#ffffff\" d=\"M12 5h7v1h-7zM10 6h11v1h-11zM9 7h4v1h-4zM18 7h4v1h-4zM9 8h3v1h-3zM15 8h1v1h-1zM19 8h3v1h-3zM9 9h3v1h-3zM13 9h5v1h-5zM19 9h3v1h-3zM9 10h3v1h-3zM14 10h3v1h-3zM19 10h3v1h-3zM9 11h4v1h-4zM14 11h1v1h-1zM16 11h1v1h-1zM18 11h4v1h-4zM10 12h3v1h-3zM18 12h3v1h-3zM10 13h3v1h-3zM18 13h3v1h-3zM8 14h5v1h-5zM18 14h5v1h-5z\"/>"
	},
	"flag-progress-pride": {
		viewBox: "0 0 30 18",
		body: "<path fill=\"#613915\" d=\"M0 0h2v1h-2zM1 1h2v1h-2zM2 2h2v1h-2zM3 3h2v1h-2zM4 4h2v1h-2zM5 5h2v1h-2zM6 6h2v1h-2zM7 7h2v1h-2zM8 8h2v1h-2zM8 9h2v1h-2zM7 10h2v1h-2zM6 11h2v1h-2zM5 12h2v1h-2zM4 13h2v1h-2zM3 14h2v1h-2zM2 15h2v1h-2zM1 16h2v1h-2zM0 17h2v1h-2z\"/><path fill=\"#000000\" d=\"M2 0h2v1h-2zM3 1h2v1h-2zM4 2h2v1h-2zM5 3h2v1h-2zM6 4h2v1h-2zM7 5h2v1h-2zM8 6h2v1h-2zM9 7h2v1h-2zM10 8h2v1h-2zM10 9h2v1h-2zM9 10h2v1h-2zM8 11h2v1h-2zM7 12h2v1h-2zM6 13h2v1h-2zM5 14h2v1h-2zM4 15h2v1h-2zM3 16h2v1h-2zM2 17h2v1h-2z\"/><path fill=\"#e40303\" d=\"M4 0h26v1h-26zM5 1h25v1h-25zM6 2h24v1h-24z\"/><path fill=\"#74d7ee\" d=\"M0 1h1v1h-1zM0 2h2v1h-2zM1 3h2v1h-2zM2 4h2v1h-2zM3 5h2v1h-2zM4 6h2v1h-2zM5 7h2v1h-2zM6 8h2v1h-2zM6 9h2v1h-2zM5 10h2v1h-2zM4 11h2v1h-2zM3 12h2v1h-2zM2 13h2v1h-2zM1 14h2v1h-2zM0 15h2v1h-2zM0 16h1v1h-1z\"/><path fill=\"#ffafc8\" d=\"M0 3h1v1h-1zM0 4h2v1h-2zM1 5h2v1h-2zM2 6h2v1h-2zM3 7h2v1h-2zM4 8h2v1h-2zM4 9h2v1h-2zM3 10h2v1h-2zM2 11h2v1h-2zM1 12h2v1h-2zM0 13h2v1h-2zM0 14h1v1h-1z\"/><path fill=\"#ff8c00\" d=\"M7 3h23v1h-23zM8 4h22v1h-22zM9 5h21v1h-21z\"/><path fill=\"#ffffff\" d=\"M0 5h1v1h-1zM0 6h2v1h-2zM0 7h3v1h-3zM0 8h4v1h-4zM0 9h4v1h-4zM0 10h3v1h-3zM0 11h2v1h-2zM0 12h1v1h-1z\"/><path fill=\"#ffed00\" d=\"M10 6h20v1h-20zM11 7h19v1h-19zM12 8h18v1h-18z\"/><path fill=\"#008026\" d=\"M12 9h18v1h-18zM11 10h19v1h-19zM10 11h20v1h-20z\"/><path fill=\"#004dff\" d=\"M9 12h21v1h-21zM8 13h22v1h-22zM7 14h23v1h-23z\"/><path fill=\"#750787\" d=\"M6 15h24v1h-24zM5 16h25v1h-25zM4 17h26v1h-26z\"/>"
	},
	instagram: {
		viewBox: "0 0 16 16",
		body: "<path d=\"M1 0h14v1h-14zM0 1h16v1h-16zM0 2h3v1h-3zM13 2h3v1h-3zM0 3h2v1h-2zM11 3h2v1h-2zM14 3h2v1h-2zM0 4h2v1h-2zM6 4h4v1h-4zM11 4h2v1h-2zM14 4h2v1h-2zM0 5h2v1h-2zM5 5h6v1h-6zM14 5h2v1h-2zM0 6h2v1h-2zM4 6h3v1h-3zM9 6h3v1h-3zM14 6h2v1h-2zM0 7h2v1h-2zM4 7h2v1h-2zM10 7h2v1h-2zM14 7h2v1h-2zM0 8h2v1h-2zM4 8h2v1h-2zM10 8h2v1h-2zM14 8h2v1h-2zM0 9h2v1h-2zM4 9h2v1h-2zM10 9h2v1h-2zM14 9h2v1h-2zM0 10h2v1h-2zM4 10h3v1h-3zM9 10h3v1h-3zM14 10h2v1h-2zM0 11h2v1h-2zM5 11h6v1h-6zM14 11h2v1h-2zM0 12h2v1h-2zM6 12h4v1h-4zM14 12h2v1h-2zM0 13h3v1h-3zM13 13h3v1h-3zM0 14h16v1h-16zM1 15h14v1h-14z\"/>"
	},
	facebook: {
		viewBox: "0 0 16 16",
		body: "<path d=\"M1 0h14v1h-14zM0 1h16v1h-16zM0 2h16v1h-16zM0 3h9v1h-9zM14 3h2v1h-2zM0 4h8v1h-8zM11 4h1v1h-1zM14 4h2v1h-2zM0 5h8v1h-8zM11 5h5v1h-5zM0 6h8v1h-8zM11 6h5v1h-5zM0 7h6v1h-6zM13 7h3v1h-3zM0 8h6v1h-6zM13 8h3v1h-3zM0 9h8v1h-8zM11 9h5v1h-5zM0 10h8v1h-8zM11 10h5v1h-5zM0 11h8v1h-8zM11 11h5v1h-5zM0 12h8v1h-8zM11 12h5v1h-5zM0 13h8v1h-8zM11 13h5v1h-5zM0 14h8v1h-8zM11 14h5v1h-5zM1 15h7v1h-7zM11 15h4v1h-4z\"/>"
	}
};
Object.keys(PIXEL_ICONS);
// src/components/svg/pixel-icons/PixelIcon.astro
createAstro("https://example.com");
var pixelIcon = tv({
	base: "inline-block w-auto shrink-0",
	variants: { size: {
		sm: "h-4",
		md: "h-5",
		lg: "h-6",
		xl: "h-8"
	} },
	defaultVariants: { size: "md" }
});
var $$PixelIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PixelIcon;
	const { name, size, title, class: className, ...rest } = Astro.props;
	const { viewBox, body } = PIXEL_ICONS[name];
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(viewBox, "viewBox")} fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"${addAttribute(pixelIcon({
		size,
		class: className
	}), "class")} data-slot="pixel-icon"${addAttribute(title ? "img" : void 0, "role")}${addAttribute(title ? void 0 : "true", "aria-hidden")}${spreadAttributes(rest)}>${title && renderTemplate`<title>${title}</title>`}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(body)}` })}</svg>`;
}, "/Users/jaimyn/dev/bms-website/src/components/svg/pixel-icons/PixelIcon.astro", void 0);
// src/components/Sections/Global/NewsletterSignup.astro
var $$NewsletterSignup = createComponent(($$result, $$props, $$slots) => {
	const action = "https://space.us5.list-manage.com/subscribe/post?u=53abe625ad6dbf036f8815e97&id=bc5371e651&f_id=0041bdedf0";
	const honeypot = "b_53abe625ad6dbf036f8815e97_bc5371e651";
	const tag = "3701034";
	const socials = [socialLink("instagram"), socialLink("facebook")].filter((link) => link !== void 0);
	const fieldClass = "bg-accent border-border rounded-none border-4 px-3 text-sm placeholder:text-muted-foreground";
	return renderTemplate`${maybeRenderHead($$result)}<section aria-labelledby="newsletter-heading" class="site-container pt-8"><div class="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left"><div class="flex flex-col gap-1"><h2 id="newsletter-heading" class="font-display text-info text-xs uppercase">Join our newsletter</h2><p class="text-muted-foreground text-xs">News, events and classes from Brisbane Makerspace.</p></div><form${addAttribute(action, "action")} method="post" target="_blank" class="flex w-full flex-col gap-3 sm:flex-row sm:items-end md:w-auto"><div class="flex flex-col gap-1 text-left">${renderComponent($$result, "Label", $$Label, {
		"for": "mce-FNAME",
		"class": "text-info font-display text-[8px] tracking-[2px] uppercase"
	}, { "default": ($$result) => renderTemplate`
          First name
        ` })}${renderComponent($$result, "Input", $$Input, {
		"id": "mce-FNAME",
		"name": "FNAME",
		"type": "text",
		"autocomplete": "given-name",
		"required": true,
		"class": `${fieldClass} h-11 sm:w-44`
	})}</div><div class="flex flex-col gap-1 text-left">${renderComponent($$result, "Label", $$Label, {
		"for": "mce-EMAIL",
		"class": "text-info font-display text-[8px] tracking-[2px] uppercase"
	}, { "default": ($$result) => renderTemplate`
          Email
        ` })}${renderComponent($$result, "Input", $$Input, {
		"id": "mce-EMAIL",
		"name": "EMAIL",
		"type": "email",
		"autocomplete": "email",
		"required": true,
		"class": `${fieldClass} h-11 sm:w-56`
	})}</div><input type="hidden" name="tags"${addAttribute(tag, "value")}><div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true"><input type="text"${addAttribute(honeypot, "name")} tabindex="-1" autocomplete="off"></div><button type="submit" name="subscribe" class="pixel-btn pixel-btn--blue h-11 px-5 text-xs uppercase">Subscribe</button>${socials.length > 0 && renderTemplate`<ul class="flex h-11 items-center gap-3">${socials.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${link.label} (opens in a new tab)`, "aria-label")} class="primary-focus text-info hover:text-success block transition-colors">${renderComponent($$result, "PixelIcon", $$PixelIcon, {
		"name": link.name,
		"size": "lg"
	})}</a></li>`)}</ul>`}</form></div></section>`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/NewsletterSignup.astro", void 0);
// src/config/policyData.json.ts
var policyLinks = {
	safeSpace: {
		label: "Safe Space Policy",
		href: "https://wiki.brisbanemaker.space/bylaws/safespace"
	},
	codeOfConduct: {
		label: "Code of Conduct",
		href: "https://wiki.brisbanemaker.space/bylaws/coc"
	}
};
/** The policies in the order the footer shows them. */
var policyLinkList = [policyLinks.safeSpace, policyLinks.codeOfConduct];
// src/components/Sections/Global/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const safeSpaceMessage = "BMS is a safe space for everyone. We acknowledge the Traditional Custodians of the unceded land that we operate on and pay respect to Elders past & present.";
	const flags = [
		{
			name: "flag-aboriginal",
			title: "Aboriginal flag"
		},
		{
			name: "flag-torres-strait",
			title: "Torres Strait Islander flag"
		},
		{
			name: "flag-progress-pride",
			title: "Progress Pride flag"
		}
	];
	const external = (platform) => {
		const link = socialLink(platform);
		return link && {
			...link,
			external: true
		};
	};
	const socialLinks = [external("linkedin"), external("youtube")].filter((link) => link !== void 0);
	const { links } = siteData;
	const memberLinks = [
		{
			label: "Member Login",
			href: links.portal,
			external: true
		},
		{
			label: "Wiki",
			href: links.wiki,
			external: true
		},
		{
			label: "Service Status",
			href: links.status,
			external: true
		},
		{
			label: "Donate",
			href: links.routes.donate
		},
		...policyLinkList.map((policy) => ({
			...policy,
			external: true
		})),
		{
			label: "Privacy",
			href: links.routes.privacy
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-background border-border border-t-4" data-slot="site-footer"><nav aria-label="Member links" class="site-container pt-8"><ul class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">${memberLinks.map((link) => renderTemplate`<li class="font-display text-muted-foreground flex items-center gap-3 text-[8px] not-first:before:content-['|']"><a${addAttribute(link.href, "href")}${spreadAttributes(link.external ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {})} class="primary-focus text-info hover:text-success font-display text-[8px] tracking-[2px] uppercase transition-colors">${link.label}</a></li>`)}</ul></nav>${renderComponent($$result, "NewsletterSignup", $$NewsletterSignup, {})}<div class="site-container flex flex-col items-center gap-4 pt-8 pb-8 text-center md:flex-row md:justify-between md:gap-6"><!-- Safe-space message + tiny 8-bit flags (replaces the Figma copyright line, 5:94). --><div class="flex flex-1 flex-col items-center gap-3 text-center"><p class="font-display text-info text-xs uppercase">${safeSpaceMessage}</p><ul class="flex items-center gap-1.5">${flags.map((flag) => renderTemplate`<li class="flex">${renderComponent($$result, "PixelIcon", $$PixelIcon, {
		"name": flag.name,
		"title": flag.title,
		"class": "h-4"
	})}</li>`)}</ul></div><!-- Social icons (Figma 5:96): pixel glyphs, blue in light / pink in dark → green on hover. -->${socialLinks.length > 0 && renderTemplate`<ul class="flex items-center gap-4">${socialLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}${addAttribute(link.label, "aria-label")} class="primary-focus text-info dark:text-secondary hover:text-success block transition-colors"${spreadAttributes(link.external ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {})}>${renderComponent($$result, "PixelIcon", $$PixelIcon, {
		"name": link.name,
		"class": "h-5"
	})}</a></li>`)}</ul>`}</div></footer>`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/Footer.astro", void 0);
// src/components/ui/nav/Nav.astro
createAstro("https://example.com");
var nav = tv({
	base: ["flex"],
	variants: { orientation: {
		horizontal: "flex-row gap-1",
		vertical: "flex-col gap-1"
	} },
	defaultVariants: { orientation: "horizontal" }
});
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Nav;
	const { orientation, class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav data-slot="nav"${spreadAttributes(rest)}><ul${addAttribute(nav({
		orientation,
		class: className
	}), "class")}>${renderSlot($$result, $$slots["default"])}</ul></nav>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/nav/Nav.astro", void 0);
// src/components/ui/nav/NavItem.astro
createAstro("https://example.com");
var navItem = tv({ base: ["inline-flex items-center"] });
var $$NavItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NavItem;
	const { class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<li${addAttribute(navItem({ class: className }), "class")} data-slot="nav-item"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/nav/NavItem.astro", void 0);
// src/components/ui/nav/NavLink.astro
createAstro("https://example.com");
var navLink = tv({
	base: [
		"text-muted-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors",
		"not-aria-[current=page]:hover:text-foreground outline-none focus-visible:ring-3 focus-visible:ring-outline",
		"aria-[current=page]:text-foreground"
	],
	variants: { variant: {
		underline: "border-b-2 border-transparent px-1 py-2 not-aria-[current=page]:hover:border-border aria-[current=page]:border-primary",
		pills: "rounded-md px-3 py-1.5 not-aria-[current=page]:hover:bg-muted aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground",
		segment: "rounded-md px-3 py-1.5 not-aria-[current=page]:hover:bg-muted/60 aria-[current=page]:bg-muted aria-[current=page]:text-foreground",
		retro: ["group relative px-2 py-1 pl-6 font-display text-[16px] leading-6 uppercase", "text-foreground not-aria-[current=page]:hover:text-success aria-[current=page]:text-success"]
	} },
	defaultVariants: { variant: "underline" }
});
var $$NavLink = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NavLink;
	const { variant, href, class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(navLink({
		variant,
		class: className
	}), "class")} data-slot="nav-link"${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/nav/NavLink.astro", void 0);
// src/config/navData.json.ts
/**
* * Primary navigation - the header's link set (Figma node 5:110).
*
* Labels are Title-case and uppercased in the UI (Press Start 2P). Hrefs carry the trailing slash
* to match `astro.config.mjs` `trailingSlash: "always"`. `as const satisfies` keeps the literal
* types while checking the shape.
*
* Order: VISIT · EVENTS · MEMBERSHIP · ABOUT · PROJECTS · (BLOG) · CONTACT. Home is intentionally not a nav item - the brand wordmark
* (Header.astro `<a href="/">`) is the home link, the common logo-as-home pattern. All four routes are
* live (`/contact/` is the one SSR page). Four Press Start labels fit the desktop bar at `lg` (measured).
*/
var navItems = [
	{
		label: "Visit",
		href: "/visit/"
	},
	{
		label: "Membership",
		href: "/membership/"
	},
	{
		label: "Events",
		href: "/events/"
	},
	{
		label: "About",
		href: "/about/"
	},
	{
		label: "Contact",
		href: "/contact/"
	}
];
// src/js/nav.ts
/**
* * Nav helpers.
*/
/**
* Whether a nav link's `href` is the current location - drives `aria-current="page"` and the
* header's active state (green label + ► pointer). Both paths are normalized to the site's
* trailing-slash shape (`astro.config.mjs` `trailingSlash: "always"`), so `/about` and `/about/`
* match alike. A non-home link also matches its descendants (`/blog/my-post/` activates `Blog`);
* home (`/`) matches only itself, never as a prefix of everything.
*
* @param pathname current URL path - pass `Astro.url.pathname`
* @param href the link's target, e.g. `/about/`
* @returns true when the link represents the current page
* @example isActive("/blog/hello/", "/blog/"); // true
*/
function isActive(pathname, href) {
	const withSlash = (p) => p.endsWith("/") ? p : `${p}/`;
	const path = withSlash(pathname);
	const target = withSlash(href);
	if (target === "/") return path === "/";
	return path === target || path.startsWith(target);
}
// src/components/Sections/Global/HeaderNavLinks.astro
createAstro("https://example.com");
var $$HeaderNavLinks = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$HeaderNavLinks;
	const { pathname, fullWidth = false } = Astro.props;
	return renderTemplate`${navItems.map((item) => renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { "class": fullWidth ? "w-full" : void 0 }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, {
		"variant": "retro",
		"href": item.href,
		"class": fullWidth ? "w-full" : void 0,
		"aria-current": isActive(pathname, item.href) ? "page" : void 0
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<svg class="fill-success pointer-events-none absolute top-1/2 left-1.5 h-3.5 w-2.5 -translate-y-1/2 opacity-0 transition-opacity duration-100 group-hover:opacity-100 group-aria-[current=page]:opacity-100" viewBox="0 0 10.41 13.02" aria-hidden="true"><path d="M10.41 6.64 0 13.02V0Z"></path></svg>${item.label}` })}` })}`)}`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/HeaderNavLinks.astro", void 0);
// src/components/ui/dialog/Dialog.astro
createAstro("https://example.com");
tv({ base: ["bg-card text-card-foreground border-border flex w-[calc(100%-2rem)] max-w-lg flex-col gap-4 rounded-lg border p-6 shadow-lg", "max-h-[85vh] overflow-y-auto"] });
// src/components/ui/button/Button.astro
createAstro("https://example.com");
tv({
	base: [
		"inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap",
		"transition-all outline-none focus-visible:ring-3 focus-visible:ring-outline",
		"disabled:pointer-events-none disabled:opacity-50",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0"
	],
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
			outline: "border-border text-foreground hover:bg-muted border bg-transparent",
			ghost: "text-foreground hover:bg-muted"
		},
		size: {
			sm: "h-9 px-3 text-sm",
			md: "h-11 px-4 text-base",
			lg: "h-12 px-6 text-lg"
		},
		icon: { true: "px-0" }
	},
	compoundVariants: [
		{
			icon: true,
			size: "sm",
			class: "w-9"
		},
		{
			icon: true,
			size: "md",
			class: "w-11"
		},
		{
			icon: true,
			size: "lg",
			class: "w-12"
		}
	],
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
// src/components/ui/dialog/DialogClose.astro
createAstro("https://example.com");
// src/components/ui/dialog/DialogDescription.astro
createAstro("https://example.com");
tv({ base: ["text-muted-foreground text-sm"] });
// src/components/ui/dialog/DialogFooter.astro
createAstro("https://example.com");
tv({ base: ["flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"] });
// src/components/ui/dialog/DialogHeader.astro
createAstro("https://example.com");
tv({ base: ["flex flex-col gap-1.5 text-center sm:text-left"] });
// src/components/ui/dialog/DialogTitle.astro
createAstro("https://example.com");
tv({ base: ["text-foreground text-lg leading-none font-medium"] });
// src/components/ui/dialog/DialogTrigger.astro
createAstro("https://example.com");
// src/components/ui/sheet/Sheet.astro
createAstro("https://example.com");
var sheet = tv({
	base: ["bg-card text-card-foreground border-border fixed m-0 flex flex-col gap-4 overflow-y-auto p-6 shadow-lg"],
	variants: { side: {
		right: "inset-y-0 right-0 left-auto h-auto max-h-none w-80 max-w-full rounded-none border-l",
		left: "inset-y-0 left-0 right-auto h-auto max-h-none w-80 max-w-full rounded-none border-r",
		top: "inset-x-0 top-0 bottom-auto h-auto max-h-[90vh] w-auto max-w-none rounded-none border-b",
		bottom: "inset-x-0 bottom-0 top-auto h-auto max-h-[90vh] w-auto max-w-none rounded-none border-t"
	} },
	defaultVariants: { side: "right" }
});
var $$Sheet = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Sheet;
	const { side = "right", class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<dialog${addAttribute(sheet({
		side,
		class: className
	}), "class")} data-slot="sheet"${addAttribute(side, "data-side")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</dialog>${renderScript($$result, "/Users/jaimyn/dev/bms-website/src/components/ui/sheet/Sheet.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jaimyn/dev/bms-website/src/components/ui/sheet/Sheet.astro", void 0);
// src/components/Sections/Global/Header.astro
createAstro("https://example.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const pathname = Astro.url.pathname;
	const discord = socialLink("discord");
	return renderTemplate`${maybeRenderHead($$result)}<header class="bg-background border-border shadow-pixel sticky top-0 z-50 h-16 border-b-4" data-slot="site-header"><div class="site-container flex h-full max-w-[1160px] items-center justify-between"><!-- Brand: wordmark (the pixel avatar was removed), links home. The link's accessible name is the wordmark. On a
         narrow phone the brand (min-w-0) shrinks and the wordmark truncates before the row overflows. --><a href="/" class="primary-focus flex min-w-0 items-center"${addAttribute(`${siteData.name} - home`, "aria-label")}><span class="font-display text-info xs:text-lg truncate text-base tracking-[-0.06em] uppercase sm:text-2xl">${siteData.name}</span></a><!-- Right cluster: desktop nav + Discord, or (below lg) Discord + hamburger. \`shrink-0\` so
         the controls keep their size and only the brand gives way on a cramped viewport. --><div class="flex shrink-0 items-center gap-2 sm:gap-3"><!-- \`lg:contents\` dissolves the wrapper on desktop so <Nav> flexes with its siblings; below lg
           the whole nav landmark is display:none (not just visually hidden). --><div class="hidden lg:contents">${renderComponent($$result, "Nav", $$Nav, {
		"aria-label": "Primary",
		"class": "gap-5 xl:gap-6"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeaderNavLinks", $$HeaderNavLinks, { "pathname": pathname })}` })}</div>${discord && renderTemplate`<a${addAttribute(discord.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${discord.label} (opens in a new tab)`, "aria-label")} class="pixel-btn size-9 shrink-0 [--pixel-btn-depth:#3c45a5] [--pixel-btn-face-hover:#4752c4] [--pixel-btn-face:#5865f2] [--pixel-btn-ink:#ffffff] [&amp;_path]:fill-white">${renderComponent($$result, "PixelIcon", $$PixelIcon, {
		"name": discord.name,
		"size": "md"
	})}</a>`}<button type="button" data-dialog-open="site-menu" aria-haspopup="dialog" aria-controls="site-menu" class="pixel-btn h-9 shrink-0 px-3 text-[10px] leading-none uppercase lg:hidden">Menu</button></div></div><!-- Mobile navigation drawer (native <dialog>). Opened by the MENU button above; \`data-dialog-close\`
       is the Sheet's own \`_dialog\` hook (Escape + backdrop dismiss are automatic). -->${renderComponent($$result, "Sheet", $$Sheet, {
		"id": "site-menu",
		"side": "right",
		"aria-labelledby": "site-menu-title",
		"class": "w-72 gap-6"
	}, { "default": ($$result) => renderTemplate`<div class="flex items-center justify-between"><span id="site-menu-title" class="font-display text-foreground text-sm uppercase">Menu</span><button type="button" data-dialog-close class="pixel-btn h-9 shrink-0 px-3 text-[10px] leading-none uppercase">Close</button></div>${renderComponent($$result, "Nav", $$Nav, {
		"orientation": "vertical",
		"aria-label": "Primary",
		"class": "gap-2"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeaderNavLinks", $$HeaderNavLinks, {
		"pathname": pathname,
		"fullWidth": true
	})}` })}` })}</header>`;
}, "/Users/jaimyn/dev/bms-website/src/components/Sections/Global/Header.astro", void 0);
// node_modules/.pnpm/@fontsource+press-start-2p@5.3.0/node_modules/@fontsource/press-start-2p/files/press-start-2p-latin-400-normal.woff2
var press_start_2p_latin_400_normal_default = "/_astro/press-start-2p-latin-400-normal._wFEWmAB.woff2";
// node_modules/.pnpm/@fontsource+space-mono@5.3.0/node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff2
var space_mono_latin_400_normal_default = "/_astro/space-mono-latin-400-normal.Rg4St2Dn.woff2";
// src/js/schema.ts
/** Stable `@id` for the site Organization node, derived from any absolute site URL. */
function organizationId(siteUrl) {
	return `${new URL(siteUrl).origin}/#organization`;
}
/**
* * Organization node - the publishing entity behind the site.
* @returns a JSON-LD Organization keyed by a stable `@id` so WebSite/Article can reference it.
*
* ```ts
* getOrganizationSchema({ name: "Acme", url: "https://acme.com/", logo: "https://acme.com/logo.png" });
* ```
*/
function getOrganizationSchema({ name, url, logo, sameAs }) {
	const origin = new URL(url).origin;
	return {
		"@type": "Organization",
		"@id": organizationId(url),
		name,
		url: `${origin}/`,
		logo: {
			"@type": "ImageObject",
			url: logo
		},
		...sameAs && sameAs.length > 0 ? { sameAs: [...sameAs] } : {}
	};
}
/**
* * WebSite node - the site itself, linked to its publisher Organization.
* @returns a JSON-LD WebSite keyed by a stable `@id`.
*/
function getWebSiteSchema({ name, url, description, inLanguage, publisherId }) {
	const origin = new URL(url).origin;
	return {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		name,
		url: `${origin}/`,
		inLanguage,
		...description ? { description } : {},
		...publisherId ? { publisher: { "@id": publisherId } } : {}
	};
}
/**
* * The site-level graph every page emits: an Organization and the WebSite it publishes,
* linked by `@id`. Composes {@link getOrganizationSchema} + {@link getWebSiteSchema} so the
* publisher wiring lives here, not in the layout.
* @returns the two linked nodes, ready to spread into a page's graph.
*/
function getSiteSchema({ name, url, description, inLanguage, logo, sameAs }) {
	return [getOrganizationSchema({
		name,
		url,
		logo,
		sameAs
	}), getWebSiteSchema({
		name,
		url,
		description,
		inLanguage,
		publisherId: organizationId(url)
	})];
}
/**
* * Serialize nodes into a schema.org document for inlining in a `<script>` tag.
* A single node inlines directly; multiple nodes are wrapped in an `@graph`. `<` is escaped to
* `\u003c` so a value containing `<\/script>` cannot break out of the tag.
* @returns the JSON string, or `""` for an empty graph (so BaseHead can skip the tag).
*/
function serializeJsonLd(nodes) {
	if (nodes.length === 0) return "";
	const doc = nodes.length === 1 ? {
		"@context": "https://schema.org",
		...nodes[0]
	} : {
		"@context": "https://schema.org",
		"@graph": [...nodes]
	};
	return JSON.stringify(doc).replace(/</g, "\\u003c");
}
// node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro
createAstro("https://example.com");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/jaimyn/dev/bms-website/node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jaimyn/dev/bms-website/node_modules/.pnpm/astro@7.4.7_@types+node@24.13.3_esbuild@0.28.2_idb-keyval@6.2.6_jiti@2.7.0_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro", void 0);
// src/layouts/BaseHead.astro
createAstro("https://example.com");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const { title, tabTitle, description, image, noindex = false, schema, article } = Astro.props;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const socialImage = new URL(image?.src ?? siteData.defaultImage.src, Astro.site);
	const imageAlt = image ? title : siteData.defaultImage.alt;
	const imageWidth = image?.width ?? 1200;
	const imageHeight = image?.height ?? 630;
	const ogLocale = siteLocale.replace("-", "_");
	const jsonLd = serializeJsonLd([...getSiteSchema({
		name: siteData.name,
		url: canonicalURL.href,
		description: siteData.description,
		inLanguage: siteLocale,
		logo: new URL(siteData.defaultImage.src, canonicalURL).href,
		sameAs: siteData.sameAs
	}), ...schema ?? []]);
	return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro.generator, "content")}><!-- preload the two above-the-fold faces (pixel headings + mono body) for faster first paint --><link rel="preload"${addAttribute(press_start_2p_latin_400_normal_default, "href")} as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload"${addAttribute(space_mono_latin_400_normal_default, "href")} as="font" type="font/woff2" crossorigin="anonymous"><!-- favicons (replace the defaults in /public) --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="sitemap" href="/sitemap-index.xml"><!-- SEO --><title>${tabTitle ?? title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Open Graph --><meta property="og:type"${addAttribute(article ? "article" : "website", "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteData.name, "content")}><meta property="og:locale"${addAttribute(ogLocale, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta property="og:image:alt"${addAttribute(imageAlt, "content")}><meta property="og:image:width"${addAttribute(`${imageWidth}`, "content")}><meta property="og:image:height"${addAttribute(`${imageHeight}`, "content")}>${article && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<meta property="article:published_time"${addAttribute(article.published.toISOString(), "content")}>${article.modified && renderTemplate`<meta property="article:modified_time"${addAttribute(article.modified.toISOString(), "content")}>`}${article.author && renderTemplate`<meta property="article:author"${addAttribute(article.author, "content")}>`}` })}`}<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>${siteData.author.twitter && renderTemplate`<meta name="twitter:creator"${addAttribute(`@${siteData.author.twitter}`, "content")}>`}<!-- structured data (schema.org JSON-LD) - is:inline: raw data block, not a processed script -->${jsonLd && renderTemplate`<script type="application/ld+json">${unescapeHTML(jsonLd)}<\/script>`}<!-- Set theme before paint to avoid a flash of the wrong color theme --><script>
  // The site always follows the device color scheme (no manual toggle). Kept INLINE and pre-paint on
  // purpose - moving it to a bundled <script> reintroduces a flash of the wrong theme (see CLAUDE.md).
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  function initTheme() {
    document.documentElement.classList.toggle("dark", query.matches);
  }

  initTheme();
  // follow live OS / browser color-scheme changes
  query.addEventListener("change", initTheme);
  // re-run after view-transition navigations
  document.addEventListener("astro:after-swap", initTheme);
<\/script>${siteSettings.useViewTransitions && renderTemplate`${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "none" })}`}`;
}, "/Users/jaimyn/dev/bms-website/src/layouts/BaseHead.astro", void 0);
// src/layouts/BaseLayout.astro
createAstro("https://example.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, tabTitle, description, image, noindex = false, schema, article } = Astro.props;
	return renderTemplate`<html${addAttribute("en", "lang")}><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": title,
		"tabTitle": tabTitle,
		"description": description,
		"image": image,
		"noindex": noindex,
		"schema": schema,
		"article": article
	})}${renderHead($$result)}</head><body class="flex min-h-[100lvh] flex-col">${renderComponent($$result, "Header", $$Header, {})}<main class="flex-1">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/jaimyn/dev/bms-website/src/layouts/BaseLayout.astro", void 0);
// src/pages/contact-backup.astro
var contact_backup_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ContactBackup,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$ContactBackup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"noindex": true,
		"title": `Contact - ${siteData.tabTitle}`,
		"description": "Drop me a transmission - questions on vintage hardware, a retro-quest collab, or a guest devlog pitch - plus e-mail, Discord and GitHub links and a system FAQ."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="site-container flex flex-col gap-10 py-8 md:gap-12 md:py-12">${renderComponent($$result, "Hero", $$Hero, {})}<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">${renderComponent($$result, "Form", $$Form, {})}${renderComponent($$result, "InfoCards", $$InfoCards, { "stacked": true })}</div>${renderComponent($$result, "Faq", $$Faq, {})}</div>` })}`;
}, "/Users/jaimyn/dev/bms-website/src/pages/contact-backup.astro", void 0);
var $$file = "/Users/jaimyn/dev/bms-website/src/pages/contact-backup.astro";
var $$url = "/contact-backup/";
// \0virtual:astro:page:src/pages/contact-backup@_@astro
var page = () => contact_backup_exports;
export { page };

//# sourceMappingURL=contact-backup_DP6quWC0.mjs.map