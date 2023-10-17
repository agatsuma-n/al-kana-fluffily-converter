import { BaseConverter } from ".";
import * as types from "../types";
import * as utils from "../utils";

export class AdditionalConverter extends BaseConverter {
	additionalConversions: types.WordConversion[];

	constructor(additionalConversions: types.SimpleConversion[]) {
		super();

		this.additionalConversions = this.convertToWordConversion(
			additionalConversions
		);
	}

	convertToWordConversion(dictionary: types.SimpleConversion[]) {
		return dictionary.map(
			({ word, kana }) =>
				({
					conversionPattern: {
						main: word,
					},
					afterConversion: kana,
				} as types.WordConversion)
		);
	}

	get conversions() {
		return this.additionalConversions;
	}

	convert(word: string) {
		super.convert(word);

		// 全ての一致するパターン取得
		const matches = this.getAllMatch(word);

		// 変換優先順にソート
		matches.sort(utils.sortByPriorityConversion);

		// 置換
		this.replaceByMatchPattern(word, matches);

		return this.convertedWord;
	}
}
