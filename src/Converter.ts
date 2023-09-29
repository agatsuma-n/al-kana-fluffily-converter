import {
	WordToRomaConverter,
	RomaToKanaConverter,
	CharacterToKanaConverter,
} from "./converters";
import { WordDelimiter } from "./types";
import * as utils from "./utils";

export class Converter {
	beforeWord: string;
	workWords: string[];
	afterWord: string[];

	wordToRomaConverter = new WordToRomaConverter();
	romaToKanaConverter = new RomaToKanaConverter();
	characterToKanaConverter = new CharacterToKanaConverter();

	constructor(word: string) {
		this.beforeWord = word;
		this.workWords = [];
		this.afterWord = [];
	}

	createWorkWords() {
		// 記号を変換
		const word = utils.replaceSymbolToSpaceOrOmit(this.beforeWord);

		if (word == null) {
			return;
		}

		// 大文字毎に単語として扱うため
		// 大文字の前にスペースを挿入
		const spaceWord = utils.insertSpaceBeforeUpperCase(word);

		// スペース区切りで配列変換
		this.workWords = spaceWord
			.split(WordDelimiter)
			.map((value) => value.toLocaleLowerCase());
	}

	convertWordToRoma(value: string) {
		return this.wordToRomaConverter.convert(value);
	}

	convertRomaToKana(value: string) {
		return this.romaToKanaConverter.convert(value);
	}

	convertCharacter(value: string) {
		return this.characterToKanaConverter.convert(value);
	}

	/**
	 * メイン関数
	 */
	convert() {
		// 準備
		this.createWorkWords();

		this.workWords.forEach((value) => {
			let kana = "";

			if (value.length === 1) {
				// 1文字の場合はアルファベット読みをする
				kana = this.convertCharacter(value);
			} else {
				// TODO: わざわざローマ字に変換せずにいきなりカナに変換した方がよいのでは？
				// 変換対象をローマ字に変換
				const roma = this.convertWordToRoma(value);

				// ローマ字をカナに変換
				const incompleteKana = this.convertRomaToKana(roma);

				// 変換できなかった文字を文字単位でカナ変換
				kana = this.convertCharacter(incompleteKana);
			}

			this.afterWord.push(kana);
		});

		return this.afterWord.join("");
	}
}
