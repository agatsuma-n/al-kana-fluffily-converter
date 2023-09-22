import { BaseConverter } from ".";
import * as types from "../types";

/**
 * 英文字をカナに変換する
 * TODO: 未実装
 */
export class CharacterToKanaConverter extends BaseConverter {
	get conversions() {
		return types.CharacterToKanaConversions;
	}

	convert(word: string) {
		return word;
	}
}
