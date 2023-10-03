import { BaseConverter } from ".";
import * as types from "../types";

/**
 * 数字をカナに変換する
 */
export class NumberToKanaConverter extends BaseConverter {
	get conversions() {
		return types.NumberToKanaConversions;
	}

	findConversion(value: number) {
		return this.conversions.find(
			({ conversionPattern }) => conversionPattern.main === `${value}`
		);
	}

	addIfHasSpecifiedPlace(value: number, place: number) {
		const placeConversion = this.findConversion(Math.floor(value / place));
		if (placeConversion != null) {
			this.appendConvertedWord(placeConversion.afterConversion);
			return true;
		}
		return false;
	}

	getLessThan100Kana(value: number) {
		if (value <= 20) {
			const lessThan20Conversion = this.findConversion(value);
			return lessThan20Conversion?.afterConversion ?? "";
		}

		const place10Conversion = this.findConversion(
			Math.floor(value / 10) * 10
		);
		const place1Conversion = this.findConversion(value % 10);

		return `${place10Conversion?.afterConversion ?? ""}${
			place1Conversion?.afterConversion ?? ""
		}`;
	}

	convert(word: string) {
		super.convert(word);

		// 変換最大桁数を超える場合は1文字ずつ分解
		const words = word.length <= types.MAXConvertDigit ? [word] : [...word];

		words.forEach((value) => {
			const numberWord = Number(value);

			const lessThan100 = numberWord % 100;

			// 1000の位
			const isAddThousand = this.addIfHasSpecifiedPlace(numberWord, 1000);

			// 100の位
			const isAddHundred = this.addIfHasSpecifiedPlace(numberWord, 100);

			// 100未満
			const lessThan100Kana = this.getLessThan100Kana(lessThan100);

			const hasMoreThan100 = isAddThousand || isAddHundred;

			if (lessThan100Kana.length !== 0) {
				if (hasMoreThan100 === true) {
					this.appendConvertedWord(types.HundredSeparator);
				}

				this.appendConvertedWord(lessThan100Kana);
			}
		});

		return this.convertedWord;
	}
}
