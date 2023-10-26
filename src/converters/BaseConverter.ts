import * as types from "../types";
import * as utils from "../utils";

export abstract class BaseConverter {
	/**
	 * 変換後の文字列
	 */
	convertedWord: string;

	constructor() {
		this.convertedWord = "";
	}

	abstract get conversions(): types.WordConversion[];

	/**
	 * 名前付きグループ化して返却する
	 * @param pattern
	 * @returns
	 */
	createPattern(pattern: types.Pattern) {
		const grouping = (name: string, value?: string) =>
			`(?<${name}>${value ?? ""})`;

		return `${grouping("prefix", pattern.prefix)}${grouping(
			"main",
			pattern.main
		)}${grouping("suffix", pattern.suffix)}`;
	}

	appendConvertedWord(value: string) {
		this.convertedWord = `${this.convertedWord}${value}`;
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

				return utils.convertToMatchResult(
					matches,
					pattern,
					afterConversion
				);
			})
			.filter(utils.nonNullable);

		return utils.filterUniqueMatchPattern(findConversion);
	}

	replaceByMatchPattern(word: string, matches: types.MatchResult[]) {
		this.convertedWord = word;

		matches.forEach((conversion) => {
			// 置換
			// $1=prefix, $2=main, $3=suffix
			this.convertedWord = this.convertedWord.replace(
				RegExp(conversion.pattern, "ig"),
				`$<prefix>${conversion.afterConversion}$<suffix>`
			);
		});
	}

	/**
	 * この関数を上書きして実装する
	 * TODO: 本当に必要か再検討
	 * @param word
	 * @returns
	 */
	convert(word: string) {
		this.convertedWord = "";
		return this.convertedWord;
	}
}
