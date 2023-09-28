import { FluffyConverter } from "..";

describe("converter", () => {
	it("カナ変換できること", () => {
		const fluffy = new FluffyConverter();

		expect(fluffy.convert("pit")).toBe("ピット");
		expect(fluffy.convert("pet")).toBe("ペット");
		expect(fluffy.convert("ham")).toBe("ハム");
		expect(fluffy.convert("cap")).toBe("キャップ");
		expect(fluffy.convert("mug")).toBe("マグ");
		expect(fluffy.convert("monkey")).toBe("モンキー");
		expect(fluffy.convert("front")).toBe("フロント");
		expect(fluffy.convert("London")).toBe("ロンドン");
		expect(fluffy.convert("socks")).toBe("ソックス");
		// expect(fluffy.convert("book")).toBe("ブック");
		expect(fluffy.convert("about")).toBe("アバウト");
		expect(fluffy.convert("pilot")).toBe("パイロット");
		// TODO: カ、キャのパターンが難解なため後回し
		// expect(fluffy.convert("carrier")).toBe("キャリアー");
		expect(fluffy.convert("hamburger")).toBe("ハンバーガー");
		expect(fluffy.convert("car")).toBe("カー");
		expect(fluffy.convert("shield")).toBe("シールド");
		expect(fluffy.convert("horse")).toBe("ホース");
		expect(fluffy.convert("door")).toBe("ドア");
		expect(fluffy.convert("bird")).toBe("バード");
		expect(fluffy.convert("shoe")).toBe("シュー");
		expect(fluffy.convert("cube")).toBe("キューブ");
		expect(fluffy.convert("day")).toBe("デイ");
		expect(fluffy.convert("my")).toBe("マイ");
		expect(fluffy.convert("boy")).toBe("ボーイ");
		expect(fluffy.convert("toy")).toBe("トイ");
		expect(fluffy.convert("phone")).toBe("フォン");
		expect(fluffy.convert("no")).toBe("ノー");
		expect(fluffy.convert("now")).toBe("ナウ");
		expect(fluffy.convert("pierce")).toBe("ピアス");
		expect(fluffy.convert("hair")).toBe("ヘア");
		expect(fluffy.convert("tour")).toBe("ツアー");
		expect(fluffy.convert("think")).toBe("シンク");
		expect(fluffy.convert("the")).toBe("ザ");
		expect(fluffy.convert("right")).toBe("ライト");
		expect(fluffy.convert("link")).toBe("リンク");
		expect(fluffy.convert("singer")).toBe("シンガー");
		// TODO: 日本語英語でもingのgを発語することが多い。以下はめずらしい例
		// expect(fluffy.convert("Washington")).toBe("ワシントン");
		// expect(fluffy.convert("surfing")).toBe("サーフィン");
		expect(fluffy.convert("sink")).toBe("シンク");
		expect(fluffy.convert("love")).toBe("ラブ");
		expect(fluffy.convert("visual")).toBe("ヴィジュアル");
		expect(fluffy.convert("win")).toBe("ウィン");
		expect(fluffy.convert("fight")).toBe("ファイト");
		expect(fluffy.convert("Disney")).toBe("ディズニー");
		expect(fluffy.convert("Tourette's syndrome")).toBe(
			"トゥレットシンドローム"
		);
		expect(fluffy.convert("two")).toBe("ツー");
		expect(fluffy.convert("goods")).toBe("グッズ");
		expect(fluffy.convert("kids")).toBe("キッズ");
	});
});
