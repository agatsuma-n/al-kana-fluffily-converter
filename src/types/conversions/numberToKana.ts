import { WordConversion } from "./conversion";

export const NumberToKanaConversions: WordConversion[] = [
	{ conversionPattern: { main: `1` }, afterConversion: `ワン` },
	{ conversionPattern: { main: `2` }, afterConversion: `ツー` },
	{ conversionPattern: { main: `3` }, afterConversion: `スリー` },
	{ conversionPattern: { main: `4` }, afterConversion: `フォー` },
	{ conversionPattern: { main: `5` }, afterConversion: `ファイブ` },
	{ conversionPattern: { main: `6` }, afterConversion: `シックス` },
	{ conversionPattern: { main: `7` }, afterConversion: `セブン` },
	{ conversionPattern: { main: `8` }, afterConversion: `エイト` },
	{ conversionPattern: { main: `9` }, afterConversion: `ナイン` },
	{ conversionPattern: { main: `10` }, afterConversion: `テン` },
	{ conversionPattern: { main: `11` }, afterConversion: `イレブン` },
	{ conversionPattern: { main: `12` }, afterConversion: `トゥエルブ` },
	{ conversionPattern: { main: `13` }, afterConversion: `サーティーン` },
	{ conversionPattern: { main: `14` }, afterConversion: `フォーティーン` },
	{ conversionPattern: { main: `15` }, afterConversion: `フィフティーン` },
	{ conversionPattern: { main: `16` }, afterConversion: `シックスティーン` },
	{ conversionPattern: { main: `17` }, afterConversion: `セブンティーン` },
	{ conversionPattern: { main: `18` }, afterConversion: `エイティーン` },
	{ conversionPattern: { main: `19` }, afterConversion: `ナインティーン` },
	{ conversionPattern: { main: `20` }, afterConversion: `トゥエンティ` },
	{ conversionPattern: { main: `30` }, afterConversion: `サーティ` },
	{ conversionPattern: { main: `40` }, afterConversion: `フォーティ` },
	{ conversionPattern: { main: `50` }, afterConversion: `フィフティ` },
	{ conversionPattern: { main: `60` }, afterConversion: `シックスティ` },
	{ conversionPattern: { main: `70` }, afterConversion: `セブンティ` },
	{ conversionPattern: { main: `80` }, afterConversion: `エイティ` },
	{ conversionPattern: { main: `90` }, afterConversion: `ナインティ` },
];

export const HundredKana = "ハンドレッド";
export const ThousandKana = "サウザンド";
export const HundredSeparator = "アンド";

export const MAXConvertDigit = 4;
