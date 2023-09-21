export function matchAllAtIgnoreCase(pattern: string, value: string) {
	// 大文字小文字区別しない
	const reg = new RegExp(pattern, "ig");
	return value.matchAll(reg);
}

export function replaceSymbolToSpace(value: string) {
	const reg = new RegExp("[ -/:-@[-´{-~]+", "g");
	return value.replace(reg, " ");
}
