import { BaseConverter } from ".";
import * as types from "../types";

/**
 * ローマ字からカナに変換する
 */
export class RomaToKanaConverter extends BaseConverter {
	get conversions() {
		return types.RomaToKanaConversions;
	}

	replaceSmallWord(value: string) {
		const smallMatch = value
			.substring(0, 2)
			.match(new RegExp(types.SmallPattern));

		if (smallMatch == null) {
			return value;
		}

		// 置換文字と結合
		this.appendConvertedWord("ッ");
		return value.substring(1);
	}

	findConversion(value: string) {
		// 通常の比較
		const conversion = this.conversions.find(
			(conversion) => conversion.conversionPattern.main === value
		);
		if (conversion != null) {
			return conversion;
		}

		// kpiのような存在しないパターンが取得されている可能性がある
		// 2文字目以降と比較
		const sub1Conversion = this.conversions.find(
			(conversion) =>
				conversion.conversionPattern.main === value.substring(1)
		);

		// 1文字目を英字のまま追加
		if (sub1Conversion != null) {
			this.appendConvertedWord(value.substring(0, 1));
		}

		return sub1Conversion;
	}

	convert(word: string) {
		super.convert(word);

		let replaceStartIndex = 0;

		const regExp = new RegExp(types.RomaPattern, "ig");

		let match: RegExpExecArray | null = null;

		while ((match = regExp.exec(word)) != null) {
			// マッチする以前の文字を結合
			if (replaceStartIndex !== match.index) {
				this.appendConvertedWord(
					word.substring(replaceStartIndex, match.index)
				);

				// 変換範囲を保存
				replaceStartIndex += match.index - replaceStartIndex;
			}

			// 変換範囲を抽出
			let replaceRange = match[0];

			// 変換範囲を保存
			replaceStartIndex += replaceRange.length;

			// TODO: 小書き置換
			replaceRange = this.replaceSmallWord(replaceRange);

			// 置換
			const conversion = this.findConversion(replaceRange);

			// 結合
			if (conversion == null) {
				this.appendConvertedWord(replaceRange);
			} else {
				this.appendConvertedWord(conversion.afterConversion);
			}
		}

		// 残った文字を結合
		this.appendConvertedWord(word.substring(replaceStartIndex));

		return this.convertedWord;
	}
}
