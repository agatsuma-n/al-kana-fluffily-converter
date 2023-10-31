import { Converter } from "./Converter";
import { SimpleConversion } from "./types";

/**
 * NGワード対策無し
 */
export class FluffyConverter {
	isConvertNumbers: boolean;
	additionalConversions?: SimpleConversion[];

	/**
	 *
	 * @param isConvertNumbers 数字の変換有無。trueなら1->ワンと言うように変換する
	 * @param additionalConversions 追加の変換一覧
	 */
	constructor(
		isConvertNumbers: boolean,
		additionalConversions?: SimpleConversion[]
	) {
		this.isConvertNumbers = isConvertNumbers;
		this.additionalConversions = additionalConversions;
	}

	/**
	 * 英単語をカナに変換する
	 * @param word 変換したい英単語
	 * @returns カナ
	 */
	convert(word: string) {
		// TODO: converterチェック
		// 重複が存在しないか確認する

		// 変換
		const converter = new Converter(
			word,
			this.isConvertNumbers,
			this.additionalConversions
		);
		return converter.convert();
	}
}
