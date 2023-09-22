import { FluffyConverter } from "../";

describe("test", () => {
	it("sample", () => {
		const fluffy = new FluffyConverter();

		interface Word {
			english: string;
			kana: string;
		}
		const words: Word[] = [
			{
				english: "kitpit man",
				kana: "キットピット マン",
			},
			{
				english: "ham",
				kana: "ハム",
			},
			{
				english: "cup",
				kana: "カップ",
			},
			{
				english: "car",
				kana: "カー",
			},
			{
				english: "caution",
				kana: "コウション",
			},
			{
				english: "mug",
				kana: "マグ",
			},
		];

		words.forEach((word) => {
			const result = fluffy.convert(word.english);
			expect(result).toBe(word.kana);
			console.log(result);
		});
	});
});
