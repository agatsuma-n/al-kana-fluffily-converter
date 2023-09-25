export function qsStrict<T extends Element>(
	parent: Element | Document,
	query: string
) {
	const result = parent.querySelector<T>(query);
	if (result == null) throw new Error(`${query}が見つかりません`);
	return result;
}
