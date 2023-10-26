import * as types from "../types";

export function matchAllAtIgnoreCase(pattern: string, value: string) {
	// 大文字小文字区別しない
	const reg = new RegExp(pattern, "ig");
	return value.matchAll(reg);
}

export function escapeRegExp(value: string) {
	// 特殊文字をエスケープする正規表現パターン
	const regexPattern = /[-/\\^$*+?.()|[\]{}]/g;

	// 特殊文字をエスケープして返す
	return value.replace(regexPattern, "\\$&");
}

export function hasAlphabet(value: string) {
	const reg = new RegExp(types.AlphabetPattern, "i");
	return reg.test(value);
}

export function replaceSymbolToSpaceOrOmit(value: string) {
	// 除外
	const omitValue = value.replace(new RegExp("'", "g"), "");

	// スペースに変換
	return omitValue.replace(new RegExp("[!-/:-@[-`{-~]", "g"), " ");
}

export function insertSpaceBeforeUpperCase(value: string) {
	const reg = new RegExp("([A-Z])", "g");
	return value.replace(reg, " $1").trim();
}

export function insertSpaceBothSideAtNumbers(value: string) {
	const reg = new RegExp("(\\d+)", "g");
	return value.replace(reg, " $1 ").trim();
}
