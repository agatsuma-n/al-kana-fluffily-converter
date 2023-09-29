import { BaseConverter } from ".";
import * as types from "../types";

/**
 * 英文字をカナに変換する
 */
export class CharacterToKanaConverter extends BaseConverter {
	get conversions() {
		return types.CharacterToKanaConversions;
	}

	convert(word: string) {
		super.convert(word);
		this.convertedWord = word;

		const regExp = new RegExp(types.AlphabetPattern, "ig");

		let match: RegExpExecArray | null = null;

		while ((match = regExp.exec(word)) != null) {
			// 変換範囲を抽出
			const matchValue = match[0];

			// 変換表から抽出
			const conversion = this.conversions.find(
				({ conversionPattern }) => conversionPattern.main === matchValue
			);
			if (conversion == null) {
				continue;
			}

			this.convertedWord = this.convertedWord.replace(
				RegExp(matchValue, "ig"),
				`${conversion.afterConversion}`
			);
		}

		return this.convertedWord;
	}
}
