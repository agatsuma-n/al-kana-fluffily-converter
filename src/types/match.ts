export interface MatchResult {
	/**
	 * main以外も含めたマッチ箇所
	 * いらないような
	 * @deprecated
	 */
	// matchValue: string;
	// matchIndex: number;

	/**
	 * mainに限定したマッチ箇所
	 */
	value: string;
	startIndex: number;
	endIndex: number;

	/**
	 * 比較に使用したパターン
	 */
	pattern: string;

	/**
	 * 変換後の文字列
	 */
	afterConversion: string;
}
