import * as converters from "./converters";
import * as utils from "./utils";

export class Converter {
	beforeWord: string;
	workWords: string[];
	afterWord: string[];
	isConvertNumbers: boolean;

	wordToRomaConverter = new converters.WordToRomaConverter();
	romaToKanaConverter = new converters.RomaToKanaConverter();
	characterToKanaConverter = new converters.CharacterToKanaConverter();
	numberToKanaConverter = new converters.NumberToKanaConverter();

	constructor(word: string, isConvertNumbers: boolean) {
		this.beforeWord = word;
		this.workWords = [];
		this.afterWord = [];
		this.isConvertNumbers = isConvertNumbers;
	}

	createWorkWords() {
		// 記号を変換
		const word = utils.replaceSymbolToSpaceOrOmit(this.beforeWord);

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

	convertAlphabet(value: string) {
		return this.characterToKanaConverter.convert(value);
	}

	convertEnglishWord(value: string) {
		// // カナに変換
		// // 全て変換できた場合、入力文字列はローマ字と見なす
		// const kana = this.romaToKanaConverter.convert(value);
		// if (new RegExp("[a-z]+").test(kana) === false) {
		// 	return kana;
		// }

		// TODO: わざわざローマ字に変換せずにいきなりカナに変換した方がよいのでは？
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

	/**
	 * メイン関数
	 */
	convert() {
		// 準備
		this.createWorkWords();

		this.afterWord = this.workWords.map((value) => {
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
