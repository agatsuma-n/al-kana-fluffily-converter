import { WordConversion } from ".";
import { Consonant, Vowel } from "../wordPattern";

export const WordToRomaConversions: WordConversion[] = [
	{
		conversionPattern: { prefix: Vowel, main: "t" },
		afterConversion: "tto",
	},
	{
		conversionPattern: { main: `m`, suffix: `$` },
		afterConversion: `mu`,
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
		conversionPattern: {
			prefix: `${Vowel}`,
			main: `g`,
			suffix: `${Consonant}|$`,
		},
		afterConversion: `gu`,
	},
	{ conversionPattern: { main: `mu`, suffix: `g` }, afterConversion: `ma` },
	{
		conversionPattern: {
			prefix: Vowel,
			main: "m",
			suffix: "b",
		},
		afterConversion: "n",
	},
	{
		conversionPattern: {
			prefix: `${Consonant}`,
			main: `ur`,
			suffix: `${Consonant}`,
		},
		afterConversion: `a-`,
	},
	{
		conversionPattern: { prefix: `[^z]`, main: `er` },
		afterConversion: `a-`,
	},
	{ conversionPattern: { main: `sh`, suffix: `[ie]` }, afterConversion: `s` },
	{ conversionPattern: { main: "ie" }, afterConversion: "i-" },
	{
		conversionPattern: { main: `l`, suffix: `[^aiueo]` },
		afterConversion: `ru`,
	},
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
	{ conversionPattern: { main: `d`, suffix: `$` }, afterConversion: `do` },
	{ conversionPattern: { main: "oe" }, afterConversion: "u-" },
	{ conversionPattern: { main: "cu" }, afterConversion: "kyu-" },
	{ conversionPattern: { prefix: `.+`, main: `be` }, afterConversion: `bu` },
	{
		conversionPattern: { prefix: Consonant, main: "ay" },
		afterConversion: "ei",
	},
	{ conversionPattern: { main: "my" }, afterConversion: "mai" },
	{ conversionPattern: { prefix: `b`, main: `oy` }, afterConversion: `o-i` },
	{
		conversionPattern: { main: `oy`, suffix: `${Consonant}?` },
		afterConversion: `oi`,
	},
	{ conversionPattern: { main: "ey" }, afterConversion: "i-" },
	{
		conversionPattern: { main: "f", suffix: Consonant },
		afterConversion: "hu",
	},
	{
		conversionPattern: { prefix: `[nr\-]`, main: `t` },
		afterConversion: `to`,
	},
	{ conversionPattern: { main: "lo" }, afterConversion: "ro" },
	{ conversionPattern: { main: "ck" }, afterConversion: "kku" },
	{
		conversionPattern: { prefix: `[^r\-]`, main: `s`, suffix: `$` },
		afterConversion: `su`,
	},
	{ conversionPattern: { prefix: Vowel, main: "k" }, afterConversion: "ku" },
	// TODO: 再変換しない対応が必要そう
	// イメージ
	// afterConversion: {
	//		main: auto, isNotReconvert?: boolean
	// }
	// 現時点では他に該当するパターンが無いため、outをaウトにすることで対応する
	{ conversionPattern: { main: "out" }, afterConversion: "aウト" },
	{ conversionPattern: { main: `ph` }, afterConversion: `f` },
	{
		conversionPattern: { prefix: `.+`, main: `ph`, suffix: `^${Vowel}` },
		afterConversion: `hu`,
	},
	{
		conversionPattern: { prefix: `${Vowel}`, main: `ne` },
		afterConversion: `n`,
	},
	{
		conversionPattern: { main: `no`, suffix: `[^nr]?` },
		afterConversion: `no-`,
	},
	{
		conversionPattern: { main: `not`, suffix: `${Consonant}?` },
		afterConversion: `ノット`,
	},
	{
		conversionPattern: { prefix: `${Vowel}|y`, main: `o`, suffix: `ne` },
		afterConversion: `wa`,
	},
	{
		conversionPattern: { prefix: `^`, main: `o`, suffix: `ne` },
		afterConversion: `wa`,
	},
	{ conversionPattern: { main: "am", suffix: "b." }, afterConversion: "an" },
	{ conversionPattern: { main: `dy` }, afterConversion: `dhi` },
	{ conversionPattern: { main: `ny` }, afterConversion: `ni` },
	{ conversionPattern: { main: `ty` }, afterConversion: `ティ` },
	{
		conversionPattern: { prefix: `.[r(ll)s]?`, main: `y` },
		afterConversion: `i-`,
	},
	{ conversionPattern: { main: `l{1,2}` }, afterConversion: `r` },
	{ conversionPattern: { main: `know` }, afterConversion: `nou` },
	{ conversionPattern: { main: `kni` }, afterConversion: `nai` },
	{ conversionPattern: { main: `kni`, suffix: `tc` }, afterConversion: `ni` },
	{ conversionPattern: { main: `knee` }, afterConversion: `ni-` },
	{ conversionPattern: { main: `k`, suffix: `n` }, afterConversion: `n` },
	{ conversionPattern: { main: `knu` }, afterConversion: `na` },
	{
		conversionPattern: { prefix: `${Vowel}?`, main: `now` },
		afterConversion: `nau`,
	},
	{
		conversionPattern: { prefix: `(br)|c|(fl)|g`, main: `ow` },
		afterConversion: `au`,
	},
	{ conversionPattern: { main: `ow` }, afterConversion: `ou` },
	{ conversionPattern: { main: `i[eo]r` }, afterConversion: `ia` },
	{
		conversionPattern: { prefix: `.+`, main: `ce`, suffix: `$` },
		afterConversion: `su`,
	},
	{ conversionPattern: { main: `air` }, afterConversion: `ea` },
	{
		conversionPattern: { prefix: `[^f]`, main: `our` },
		afterConversion: `awa-`,
	},
	{ conversionPattern: { main: `tour` }, afterConversion: `tua-` },
	{ conversionPattern: { main: `th` }, afterConversion: `su` },
	{ conversionPattern: { main: `thi` }, afterConversion: `si` },
	{ conversionPattern: { main: `th`, suffix: `e` }, afterConversion: `z` },
	{
		conversionPattern: { prefix: `.+`, main: `k`, suffix: `$` },
		afterConversion: `ku`,
	},
	{ conversionPattern: { main: `the`, suffix: `$` }, afterConversion: `za` },
	{
		conversionPattern: { prefix: `.+`, main: `ght`, suffix: `[^e]|$` },
		afterConversion: `to`,
	},
	{
		conversionPattern: { prefix: `.+`, main: `ght`, suffix: `e` },
		afterConversion: `t`,
	},
	{ conversionPattern: { main: `ine` }, afterConversion: `ain` },
	{
		conversionPattern: { prefix: `f`, main: `i`, suffix: `v` },
		afterConversion: `ai`,
	},
	{ conversionPattern: { main: `love` }, afterConversion: `rabu` },
	{ conversionPattern: { main: `ve`, suffix: `$` }, afterConversion: `bu` },
	{ conversionPattern: { main: `vy` }, afterConversion: `vi-` },
	{ conversionPattern: { main: `ver` }, afterConversion: `ba-` },
	{
		conversionPattern: { prefix: `^`, main: `su`, suffix: `[nbr(pp)scml]` },
		afterConversion: `sa`,
	},
	{
		conversionPattern: { prefix: `(vi)|(ca)|u`, main: `su` },
		afterConversion: `ju`,
	},
	{ conversionPattern: { prefix: `^`, main: `al` }, afterConversion: `o-ru` },
	{
		conversionPattern: { prefix: `.+`, main: `al`, suffix: `$` },
		afterConversion: `aru`,
	},
	{ conversionPattern: { main: `two` }, afterConversion: `tu-` },
	{ conversionPattern: { main: `ds`, suffix: `$` }, afterConversion: `zu` },
	{
		conversionPattern: { main: `ids`, suffix: `$` },
		afterConversion: `izzu`,
	},
	// 現時点で同様のパターンが無いため暫定対応する
	{ conversionPattern: { main: `oo`, suffix: `.` }, afterConversion: `uッ` },
	{
		conversionPattern: { prefix: `.`, main: `oo`, suffix: `$` },
		afterConversion: `u-`,
	},
	{ conversionPattern: { prefix: `.`, main: `ee` }, afterConversion: `i-` },
	{
		conversionPattern: { main: `tea`, suffix: `$` },
		afterConversion: `ティ-`,
	},
	{
		conversionPattern: { prefix: `f`, main: `i`, suffix: `[vgr]` },
		afterConversion: `ai`,
	},
	{
		conversionPattern: { prefix: `p`, main: `i`, suffix: `[^at]` },
		afterConversion: `ai`,
	},
	{
		conversionPattern: { prefix: `r`, main: `i`, suffix: `[ogtos]` },
		afterConversion: `ai`,
	},
	{
		conversionPattern: { prefix: `${Consonant}`, main: `ea` },
		afterConversion: `i-`,
	},
	{ conversionPattern: { main: `mb` }, afterConversion: `mu` },
	{ conversionPattern: { main: `ve`, suffix: `n.` }, afterConversion: `be` },
	{
		conversionPattern: { main: `seven`, suffix: `` },
		afterConversion: `sebun`,
	},
	{ conversionPattern: { main: `ger` }, afterConversion: `ja-` },
	{
		conversionPattern: { prefix: `[r\-]`, main: `s`, suffix: `$` },
		afterConversion: `zu`,
	},
	{ conversionPattern: { main: `burger` }, afterConversion: `ba-ga-` },
	{ conversionPattern: { main: `singer` }, afterConversion: `singa-` },
	{ conversionPattern: { prefix: `f`, main: `our` }, afterConversion: `o-` },
	{
		conversionPattern: { main: `x`, suffix: `[^aiueo]?` },
		afterConversion: `ックス`,
	},
	{ conversionPattern: { main: `hn`, suffix: `$` }, afterConversion: `n` },
	{ conversionPattern: { main: `ber` }, afterConversion: `ba-` },
	{
		conversionPattern: { main: `twe`, suffix: `[ln]` },
		afterConversion: `twue`,
	},
	{ conversionPattern: { main: `tee` }, afterConversion: `ティ-` },
];
