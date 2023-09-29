export const VowelCharacter = "aiueo";

/**
 * 母音
 */
export const Vowel = `[${VowelCharacter}]`;

/**
 * 子音
 */
export const Consonant = `[b-df-hj-mp-tv-z]`;

export const BaseRomaPattern = `(${Consonant}{1,2})?(${Vowel}{1})`;

export const NPattern = `ny?${Vowel}{1}|n`;

/**
 * ローマ字パターン
 * - 子音0～2と母音 a、ki、hyaなど
 * - n、n行、ny行 ん、na、nyaなど
 * - \- のばす音（例：トーク）
 */
export const RomaPattern = `(${BaseRomaPattern})|(${NPattern})|(?<long>\-)`;

export const WordDelimiter = " ";

export const AlphabetPattern = `[a-z]`;
