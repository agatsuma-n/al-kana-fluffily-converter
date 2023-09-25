export interface MatchResult {
	/**
	 * mainに限定したマッチ箇所
	 */
	mainPattern: string;
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
