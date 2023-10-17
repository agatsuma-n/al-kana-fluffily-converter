import { BaseConverter } from ".";
import * as types from "../types";
import * as utils from "../utils";

export class NounToKanaConverter extends BaseConverter {
	get conversions() {
		return types.NounToKanaConversions;
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
