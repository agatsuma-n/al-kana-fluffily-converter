import * as types from "../types";

export abstract class BaseConverter {
	convertedWord: string;

	constructor() {
		this.convertedWord = "";
	}

	abstract get conversions(): types.WordConversion[];

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

	convert(word: string) {
		this.convertedWord = "";
		return this.convertedWord;
	}
}
