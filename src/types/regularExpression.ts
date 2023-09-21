/**
 * 母音
 */
export const VowelCharacter = "aiueo";

export const Vowel = `[${VowelCharacter}]`;
/**
 * 子音
 */

export const Consonant = `[b-df-hj-np-tv-z]`;

export const BaseRomaPattern = `(${Consonant}{1,2})?(${Vowel}{1})`;

/**
 * ローマ字パターン
 * - 子音1～2（存在なし許容）と母音 a、ki、hyaなど
 * - n ん
 * - \- のばす音（例：トーク）
 */
export const RomaPattern = `(${BaseRomaPattern})|n|(?<long>\-)`;

export const WordDelimiter = " ";
