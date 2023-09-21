import { BaseConverter } from ".";
import * as types from "../types";

export class CharacterToKanaConverter extends BaseConverter {
	get conversions() {
		return types.CharacterToKanaConversions;
	}

	convert(word: string) {
		return word;
	}
}
