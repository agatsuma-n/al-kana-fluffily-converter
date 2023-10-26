import * as types from "../types";

export function convertToMatchResult(
	matches: IterableIterator<RegExpMatchArray>,
	pattern: string,
	afterConversion: string
) {
	return [...matches].map((match) => {
		const mainPattern = match.groups!.main;
		const startIndex =
			(match.index ?? 0) + (match.groups?.prefix.length ?? 0);
		return {
			mainPattern,
			startIndex,
			endIndex: startIndex + mainPattern.length,
			pattern,
			afterConversion,
		} as types.MatchResult;
	});
}

export function filterUniqueMatchPattern(list: types.MatchResult[]) {
	return list.filter(
		(a, index) =>
			list.slice(index + 1).some((b) => a.pattern === b.pattern) === false
	);
}

export function sortByPriorityConversion(
	a: types.MatchResult,
	b: types.MatchResult
) {
	// indexが小さい
	const diffIndex = a.startIndex - b.startIndex;
	if (diffIndex !== 0) {
		return diffIndex;
	}

	// 文字数が多い
	return b.mainPattern.length - a.mainPattern.length;
}
