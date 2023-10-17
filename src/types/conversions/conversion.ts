export interface Pattern {
	main: string;
	prefix?: string;
	suffix?: string;
}

export interface WordConversion {
	conversionPattern: Pattern;
	afterConversion: string;
}

export interface SimpleConversion {
	/**
	 * 変換前の単語
	 */
	word: string;

	/**
	 * 変換後のカナ
	 */
	kana: string;
}
