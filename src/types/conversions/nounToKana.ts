import { WordConversion } from "./conversion";

export const NounToKanaConversions: WordConversion[] = [
	{
		conversionPattern: {
			main: "eleven",
		},
		afterConversion: "イレブン",
	},
	{
		conversionPattern: {
			main: `nineteen`,
		},
		afterConversion: `ナインティーン`,
	},
];
