import { BaseConverter } from ".";
import * as types from "../types";
import * as utils from "../utils";

/**
 * 英単語をローマ字に変換する
 */
export class WordToRomaConverter extends BaseConverter {
	get conversions() {
		return types.WordToRomaConversions;
	}

	/**
	 * 全ての一致パターン取得
	 * @param word
	 * @returns
	 */
	getAllMatch(word: string) {
		const findConversion = this.conversions
			.flatMap(({ conversionPattern, afterConversion }) => {
				const pattern = this.createPattern(conversionPattern);

				const matches = utils.matchAllAtIgnoreCase(pattern, word);

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
			})
			.filter(utils.nonNullable);

		return findConversion.filter(
			(a, index) =>
				findConversion
					.slice(index + 1)
					.some((b) => a.pattern === b.pattern) === false
		);
	}

	sortByPriorityConversion(a: types.MatchResult, b: types.MatchResult) {
		// indexが小さい
		const diffIndex = a.startIndex - b.startIndex;
		if (diffIndex !== 0) {
			return diffIndex;
		}

		// 文字数が多い
		return b.mainPattern.length - a.mainPattern.length;
	}

	replaceByMatchPattern(word: string, matches: types.MatchResult[]) {
		this.convertedWord = word;

		matches.forEach((conversion) => {
			// 置換
			// $1=prefix, $2=main, $3=suffix
			this.convertedWord = this.convertedWord.replace(
				RegExp(conversion.pattern, "ig"),
				`$1${conversion.afterConversion}$3`
			);
		});
	}

	// TODO: 削除
	// replaceByMatchPattern(word: string, matches: types.MatchResult[]) {
	// 	let replaceStartIndex = 0;

	// 	matches.forEach((match) => {
	// 		// 残りの文字列で再度マッチ確認
	// 		const result = utils.matchAllAtIgnoreCase(
	// 			match.pattern,
	// 			word.substring(replaceStartIndex)
	// 		);
	// 		if ([...result].length === 0) {
	// 			return;
	// 		}

	// 		// 変換範囲を抽出
	// 		const replaceRange = word.substring(
	// 			replaceStartIndex,
	// 			replaceStartIndex + match.endIndex
	// 		);

	// 		replaceStartIndex = replaceStartIndex + match.endIndex;

	// 		// 置換
	// 		// $1=prefix, $2=main, $3=suffix
	// 		const replaced = replaceRange.replace(
	// 			RegExp(match.pattern),
	// 			`$1${match.afterConversion}$3`
	// 		);

	// 		// 置換文字と結合
	// 		this.appendConvertedWord(replaced);
	// 	});

	// 	this.appendConvertedWord(word.substring(replaceStartIndex));
	// }

	convert(word: string) {
		super.convert(word);

		// 全ての一致するパターン取得
		const matches = this.getAllMatch(word);

		// 変換位置が早い順
		matches.sort(this.sortByPriorityConversion);

		// 置換
		this.replaceByMatchPattern(word, matches);

		return this.convertedWord;
	}
}
