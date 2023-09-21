import {
	WordToRomaConverter,
	RomaToKanaConverter,
	CharacterToKanaConverter,
} from "./converters";
import { WordDelimiter } from "./types";

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
		// TODO: 記号をスペースに変換
		// const word = utils.replaceSymbolToSpace(this.beforeWord);
		const word = this.beforeWord;

		if (word == null) {
			return;
		}

		// スペース区切りで配列変換
		this.workWords = word.split(WordDelimiter);
		// this.workWords = words?.flatMap((word) => word.split(" "));
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
			// 変換対象をローマ字に変換
			const roma = this.convertWordToRoma(value);

			// ローマ字をカナに変換
			const incompleteKana = this.convertRomaToKana(roma);

			// 変換できなかった文字を文字単位でカナ変換
			const kana = this.convertCharacter(incompleteKana);

			this.afterWord.push(kana);
		});

		return this.afterWord.join(WordDelimiter);
	}

	/**
	 * TODO 不要そう
	 * 変換完了判定
	 * @returns 変換完了ならtrue
	 */
	isComplete() {
		return this.workWords == null || this.workWords.length === 0;
	}
}
