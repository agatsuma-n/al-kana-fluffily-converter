import * as types from "../types";

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
