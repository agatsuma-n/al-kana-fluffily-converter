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
	{ conversionPattern: { main: "sh" }, afterConversion: "s" },
	{ conversionPattern: { main: "ie" }, afterConversion: "i-" },
	{ conversionPattern: { main: "ld" }, afterConversion: "rudo" },
	{ conversionPattern: { main: "or" }, afterConversion: "o-" },
	{
		conversionPattern: { prefix: Consonant, main: "se" },
		afterConversion: "su",
	},
	{ conversionPattern: { main: "oor" }, afterConversion: "oa" },
	{ conversionPattern: { main: "ir" }, afterConversion: "a-" },
	{
		conversionPattern: { prefix: Consonant, main: "d" },
		afterConversion: "do",
	},
	{ conversionPattern: { main: "oe" }, afterConversion: "u-" },
	{ conversionPattern: { main: "cu" }, afterConversion: "kyu-" },
	{
		conversionPattern: { prefix: Consonant, main: "be" },
		afterConversion: "bu",
	},
	{
		conversionPattern: { prefix: Consonant, main: "ay" },
		afterConversion: "ei",
	},
	{ conversionPattern: { main: "my" }, afterConversion: "ai" },
	{ conversionPattern: { main: "oy" }, afterConversion: "o-i" },
];
