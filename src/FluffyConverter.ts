import { Converter } from "./Converter";
import { Dictionary } from "./types";

/**
 * NGワード対策無し
 */
export class FluffyConverter {
	isConvertNumbers: boolean;
	originalDictionary?: Dictionary[];

	/**
	 *
	 * @param originalDictionary 未実装。渡された辞書をもとに優先的に変換する
	 */
	constructor(isConvertNumbers: boolean, originalDictionary?: Dictionary[]) {
		this.isConvertNumbers = isConvertNumbers;
		this.originalDictionary = originalDictionary;
	}

	/**
	 * メインとなる関数
	 * @param word
	 * @returns
	 */
	convert(word: string) {
		// TODO: converterチェック
		// 重複が存在しないか確認する

		// 変換
		const converter = new Converter(word, this.isConvertNumbers);
		return converter.convert();
	}
}
