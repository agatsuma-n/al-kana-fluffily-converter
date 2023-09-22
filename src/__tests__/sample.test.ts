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
			{ english: "pit", kana: "ピット" },
			{ english: "pet", kana: "ペット" },
			{ english: "ham", kana: "ハム" },
			// {english: "cap", kana: "キャップ",},
			{ english: "mug", kana: "マグ" },
			// {english: "monkey", kana: "モンキー",},
			// {english: "front", kana: "フロント",},
			// {english: "London", kana: "ロンドン",},
			// {english: "socks", kana: "ソックス",},
			// {english: "book", kana: "ブック",},
			// {english: "about", kana: "アバウト",},
			// {english: "pilot", kana: "パイロット",},
			// {english: "London", kana: "ロンドン",},
			// {english: "carrier", kana: "キャリアー",},
			// {english: "hamburger", kana: "ハンバーガー",},
			// {english: "car", kana: "カー",},
			// {english: "shield", kana: "シールド",},
			// {english: "horse", kana: "ホース",},
			// {english: "door", kana: "ドア",},
			// {english: "bird", kana: "バード",},
			// {english: "shoe", kana: "シュー",},
			// {english: "cube", kana: "キューブ",},
			// {english: "day", kana: "デイ",},
			// {english: "my", kana: "マイ",},
			// {english: "boy", kana: "ボーイ",},
			// {english: "toy", kana: "トイ",},
			// {english: "phone", kana: "フォン",},
			// {english: "no", kana: "ノー",},
			// {english: "now", kana: "ナウ",},
			// {english: "pierce", kana: "ピアス",},
			// {english: "hair", kana: "ヘア",},
			// {english: "tour", kana: "ツアー",},
			// {english: "think", kana: "シンク",},
			// {english: "the", kana: "ザ",},
			// {english: "right", kana: "ライト",},
			// {english: "link", kana: "リンク",},
			// {english: "singer", kana: "シンガー",},
			// {english: "Washington", kana: "ワシントン",},
			// {english: "surfing", kana: "サーフィン",},
			// {english: "sink", kana: "シンク",},
			// {english: "love", kana: "ラブ",},
			// {english: "visual", kana: "ヴィジュアル",},
			// {english: "win", kana: "ウィン",},
			// {english: "fight", kana: "ファイト",},
			// {english: "Disney", kana: "ディズニー",},
			// {english: "Tourette's syndrome", kana: "トゥレットシンドローム",},
			// {english: "two", kana: "ツー",},
			// {english: "goods", kana: "グッズ",},
			// {english: "kids", kana: "キッズ",},
		];

		words.forEach((word) => {
			const result = fluffy.convert(word.english);
			expect(result).toBe(word.kana);
			console.log(result);
		});
	});
});
