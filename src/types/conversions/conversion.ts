export interface Pattern {
	main: string;
	prefix?: string;
	suffix?: string;
}

export interface WordConversion {
	conversionPattern: Pattern;
	afterConversion: string;
}

export interface WordPair {
	kana: string;
	alpha: string;
}

export interface Dictionary extends WordPair {}
