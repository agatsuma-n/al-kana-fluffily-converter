import { WordConversion } from ".";
import { Consonant, Vowel } from "../wordPattern";

export const WordToRomaConversions: WordConversion[] = [
	{
		conversionPattern: { prefix: Vowel, main: "t" },
		afterConversion: "tto",
	},
	{
		conversionPattern: { prefix: Vowel, main: "m" },
		afterConversion: "mu",
	},
	{
		conversionPattern: { prefix: Vowel, main: "p" },
		afterConversion: "ppu",
	},
	{
		conversionPattern: { main: "cu", suffix: "p" },
		afterConversion: "ka",
	},
	{ conversionPattern: { main: "c", suffix: "a" }, afterConversion: "k" },
	{ conversionPattern: { main: "ca", suffix: "p" }, afterConversion: "kya" },
	{ conversionPattern: { main: "ar" }, afterConversion: "a-" },
	{ conversionPattern: { main: "cau" }, afterConversion: "kou" },
	{ conversionPattern: { main: "tio" }, afterConversion: "sho" },
	{
		conversionPattern: { prefix: Vowel, main: "g" },
		afterConversion: "gu",
	},
	{ conversionPattern: { main: "mu" }, afterConversion: "ma" },
	{
		conversionPattern: {
			prefix: Vowel,
			main: "m",
			suffix: "b",
		},
		afterConversion: "n",
	},
	{ conversionPattern: { main: "ur" }, afterConversion: "a-" },
	{ conversionPattern: { main: "er" }, afterConversion: "a-" },
	{ conversionPattern: { main: `sh`, suffix: `[ie]` }, afterConversion: `s` },
	{ conversionPattern: { main: "ie" }, afterConversion: "i-" },
	{ conversionPattern: { main: "ld" }, afterConversion: "rudo" },
	{ conversionPattern: { main: "or" }, afterConversion: "o-" },
	{
		conversionPattern: {
			prefix: `${Vowel}|[r\-]`,
			main: `se`,
			suffix: `[^lp]?`,
		},
		afterConversion: `su`,
	},
	{ conversionPattern: { main: "oor" }, afterConversion: "oa" },
	{ conversionPattern: { main: "ir" }, afterConversion: "a-" },
	{
		conversionPattern: { prefix: `${Consonant}|[\-]`, main: "d" },
		afterConversion: "do",
	},
	{ conversionPattern: { main: "oe" }, afterConversion: "u-" },
	{ conversionPattern: { main: "cu" }, afterConversion: "kyu-" },
	{ conversionPattern: { prefix: `.+`, main: `be` }, afterConversion: `bu` },
	{
		conversionPattern: { prefix: Consonant, main: "ay" },
		afterConversion: "ei",
	},
	{ conversionPattern: { main: "my" }, afterConversion: "ai" },
	{ conversionPattern: { main: "oy" }, afterConversion: "o-i" },
	{ conversionPattern: { main: "ey" }, afterConversion: "i-" },
	{
		conversionPattern: { main: "f", suffix: Consonant },
		afterConversion: "hu",
	},
	{ conversionPattern: { prefix: "n", main: "t" }, afterConversion: "to" },
	{ conversionPattern: { main: "lo" }, afterConversion: "ro" },
	{ conversionPattern: { main: "ck" }, afterConversion: "kku" },
	{ conversionPattern: { main: "s", suffix: "$" }, afterConversion: "su" },
	{ conversionPattern: { prefix: Vowel, main: "k" }, afterConversion: "ku" },
	// TODO: book -> bukkuにしたい
	// {conversionPattern: {main: "oo",},afterConversion: "uッ",},

	// TODO: 再変換しない対応が必要そう
	// イメージ
	// afterConversion: {
	//		main: auto, isNotReconvert?: boolean
	// }
	// 現時点では他に該当するパターンが無いため、outをaウトにすることで対応する
	{ conversionPattern: { main: "out" }, afterConversion: "aウト" },
	{
		conversionPattern: { main: "pi", suffix: "$|l" },
		afterConversion: "pai",
	},
	{ conversionPattern: { main: "am", suffix: "b" }, afterConversion: "an" },
];
