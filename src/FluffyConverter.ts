import { Converter } from "./Converter";
import { Dictionary } from "./types";

/**
 * NGワード対策無し
 */
export class FluffyConverter {
	converter!: Converter;

	additionalDictionary?: Dictionary[];

	constructor(additionalDictionary?: Dictionary[]) {
		this.additionalDictionary = additionalDictionary;
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
		this.converter = new Converter(word);
		return this.converter.convert();
	}
}
