import * as converters from "./converters";
import * as utils from "./utils";
import * as types from "./types";

export class Converter {
	beforeWord: string;
	workWords: string[];
	afterWord: string[];
	isConvertNumbers: boolean;

	wordToRomaConverter: converters.WordToRomaConverter;
	romaToKanaConverter: converters.RomaToKanaConverter;
	characterToKanaConverter: converters.CharacterToKanaConverter;
	numberToKanaConverter: converters.NumberToKanaConverter;
	nounToKanaConverter: converters.NounToKanaConverter;
	additionalConverter: converters.AdditionalConverter | null;

	constructor(
		word: string,
		isConvertNumbers: boolean,
		additionalConversions?: types.SimpleConversion[]
	) {
		this.beforeWord = word;
		this.workWords = [];
		this.afterWord = [];
		this.isConvertNumbers = isConvertNumbers;

		this.wordToRomaConverter = new converters.WordToRomaConverter();
		this.romaToKanaConverter = new converters.RomaToKanaConverter();
		this.characterToKanaConverter =
			new converters.CharacterToKanaConverter();
		this.numberToKanaConverter = new converters.NumberToKanaConverter();
		this.nounToKanaConverter = new converters.NounToKanaConverter();
		this.additionalConverter =
			additionalConversions == null
				? null
				: new converters.AdditionalConverter(additionalConversions);
	}

	createWorkWords(beforeValue: string) {
		// 記号を変換
		const word = utils.replaceSymbolToSpaceOrOmit(beforeValue);

		if (word == null) {
			return;
		}

		// 大文字毎に単語として扱うため
		// 大文字の前にスペースを挿入
		const upperSpaceWord = utils.insertSpaceBeforeUpperCase(word);

		// 連続した数字の前にスペースを挿入
		const numberSpaceWord =
			utils.insertSpaceBothSideAtNumbers(upperSpaceWord);

		// スペース区切りで配列変換
		this.workWords = numberSpaceWord
			.split(/\s+/)
			.map((value) => value.toLocaleLowerCase());
	}

	convertAdditionalConversion(value: string) {
		if (this.additionalConverter == null) {
			return value;
		}

		return this.additionalConverter.convert(value);
	}

	convertAlphabet(value: string) {
		return this.characterToKanaConverter.convert(value);
	}

	convertEnglishWord(value: string) {
		// // カナに変換できるか確認
		// // 英字が無ければ変換できたと判定し返却
		// const testKana = this.romaToKanaConverter.convert(value);
		// if (utils.hasAlphabet(testKana) === false) {
		// 	return testKana;
		// }

		// 変換対象をローマ字に変換
		const roma = this.wordToRomaConverter.convert(value);

		// ローマ字をカナに変換
		const incompleteKana = this.romaToKanaConverter.convert(roma);

		// 変換できなかった文字を文字単位でカナ変換
		return this.characterToKanaConverter.convert(incompleteKana);
	}

	convertNumber(value: string) {
		return this.numberToKanaConverter.convert(value);
	}

	convertNoun(value: string) {
		return this.nounToKanaConverter.convert(value);
	}

	/**
	 * メイン関数
	 */
	convert() {
		// 追加辞書で変換し、英文字が無ければ返却
		const additionalValue = this.convertAdditionalConversion(
			this.beforeWord
		);
		if (utils.hasAlphabet(additionalValue) === false) {
			return additionalValue;
		}

		// 準備
		this.createWorkWords(additionalValue);

		this.afterWord = this.workWords.map((value) => {
			// 名詞に変換
			value = this.convertNoun(value);
			if (utils.hasAlphabet(value) === false) {
				return value;
			}

			if (this.isConvertNumbers === true) {
				// 数字の場合
				if (new RegExp("\\d+").test(value) === true) {
					return this.convertNumber(value);
				}
			}

			// 1文字の場合はアルファベット読みをする
			if (value.length === 1) {
				return this.convertAlphabet(value);
			}

			// 上記以外(英単語)
			return this.convertEnglishWord(value);
		});

		return this.afterWord.join("");
	}
}
