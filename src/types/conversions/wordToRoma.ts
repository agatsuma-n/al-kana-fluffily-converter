import { WordConversion } from ".";
import { Consonant, Vowel } from "../wordPattern";

export const WordToRomaConversions: WordConversion[] = [
	{
		conversionPattern: { prefix: `${Vowel}`, main: `t`, suffix: `$` },
		afterConversion: `tto`,
	},
	{
		conversionPattern: { main: `m`, suffix: `$` },
		afterConversion: `mu`,
	},
	{
		conversionPattern: { prefix: `${Vowel}`, main: `p`, suffix: `$` },
		afterConversion: `ppu`,
	},
	{
		conversionPattern: { main: "cu", suffix: "p" },
		afterConversion: "ka",
	},
	{ conversionPattern: { main: `c`, suffix: `[ao]` }, afterConversion: `k` },
	{ conversionPattern: { main: "ca", suffix: "p" }, afterConversion: "kya" },
	{
		conversionPattern: { main: `ar`, suffix: `[^aiueo]|$` },
		afterConversion: `a-`,
	},
	{ conversionPattern: { main: "cau" }, afterConversion: "kou" },
	{ conversionPattern: { main: "tio" }, afterConversion: "sho" },
	{
		conversionPattern: {
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
	{
		conversionPattern: { main: `ie`, suffix: `(l.)|$` },
		afterConversion: `i-`,
	},
	{
		conversionPattern: { main: `l`, suffix: `[^aiueo]|$` },
		afterConversion: `ru`,
	},
	{ conversionPattern: { main: `lu` }, afterConversion: `ra` },
	{ conversionPattern: { main: `le`, suffix: `$` }, afterConversion: `ru` },
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
		conversionPattern: { main: `d`, suffix: `${Consonant}|$` },
		afterConversion: `do`,
	},
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
		conversionPattern: { prefix: `[nrs\-]`, main: `t` },
		afterConversion: `to`,
	},
	{ conversionPattern: { main: "lo" }, afterConversion: "ro" },
	{ conversionPattern: { main: "ck" }, afterConversion: "kku" },
	{
		conversionPattern: {
			prefix: `[^r\-]`,
			main: `s`,
			suffix: `[^aiueohy]|$`,
		},
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
		conversionPattern: {
			prefix: `.[r(ll)s]?`,
			main: `y`,
			suffix: `${Consonant}|$`,
		},
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
	{
		conversionPattern: { prefix: `.+`, main: `al`, suffix: `$` },
		afterConversion: `aru`,
	},
	{ conversionPattern: { main: `two` }, afterConversion: `tu-` },
	{ conversionPattern: { main: `ds`, suffix: `$` }, afterConversion: `zu` },
	{
		conversionPattern: { main: `ids`, suffix: `$` },
		afterConversion: `iッズ`,
	},
	{
		conversionPattern: { prefix: `.`, main: `oo`, suffix: `[dk]` },
		afterConversion: `uッ`,
	},
	{
		conversionPattern: { main: `oo`, suffix: `[^dk]|$` },
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
		conversionPattern: { main: `x`, suffix: `[^aiueo]|$` },
		afterConversion: `ックス`,
	},
	{ conversionPattern: { prefix: `.`, main: `xa` }, afterConversion: `kusa` },
	{ conversionPattern: { main: `hn`, suffix: `$` }, afterConversion: `n` },
	{ conversionPattern: { main: `ber` }, afterConversion: `ba-` },
	{
		conversionPattern: { main: `twe`, suffix: `[ln]` },
		afterConversion: `twue`,
	},
	{ conversionPattern: { main: `tee` }, afterConversion: `ティ-` },
	{ conversionPattern: { prefix: `a`, main: `h` }, afterConversion: `` },
	{ conversionPattern: { main: `ew` }, afterConversion: `yu-` },
	{
		conversionPattern: { prefix: ``, main: `w`, suffix: `${Consonant}|$` },
		afterConversion: `u`,
	},
	{ conversionPattern: { main: `tthew` }, afterConversion: `syu-` },
	{ conversionPattern: { main: `chl` }, afterConversion: `kur` },
	{ conversionPattern: { main: `chlo` }, afterConversion: `クロ` },
	{ conversionPattern: { main: `chri` }, afterConversion: `クリ` },
	{
		conversionPattern: { prefix: `.`, main: `sh`, suffix: `$` },
		afterConversion: `ッsyu`,
	},
	{
		conversionPattern: { prefix: `.`, main: `sh`, suffix: `${Consonant}` },
		afterConversion: `syu`,
	},
	{ conversionPattern: { main: `tte` }, afterConversion: `tto` },
	{
		conversionPattern: { main: `char`, suffix: `(lotte)|(lize)` },
		afterConversion: `sha-`,
	},
	{ conversionPattern: { main: `zha` }, afterConversion: `za` },
	{
		conversionPattern: { main: `tho`, suffix: `m[aiueo]` },
		afterConversion: `to-`,
	},
	{ conversionPattern: { main: `geor` }, afterConversion: `jo-` },
	{
		conversionPattern: {
			prefix: `.`,
			main: `ge`,
			suffix: `${Consonant}|$`,
		},
		afterConversion: `ji`,
	},
	{
		conversionPattern: { prefix: `.`, main: `gi`, suffix: `(a)|(na)` },
		afterConversion: `ji`,
	},
	{ conversionPattern: { main: `el` }, afterConversion: `eru` },
	{ conversionPattern: { main: `tty` }, afterConversion: `ティ` },
	{ conversionPattern: { main: `ffee` }, afterConversion: `フィ-` },
	{
		conversionPattern: { main: `tt`, suffix: `[lr]` },
		afterConversion: `to`,
	},
	{ conversionPattern: { main: `dge` }, afterConversion: `ッジ` },
	{
		conversionPattern: { main: `c`, suffix: `[^aiueohy]` },
		afterConversion: `ku`,
	},
	{
		conversionPattern: { main: `ti`, suffix: `[fv]` },
		afterConversion: `ティ`,
	},
	{
		conversionPattern: { main: `b`, suffix: `[^aiueohy]` },
		afterConversion: `ブ`,
	},
	{
		conversionPattern: { main: `ba`, suffix: `(by)|k` },
		afterConversion: `ベイ`,
	},
	{ conversionPattern: { main: `base` }, afterConversion: `ベ-ス` },
	{ conversionPattern: { main: `beau` }, afterConversion: `ビュ-` },
	{
		conversionPattern: { main: `bea`, suffix: `[^ur]` },
		afterConversion: `ビ-`,
	},
	{ conversionPattern: { main: `ze`, suffix: `$` }, afterConversion: `ズ` },
	{
		conversionPattern: { main: `ball`, suffix: `$` },
		afterConversion: `ボ-ル`,
	},
	{
		conversionPattern: { main: `s`, suffix: `[^aiueohys]` },
		afterConversion: `su`,
	},
	{
		conversionPattern: { main: `nu`, suffix: `[gdn]` },
		afterConversion: `ナ`,
	},
	{
		conversionPattern: { main: `ru`, suffix: `[gn]` },
		afterConversion: `ラ`,
	},
	{
		conversionPattern: { main: `st`, suffix: `${Consonant}|$` },
		afterConversion: `suto`,
	},
	{
		conversionPattern: { main: `p`, suffix: `[^aiueohyp]` },
		afterConversion: `pu`,
	},
	{ conversionPattern: { main: `ce`, suffix: `.` }, afterConversion: `se` },
	{ conversionPattern: { main: `ss` }, afterConversion: `su` },
	{ conversionPattern: { main: `tter` }, afterConversion: `ta-` },
	{
		conversionPattern: { main: `bu`, suffix: `[^i]` },
		afterConversion: `ba`,
	},
	{ conversionPattern: { main: `tti` }, afterConversion: `ッティ` },
];
