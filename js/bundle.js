/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var alkana;
/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	/******/ var __webpack_modules__ = {
		/***/ "./src/Converter.ts":
			/*!**************************!*\
  !*** ./src/Converter.ts ***!
  \**************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.Converter = void 0;\nconst converters_1 = __webpack_require__(/*! ./converters */ "./src/converters/index.ts");\nconst types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");\nconst utils = __importStar(__webpack_require__(/*! ./utils */ "./src/utils/index.ts"));\nclass Converter {\n    constructor(word) {\n        this.wordToRomaConverter = new converters_1.WordToRomaConverter();\n        this.romaToKanaConverter = new converters_1.RomaToKanaConverter();\n        this.characterToKanaConverter = new converters_1.CharacterToKanaConverter();\n        this.beforeWord = word;\n        this.workWords = [];\n        this.afterWord = [];\n    }\n    createWorkWords() {\n        // 記号を変換\n        const word = utils.replaceSymbolToSpaceOrOmit(this.beforeWord);\n        if (word == null) {\n            return;\n        }\n        // 大文字毎に単語として扱うため\n        // 大文字の前にスペースを挿入\n        const spaceWord = utils.insertSpaceBeforeUpperCase(word);\n        // スペース区切りで配列変換\n        this.workWords = spaceWord\n            .split(types_1.WordDelimiter)\n            .map((value) => value.toLocaleLowerCase());\n    }\n    convertWordToRoma(value) {\n        return this.wordToRomaConverter.convert(value);\n    }\n    convertRomaToKana(value) {\n        return this.romaToKanaConverter.convert(value);\n    }\n    convertCharacter(value) {\n        return this.characterToKanaConverter.convert(value);\n    }\n    /**\n     * メイン関数\n     */\n    convert() {\n        // 準備\n        this.createWorkWords();\n        this.workWords.forEach((value) => {\n            let kana = "";\n            if (value.length === 1) {\n                // 1文字の場合はアルファベット読みをする\n                kana = this.convertCharacter(value);\n            }\n            else {\n                // TODO: わざわざローマ字に変換せずにいきなりカナに変換した方がよいのでは？\n                // 変換対象をローマ字に変換\n                const roma = this.convertWordToRoma(value);\n                // ローマ字をカナに変換\n                const incompleteKana = this.convertRomaToKana(roma);\n                // 変換できなかった文字を文字単位でカナ変換\n                kana = this.convertCharacter(incompleteKana);\n            }\n            this.afterWord.push(kana);\n        });\n        return this.afterWord.join("");\n    }\n}\nexports.Converter = Converter;\n\n\n//# sourceURL=webpack://alkana/./src/Converter.ts?'
				);

				/***/
			},

		/***/ "./src/FluffyConverter.ts":
			/*!********************************!*\
  !*** ./src/FluffyConverter.ts ***!
  \********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.FluffyConverter = void 0;\nconst Converter_1 = __webpack_require__(/*! ./Converter */ "./src/Converter.ts");\n/**\n * NGワード対策無し\n */\nclass FluffyConverter {\n    /**\n     *\n     * @param originalDictionary 未実装。渡された辞書をもとに優先的に変換する\n     */\n    constructor(originalDictionary) {\n        this.originalDictionary = originalDictionary;\n    }\n    /**\n     * メインとなる関数\n     * @param word\n     * @returns\n     */\n    convert(word) {\n        // TODO: converterチェック\n        // 重複が存在しないか確認する\n        // 変換\n        const converter = new Converter_1.Converter(word);\n        return converter.convert();\n    }\n}\nexports.FluffyConverter = FluffyConverter;\n\n\n//# sourceURL=webpack://alkana/./src/FluffyConverter.ts?'
				);

				/***/
			},

		/***/ "./src/converters/BaseConverter.ts":
			/*!*****************************************!*\
  !*** ./src/converters/BaseConverter.ts ***!
  \*****************************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.BaseConverter = void 0;\nclass BaseConverter {\n    constructor() {\n        this.convertedWord = "";\n    }\n    /**\n     * 名前付きグループ化して返却する\n     * @param pattern\n     * @returns\n     */\n    createPattern(pattern) {\n        const grouping = (name, value) => `(?<${name}>${value !== null && value !== void 0 ? value : ""})`;\n        return `${grouping("prefix", pattern.prefix)}${grouping("main", pattern.main)}${grouping("suffix", pattern.suffix)}`;\n    }\n    appendConvertedWord(value) {\n        this.convertedWord = `${this.convertedWord}${value}`;\n    }\n    /**\n     * この関数を上書きして実装する\n     * TODO: 本当に必要か再検討\n     * @param word\n     * @returns\n     */\n    convert(word) {\n        this.convertedWord = "";\n        return this.convertedWord;\n    }\n}\nexports.BaseConverter = BaseConverter;\n\n\n//# sourceURL=webpack://alkana/./src/converters/BaseConverter.ts?'
				);

				/***/
			},

		/***/ "./src/converters/CharacterToKanaConverter.ts":
			/*!****************************************************!*\
  !*** ./src/converters/CharacterToKanaConverter.ts ***!
  \****************************************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.CharacterToKanaConverter = void 0;\nconst _1 = __webpack_require__(/*! . */ "./src/converters/index.ts");\nconst types = __importStar(__webpack_require__(/*! ../types */ "./src/types/index.ts"));\n/**\n * 英文字をカナに変換する\n * TODO: 未実装\n */\nclass CharacterToKanaConverter extends _1.BaseConverter {\n    get conversions() {\n        return types.CharacterToKanaConversions;\n    }\n    convert(word) {\n        super.convert(word);\n        this.convertedWord = word;\n        const regExp = new RegExp(types.AlphabetPattern, "ig");\n        let match = null;\n        while ((match = regExp.exec(word)) != null) {\n            // 変換範囲を抽出\n            const matchValue = match[0];\n            // 変換表から抽出\n            const conversion = this.conversions.find(({ conversionPattern }) => conversionPattern.main === matchValue);\n            if (conversion == null) {\n                continue;\n            }\n            this.convertedWord = this.convertedWord.replace(RegExp(matchValue, "ig"), `${conversion.afterConversion}`);\n        }\n        return this.convertedWord;\n    }\n}\nexports.CharacterToKanaConverter = CharacterToKanaConverter;\n\n\n//# sourceURL=webpack://alkana/./src/converters/CharacterToKanaConverter.ts?'
				);

				/***/
			},

		/***/ "./src/converters/RomaToKanaConverter.ts":
			/*!***********************************************!*\
  !*** ./src/converters/RomaToKanaConverter.ts ***!
  \***********************************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.RomaToKanaConverter = void 0;\nconst _1 = __webpack_require__(/*! . */ "./src/converters/index.ts");\nconst types = __importStar(__webpack_require__(/*! ../types */ "./src/types/index.ts"));\n/**\n * ローマ字からカナに変換する\n */\nclass RomaToKanaConverter extends _1.BaseConverter {\n    get conversions() {\n        return types.RomaToKanaConversions;\n    }\n    replaceSmallWord(value) {\n        // TODO: 「特定の文字が2つ」ではなく、「連続した同じ文字が複数」にしたい\n        const smallMatch = types.SmallConversions.find((conversion) => conversion.conversionPattern.main === value.substring(0, 2));\n        if (smallMatch == null) {\n            return value;\n        }\n        // 置換文字と結合\n        this.appendConvertedWord("ッ");\n        return value.substring(1);\n    }\n    findConversion(value) {\n        // 通常の比較\n        const conversion = this.conversions.find((conversion) => conversion.conversionPattern.main === value);\n        if (conversion != null) {\n            return conversion;\n        }\n        // kpiのような存在しないパターンが取得されている可能性がある\n        // 2文字目以降と比較\n        const sub1Conversion = this.conversions.find((conversion) => conversion.conversionPattern.main === value.substring(1));\n        // 1文字目を英字のまま追加\n        if (sub1Conversion != null) {\n            this.appendConvertedWord(value.substring(0, 1));\n        }\n        return sub1Conversion;\n    }\n    convert(word) {\n        super.convert(word);\n        let replaceStartIndex = 0;\n        const regExp = new RegExp(types.RomaPattern, "ig");\n        let match = null;\n        while ((match = regExp.exec(word)) != null) {\n            // マッチする以前の文字を結合\n            if (replaceStartIndex !== match.index) {\n                this.appendConvertedWord(word.substring(replaceStartIndex, match.index));\n            }\n            // 変換範囲を抽出\n            let replaceRange = match[0];\n            // 変換範囲を保存\n            replaceStartIndex += replaceRange.length;\n            // TODO: 小書き置換\n            replaceRange = this.replaceSmallWord(replaceRange);\n            // 置換\n            const conversion = this.findConversion(replaceRange);\n            // 結合\n            if (conversion == null) {\n                this.appendConvertedWord(replaceRange);\n            }\n            else {\n                this.appendConvertedWord(conversion.afterConversion);\n            }\n        }\n        // 残った文字を結合\n        this.appendConvertedWord(word.substring(replaceStartIndex));\n        return this.convertedWord;\n    }\n}\nexports.RomaToKanaConverter = RomaToKanaConverter;\n\n\n//# sourceURL=webpack://alkana/./src/converters/RomaToKanaConverter.ts?'
				);

				/***/
			},

		/***/ "./src/converters/WordToRomaConverter.ts":
			/*!***********************************************!*\
  !*** ./src/converters/WordToRomaConverter.ts ***!
  \***********************************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.WordToRomaConverter = void 0;\nconst _1 = __webpack_require__(/*! . */ "./src/converters/index.ts");\nconst types = __importStar(__webpack_require__(/*! ../types */ "./src/types/index.ts"));\nconst utils = __importStar(__webpack_require__(/*! ../utils */ "./src/utils/index.ts"));\n/**\n * 英単語をローマ字に変換する\n */\nclass WordToRomaConverter extends _1.BaseConverter {\n    get conversions() {\n        return types.WordToRomaConversions;\n    }\n    /**\n     * 全ての一致パターン取得\n     * @param word\n     * @returns\n     */\n    getAllMatch(word) {\n        const findConversion = this.conversions\n            .flatMap(({ conversionPattern, afterConversion }) => {\n            const pattern = this.createPattern(conversionPattern);\n            const matches = utils.matchAllAtIgnoreCase(pattern, word);\n            return [...matches].map((match) => {\n                var _a, _b, _c;\n                const mainPattern = match.groups.main;\n                const startIndex = ((_a = match.index) !== null && _a !== void 0 ? _a : 0) + ((_c = (_b = match.groups) === null || _b === void 0 ? void 0 : _b.prefix.length) !== null && _c !== void 0 ? _c : 0);\n                return {\n                    mainPattern,\n                    startIndex,\n                    endIndex: startIndex + mainPattern.length,\n                    pattern,\n                    afterConversion,\n                };\n            });\n        })\n            .filter(utils.nonNullable);\n        return findConversion.filter((a, index) => findConversion\n            .slice(index + 1)\n            .some((b) => a.pattern === b.pattern) === false);\n    }\n    sortByPriorityConversion(a, b) {\n        // indexが小さい\n        const diffIndex = a.startIndex - b.startIndex;\n        if (diffIndex !== 0) {\n            return diffIndex;\n        }\n        // 文字数が多い\n        return b.mainPattern.length - a.mainPattern.length;\n    }\n    replaceByMatchPattern(word, matches) {\n        this.convertedWord = word;\n        matches.forEach((conversion) => {\n            // 置換\n            // $1=prefix, $2=main, $3=suffix\n            this.convertedWord = this.convertedWord.replace(RegExp(conversion.pattern, "ig"), `$1${conversion.afterConversion}$3`);\n        });\n    }\n    // TODO: 削除\n    // replaceByMatchPattern(word: string, matches: types.MatchResult[]) {\n    // \tlet replaceStartIndex = 0;\n    // \tmatches.forEach((match) => {\n    // \t\t// 残りの文字列で再度マッチ確認\n    // \t\tconst result = utils.matchAllAtIgnoreCase(\n    // \t\t\tmatch.pattern,\n    // \t\t\tword.substring(replaceStartIndex)\n    // \t\t);\n    // \t\tif ([...result].length === 0) {\n    // \t\t\treturn;\n    // \t\t}\n    // \t\t// 変換範囲を抽出\n    // \t\tconst replaceRange = word.substring(\n    // \t\t\treplaceStartIndex,\n    // \t\t\treplaceStartIndex + match.endIndex\n    // \t\t);\n    // \t\treplaceStartIndex = replaceStartIndex + match.endIndex;\n    // \t\t// 置換\n    // \t\t// $1=prefix, $2=main, $3=suffix\n    // \t\tconst replaced = replaceRange.replace(\n    // \t\t\tRegExp(match.pattern),\n    // \t\t\t`$1${match.afterConversion}$3`\n    // \t\t);\n    // \t\t// 置換文字と結合\n    // \t\tthis.appendConvertedWord(replaced);\n    // \t});\n    // \tthis.appendConvertedWord(word.substring(replaceStartIndex));\n    // }\n    convert(word) {\n        super.convert(word);\n        // 全ての一致するパターン取得\n        const matches = this.getAllMatch(word);\n        // 変換優先順にソート\n        matches.sort(this.sortByPriorityConversion);\n        // 置換\n        this.replaceByMatchPattern(word, matches);\n        return this.convertedWord;\n    }\n}\nexports.WordToRomaConverter = WordToRomaConverter;\n\n\n//# sourceURL=webpack://alkana/./src/converters/WordToRomaConverter.ts?'
				);

				/***/
			},

		/***/ "./src/converters/index.ts":
			/*!*********************************!*\
  !*** ./src/converters/index.ts ***!
  \*********************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./BaseConverter */ "./src/converters/BaseConverter.ts"), exports);\n__exportStar(__webpack_require__(/*! ./WordToRomaConverter */ "./src/converters/WordToRomaConverter.ts"), exports);\n__exportStar(__webpack_require__(/*! ./CharacterToKanaConverter */ "./src/converters/CharacterToKanaConverter.ts"), exports);\n__exportStar(__webpack_require__(/*! ./RomaToKanaConverter */ "./src/converters/RomaToKanaConverter.ts"), exports);\n\n\n//# sourceURL=webpack://alkana/./src/converters/index.ts?'
				);

				/***/
			},

		/***/ "./src/page/MainPageManager.ts":
			/*!*************************************!*\
  !*** ./src/page/MainPageManager.ts ***!
  \*************************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.MainPageManager = void 0;\nconst FluffyConverter_1 = __webpack_require__(/*! ../FluffyConverter */ "./src/FluffyConverter.ts");\nconst utils = __importStar(__webpack_require__(/*! ../utils */ "./src/utils/index.ts"));\nclass MainPageManager {\n    execConvert() {\n        const convertList = utils.qsStrict(document, ".convert-list");\n        const inputWordsTextArea = utils.qsStrict(document, "#inputWords");\n        const converter = new FluffyConverter_1.FluffyConverter();\n        convertList.innerHTML = "";\n        const words = inputWordsTextArea.value.split("\\n");\n        words.forEach((word) => {\n            const kana = converter.convert(word);\n            console.log(`${word}: ${kana}`);\n            const li = document.createElement("li");\n            li.classList.add("row");\n            const addPToLi = (value) => {\n                const pElement = document.createElement("p");\n                pElement.classList.add("col");\n                pElement.innerHTML = value;\n                li.appendChild(pElement);\n            };\n            addPToLi(word);\n            addPToLi("→");\n            addPToLi(kana);\n            convertList.appendChild(li);\n        });\n    }\n    init() {\n        const execButton = utils.qsStrict(document, "#execConvert");\n        execButton.addEventListener("click", this.execConvert);\n    }\n}\nexports.MainPageManager = MainPageManager;\n\n\n//# sourceURL=webpack://alkana/./src/page/MainPageManager.ts?'
				);

				/***/
			},

		/***/ "./src/types/conversions/characterToKana.ts":
			/*!**************************************************!*\
  !*** ./src/types/conversions/characterToKana.ts ***!
  \**************************************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.CharacterToKanaConversions = void 0;\nexports.CharacterToKanaConversions = [\n    { conversionPattern: { main: "a" }, afterConversion: "エー" },\n    { conversionPattern: { main: "b" }, afterConversion: "ビー" },\n    { conversionPattern: { main: "c" }, afterConversion: "シー" },\n    { conversionPattern: { main: "d" }, afterConversion: "ディー" },\n    { conversionPattern: { main: "e" }, afterConversion: "イー" },\n    { conversionPattern: { main: "f" }, afterConversion: "エフ" },\n    { conversionPattern: { main: "g" }, afterConversion: "ジー" },\n    { conversionPattern: { main: "h" }, afterConversion: "エイチ" },\n    { conversionPattern: { main: "i" }, afterConversion: "アイ" },\n    { conversionPattern: { main: "j" }, afterConversion: "ジェイ" },\n    { conversionPattern: { main: "k" }, afterConversion: "ケー" },\n    { conversionPattern: { main: "l" }, afterConversion: "エル" },\n    { conversionPattern: { main: "m" }, afterConversion: "エム" },\n    { conversionPattern: { main: "n" }, afterConversion: "エヌ" },\n    { conversionPattern: { main: "o" }, afterConversion: "オー" },\n    { conversionPattern: { main: "p" }, afterConversion: "ピー" },\n    { conversionPattern: { main: "q" }, afterConversion: "キュー" },\n    { conversionPattern: { main: "r" }, afterConversion: "アール" },\n    { conversionPattern: { main: "s" }, afterConversion: "エス" },\n    { conversionPattern: { main: "t" }, afterConversion: "ティー" },\n    { conversionPattern: { main: "u" }, afterConversion: "ユー" },\n    { conversionPattern: { main: "v" }, afterConversion: "ヴイー" },\n    { conversionPattern: { main: "w" }, afterConversion: "ダブル" },\n    { conversionPattern: { main: "x" }, afterConversion: "エックス" },\n    { conversionPattern: { main: "y" }, afterConversion: "ワイ" },\n    { conversionPattern: { main: "z" }, afterConversion: "ゼット" },\n];\n\n\n//# sourceURL=webpack://alkana/./src/types/conversions/characterToKana.ts?'
				);

				/***/
			},

		/***/ "./src/types/conversions/conversion.ts":
			/*!*********************************************!*\
  !*** ./src/types/conversions/conversion.ts ***!
  \*********************************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n\n\n//# sourceURL=webpack://alkana/./src/types/conversions/conversion.ts?'
				);

				/***/
			},

		/***/ "./src/types/conversions/index.ts":
			/*!****************************************!*\
  !*** ./src/types/conversions/index.ts ***!
  \****************************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./conversion */ "./src/types/conversions/conversion.ts"), exports);\n__exportStar(__webpack_require__(/*! ./romaToKana */ "./src/types/conversions/romaToKana.ts"), exports);\n__exportStar(__webpack_require__(/*! ./wordToRoma */ "./src/types/conversions/wordToRoma.ts"), exports);\n__exportStar(__webpack_require__(/*! ./characterToKana */ "./src/types/conversions/characterToKana.ts"), exports);\n\n\n//# sourceURL=webpack://alkana/./src/types/conversions/index.ts?'
				);

				/***/
			},

		/***/ "./src/types/conversions/romaToKana.ts":
			/*!*********************************************!*\
  !*** ./src/types/conversions/romaToKana.ts ***!
  \*********************************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.SmallConversions = exports.RomaToKanaConversions = void 0;\nexports.RomaToKanaConversions = [\n    { conversionPattern: { main: "a" }, afterConversion: "ア" },\n    { conversionPattern: { main: "i" }, afterConversion: "イ" },\n    { conversionPattern: { main: "u" }, afterConversion: "ウ" },\n    { conversionPattern: { main: "e" }, afterConversion: "エ" },\n    { conversionPattern: { main: "o" }, afterConversion: "オ" },\n    { conversionPattern: { main: "ka" }, afterConversion: "カ" },\n    { conversionPattern: { main: "ki" }, afterConversion: "キ" },\n    { conversionPattern: { main: "ku" }, afterConversion: "ク" },\n    { conversionPattern: { main: "ke" }, afterConversion: "ケ" },\n    { conversionPattern: { main: "ko" }, afterConversion: "コ" },\n    { conversionPattern: { main: "sa" }, afterConversion: "サ" },\n    { conversionPattern: { main: "si" }, afterConversion: "シ" },\n    { conversionPattern: { main: "su" }, afterConversion: "ス" },\n    { conversionPattern: { main: "se" }, afterConversion: "セ" },\n    { conversionPattern: { main: "so" }, afterConversion: "ソ" },\n    { conversionPattern: { main: "ta" }, afterConversion: "タ" },\n    { conversionPattern: { main: "ti" }, afterConversion: "チ" },\n    { conversionPattern: { main: "tu" }, afterConversion: "ツ" },\n    { conversionPattern: { main: "te" }, afterConversion: "テ" },\n    { conversionPattern: { main: "to" }, afterConversion: "ト" },\n    { conversionPattern: { main: "na" }, afterConversion: "ナ" },\n    { conversionPattern: { main: "ni" }, afterConversion: "ニ" },\n    { conversionPattern: { main: "nu" }, afterConversion: "ヌ" },\n    { conversionPattern: { main: "ne" }, afterConversion: "ネ" },\n    { conversionPattern: { main: "no" }, afterConversion: "ノ" },\n    { conversionPattern: { main: "ha" }, afterConversion: "ハ" },\n    { conversionPattern: { main: "hi" }, afterConversion: "ヒ" },\n    { conversionPattern: { main: "hu" }, afterConversion: "フ" },\n    { conversionPattern: { main: "he" }, afterConversion: "ヘ" },\n    { conversionPattern: { main: "ho" }, afterConversion: "ホ" },\n    { conversionPattern: { main: "ma" }, afterConversion: "マ" },\n    { conversionPattern: { main: "mi" }, afterConversion: "ミ" },\n    { conversionPattern: { main: "mu" }, afterConversion: "ム" },\n    { conversionPattern: { main: "me" }, afterConversion: "メ" },\n    { conversionPattern: { main: "mo" }, afterConversion: "モ" },\n    { conversionPattern: { main: "ya" }, afterConversion: "ヤ" },\n    { conversionPattern: { main: "yu" }, afterConversion: "ユ" },\n    { conversionPattern: { main: "ye" }, afterConversion: "イェ" },\n    { conversionPattern: { main: "yo" }, afterConversion: "ヨ" },\n    { conversionPattern: { main: "ra" }, afterConversion: "ラ" },\n    { conversionPattern: { main: "ri" }, afterConversion: "リ" },\n    { conversionPattern: { main: "ru" }, afterConversion: "ル" },\n    { conversionPattern: { main: "re" }, afterConversion: "レ" },\n    { conversionPattern: { main: "ro" }, afterConversion: "ロ" },\n    { conversionPattern: { main: "wa" }, afterConversion: "ワ" },\n    { conversionPattern: { main: "wi" }, afterConversion: "ウィ" },\n    { conversionPattern: { main: "n" }, afterConversion: "ン" },\n    { conversionPattern: { main: "ga" }, afterConversion: "ガ" },\n    { conversionPattern: { main: "gi" }, afterConversion: "ギ" },\n    { conversionPattern: { main: "gu" }, afterConversion: "グ" },\n    { conversionPattern: { main: "ge" }, afterConversion: "ゲ" },\n    { conversionPattern: { main: "go" }, afterConversion: "ゴ" },\n    { conversionPattern: { main: "za" }, afterConversion: "ザ" },\n    { conversionPattern: { main: "zi" }, afterConversion: "ジ" },\n    { conversionPattern: { main: "zu" }, afterConversion: "ズ" },\n    { conversionPattern: { main: "ze" }, afterConversion: "ゼ" },\n    { conversionPattern: { main: "zo" }, afterConversion: "ゾ" },\n    { conversionPattern: { main: "da" }, afterConversion: "ダ" },\n    { conversionPattern: { main: "di" }, afterConversion: "ヂ" },\n    { conversionPattern: { main: "du" }, afterConversion: "ヅ" },\n    { conversionPattern: { main: "de" }, afterConversion: "デ" },\n    { conversionPattern: { main: "do" }, afterConversion: "ド" },\n    { conversionPattern: { main: "ba" }, afterConversion: "バ" },\n    { conversionPattern: { main: "bi" }, afterConversion: "ビ" },\n    { conversionPattern: { main: "bu" }, afterConversion: "ブ" },\n    { conversionPattern: { main: "be" }, afterConversion: "ベ" },\n    { conversionPattern: { main: "bo" }, afterConversion: "ボ" },\n    { conversionPattern: { main: "pa" }, afterConversion: "パ" },\n    { conversionPattern: { main: "pi" }, afterConversion: "ピ" },\n    { conversionPattern: { main: "pu" }, afterConversion: "プ" },\n    { conversionPattern: { main: "pe" }, afterConversion: "ペ" },\n    { conversionPattern: { main: "po" }, afterConversion: "ポ" },\n    { conversionPattern: { main: "fa" }, afterConversion: "ファ" },\n    { conversionPattern: { main: "fi" }, afterConversion: "フィ" },\n    { conversionPattern: { main: "fe" }, afterConversion: "フェ" },\n    { conversionPattern: { main: "fo" }, afterConversion: "フォ" },\n    { conversionPattern: { main: "kya" }, afterConversion: "キャ" },\n    { conversionPattern: { main: "kyu" }, afterConversion: "キュ" },\n    { conversionPattern: { main: "kyo" }, afterConversion: "キョ" },\n    { conversionPattern: { main: "sha" }, afterConversion: "シャ" },\n    { conversionPattern: { main: "shu" }, afterConversion: "シュ" },\n    { conversionPattern: { main: "sho" }, afterConversion: "ショ" },\n    { conversionPattern: { main: "cha" }, afterConversion: "チャ" },\n    { conversionPattern: { main: "chu" }, afterConversion: "チュ" },\n    { conversionPattern: { main: "cho" }, afterConversion: "チョ" },\n    { conversionPattern: { main: "nya" }, afterConversion: "ニャ" },\n    { conversionPattern: { main: "nyu" }, afterConversion: "ニュ" },\n    { conversionPattern: { main: "nyo" }, afterConversion: "ニョ" },\n    { conversionPattern: { main: "hya" }, afterConversion: "ヒャ" },\n    { conversionPattern: { main: "hyu" }, afterConversion: "ヒュ" },\n    { conversionPattern: { main: "hyo" }, afterConversion: "ヒョ" },\n    { conversionPattern: { main: "mya" }, afterConversion: "ミャ" },\n    { conversionPattern: { main: "myu" }, afterConversion: "ミュ" },\n    { conversionPattern: { main: "myo" }, afterConversion: "ミョ" },\n    { conversionPattern: { main: "rya" }, afterConversion: "リャ" },\n    { conversionPattern: { main: "ryu" }, afterConversion: "リュ" },\n    { conversionPattern: { main: "ryo" }, afterConversion: "リョ" },\n    { conversionPattern: { main: "gya" }, afterConversion: "ギャ" },\n    { conversionPattern: { main: "gyu" }, afterConversion: "ギュ" },\n    { conversionPattern: { main: "gyo" }, afterConversion: "ギョ" },\n    { conversionPattern: { main: "ja" }, afterConversion: "ジャ" },\n    { conversionPattern: { main: "ju" }, afterConversion: "ジュ" },\n    { conversionPattern: { main: "jo" }, afterConversion: "ジョ" },\n    { conversionPattern: { main: "dya" }, afterConversion: "ヂャ" },\n    { conversionPattern: { main: "dyu" }, afterConversion: "ヂュ" },\n    { conversionPattern: { main: "dyo" }, afterConversion: "ヂョ" },\n    { conversionPattern: { main: "bya" }, afterConversion: "ビャ" },\n    { conversionPattern: { main: "byu" }, afterConversion: "ビュ" },\n    { conversionPattern: { main: "byo" }, afterConversion: "ビョ" },\n    { conversionPattern: { main: "pya" }, afterConversion: "ピャ" },\n    { conversionPattern: { main: "pyu" }, afterConversion: "ピュ" },\n    { conversionPattern: { main: "pyo" }, afterConversion: "ピョ" },\n    { conversionPattern: { main: "va" }, afterConversion: "ヴァ" },\n    { conversionPattern: { main: `vi` }, afterConversion: `ヴィ` },\n    { conversionPattern: { main: `vo` }, afterConversion: `ヴォ` },\n    { conversionPattern: { main: "-" }, afterConversion: "ー" },\n    { conversionPattern: { main: `dhi` }, afterConversion: `ディ` },\n    { conversionPattern: { main: `dhu` }, afterConversion: `デュ` },\n    { conversionPattern: { main: `thi` }, afterConversion: `ティ` },\n    { conversionPattern: { main: `twu` }, afterConversion: `トゥ` },\n];\nexports.SmallConversions = [\n    {\n        conversionPattern: {\n            main: "tt",\n        },\n        afterConversion: "t",\n    },\n    {\n        conversionPattern: {\n            main: "pp",\n        },\n        afterConversion: "p",\n    },\n    {\n        conversionPattern: {\n            main: "kk",\n        },\n        afterConversion: "k",\n    },\n    {\n        conversionPattern: {\n            main: "zz",\n        },\n        afterConversion: "z",\n    },\n];\n\n\n//# sourceURL=webpack://alkana/./src/types/conversions/romaToKana.ts?'
				);

				/***/
			},

		/***/ "./src/types/conversions/wordToRoma.ts":
			/*!*********************************************!*\
  !*** ./src/types/conversions/wordToRoma.ts ***!
  \*********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.WordToRomaConversions = void 0;\nconst wordPattern_1 = __webpack_require__(/*! ../wordPattern */ "./src/types/wordPattern.ts");\nexports.WordToRomaConversions = [\n    {\n        conversionPattern: { prefix: wordPattern_1.Vowel, main: "t" },\n        afterConversion: "tto",\n    },\n    {\n        conversionPattern: { prefix: wordPattern_1.Vowel, main: "m" },\n        afterConversion: "mu",\n    },\n    {\n        conversionPattern: { prefix: wordPattern_1.Vowel, main: "p" },\n        afterConversion: "ppu",\n    },\n    {\n        conversionPattern: { main: "cu", suffix: "p" },\n        afterConversion: "ka",\n    },\n    { conversionPattern: { main: "c", suffix: "a" }, afterConversion: "k" },\n    { conversionPattern: { main: "ca", suffix: "p" }, afterConversion: "kya" },\n    { conversionPattern: { main: "ar" }, afterConversion: "a-" },\n    { conversionPattern: { main: "cau" }, afterConversion: "kou" },\n    { conversionPattern: { main: "tio" }, afterConversion: "sho" },\n    {\n        conversionPattern: { prefix: wordPattern_1.Vowel, main: "g" },\n        afterConversion: "gu",\n    },\n    { conversionPattern: { main: "mu" }, afterConversion: "ma" },\n    {\n        conversionPattern: {\n            prefix: wordPattern_1.Vowel,\n            main: "m",\n            suffix: "b",\n        },\n        afterConversion: "n",\n    },\n    { conversionPattern: { main: "ur" }, afterConversion: "a-" },\n    { conversionPattern: { main: "er" }, afterConversion: "a-" },\n    { conversionPattern: { main: `sh`, suffix: `[ie]` }, afterConversion: `s` },\n    { conversionPattern: { main: "ie" }, afterConversion: "i-" },\n    { conversionPattern: { main: "ld" }, afterConversion: "rudo" },\n    { conversionPattern: { main: "or" }, afterConversion: "o-" },\n    {\n        conversionPattern: {\n            prefix: `${wordPattern_1.Vowel}|[r\\-]`,\n            main: `se`,\n            suffix: `[^lp]?`,\n        },\n        afterConversion: `su`,\n    },\n    { conversionPattern: { main: "oor" }, afterConversion: "oa" },\n    { conversionPattern: { main: "ir" }, afterConversion: "a-" },\n    {\n        conversionPattern: { prefix: `${wordPattern_1.Consonant}|[\\-]`, main: "d" },\n        afterConversion: "do",\n    },\n    { conversionPattern: { main: "oe" }, afterConversion: "u-" },\n    { conversionPattern: { main: "cu" }, afterConversion: "kyu-" },\n    { conversionPattern: { prefix: `.+`, main: `be` }, afterConversion: `bu` },\n    {\n        conversionPattern: { prefix: wordPattern_1.Consonant, main: "ay" },\n        afterConversion: "ei",\n    },\n    { conversionPattern: { main: "my" }, afterConversion: "mai" },\n    { conversionPattern: { prefix: `b`, main: `oy` }, afterConversion: `o-i` },\n    {\n        conversionPattern: { main: `oy`, suffix: `${wordPattern_1.Consonant}?` },\n        afterConversion: `oi`,\n    },\n    { conversionPattern: { main: "ey" }, afterConversion: "i-" },\n    {\n        conversionPattern: { main: "f", suffix: wordPattern_1.Consonant },\n        afterConversion: "hu",\n    },\n    { conversionPattern: { prefix: "n", main: "t" }, afterConversion: "to" },\n    { conversionPattern: { main: "lo" }, afterConversion: "ro" },\n    { conversionPattern: { main: "ck" }, afterConversion: "kku" },\n    { conversionPattern: { main: "s", suffix: "$" }, afterConversion: "su" },\n    { conversionPattern: { prefix: wordPattern_1.Vowel, main: "k" }, afterConversion: "ku" },\n    // TODO: book -> bukkuにしたい\n    // {conversionPattern: {main: "oo",},afterConversion: "uッ",},\n    // TODO: 再変換しない対応が必要そう\n    // イメージ\n    // afterConversion: {\n    //\t\tmain: auto, isNotReconvert?: boolean\n    // }\n    // 現時点では他に該当するパターンが無いため、outをaウトにすることで対応する\n    { conversionPattern: { main: "out" }, afterConversion: "aウト" },\n    { conversionPattern: { main: `ph` }, afterConversion: `f` },\n    {\n        conversionPattern: { prefix: `.+`, main: `ph`, suffix: `^${wordPattern_1.Vowel}` },\n        afterConversion: `hu`,\n    },\n    {\n        conversionPattern: { prefix: `${wordPattern_1.Vowel}`, main: `ne`, suffix: `` },\n        afterConversion: `n`,\n    },\n    {\n        conversionPattern: { main: `no`, suffix: `[^nr]?` },\n        afterConversion: `no-`,\n    },\n    {\n        conversionPattern: { main: `not`, suffix: `${wordPattern_1.Consonant}?` },\n        afterConversion: `ノット`,\n    },\n    {\n        conversionPattern: { prefix: `${wordPattern_1.Vowel}|y`, main: `o`, suffix: `ne` },\n        afterConversion: `wa`,\n    },\n    {\n        conversionPattern: { prefix: `^`, main: `o`, suffix: `ne` },\n        afterConversion: `wa`,\n    },\n    { conversionPattern: { main: "am", suffix: "b" }, afterConversion: "an" },\n    { conversionPattern: { main: `dy` }, afterConversion: `dhi` },\n    { conversionPattern: { main: `ny` }, afterConversion: `ni` },\n    { conversionPattern: { main: `ty`, suffix: `` }, afterConversion: `thi` },\n    {\n        conversionPattern: { prefix: `[r(ll)s]?`, main: `y`, suffix: `` },\n        afterConversion: `i-`,\n    },\n    { conversionPattern: { main: `l{1,2}`, suffix: `` }, afterConversion: `r` },\n    { conversionPattern: { main: `know` }, afterConversion: `nou` },\n    { conversionPattern: { main: `kni` }, afterConversion: `nai` },\n    { conversionPattern: { main: `kni`, suffix: `tc` }, afterConversion: `ni` },\n    { conversionPattern: { main: `knee` }, afterConversion: `ni-` },\n    { conversionPattern: { main: `k`, suffix: `n` }, afterConversion: `n` },\n    { conversionPattern: { main: `knu` }, afterConversion: `na` },\n    {\n        conversionPattern: { prefix: `${wordPattern_1.Vowel}?`, main: `now` },\n        afterConversion: `nau`,\n    },\n    {\n        conversionPattern: { prefix: `(br)|c|(fl)|g`, main: `ow` },\n        afterConversion: `au`,\n    },\n    { conversionPattern: { main: `ow`, suffix: `` }, afterConversion: `ou` },\n    { conversionPattern: { main: `i[eo]r` }, afterConversion: `ia` },\n    {\n        conversionPattern: { prefix: `.+`, main: `ce`, suffix: `$` },\n        afterConversion: `su`,\n    },\n    { conversionPattern: { main: `air`, suffix: `` }, afterConversion: `ea` },\n    { conversionPattern: { main: `our` }, afterConversion: `awa-` },\n    { conversionPattern: { main: `tour` }, afterConversion: `tua-` },\n    { conversionPattern: { main: `th` }, afterConversion: `s` },\n    { conversionPattern: { main: `th`, suffix: `i` }, afterConversion: `s` },\n    { conversionPattern: { main: `th`, suffix: `e` }, afterConversion: `z` },\n    {\n        conversionPattern: { prefix: `.+`, main: `k`, suffix: `$` },\n        afterConversion: `ku`,\n    },\n    { conversionPattern: { main: `the`, suffix: `$` }, afterConversion: `za` },\n    { conversionPattern: { prefix: `.+`, main: `ght` }, afterConversion: `to` },\n    {\n        conversionPattern: {\n            prefix: `[^(th)(sh)wvk]`,\n            main: `i`,\n            suffix: `[^ten]`,\n        },\n        afterConversion: `ai`,\n    },\n    { conversionPattern: { main: `i`, suffix: `t` }, afterConversion: `i` },\n    { conversionPattern: { main: `love` }, afterConversion: `rabu` },\n    { conversionPattern: { main: `ve`, suffix: `$` }, afterConversion: `bu` },\n    { conversionPattern: { main: `vy` }, afterConversion: `vi-` },\n    { conversionPattern: { main: `ver` }, afterConversion: `ba-` },\n    {\n        conversionPattern: { prefix: `^`, main: `su`, suffix: `[nbr(pp)scml]` },\n        afterConversion: `sa`,\n    },\n    {\n        conversionPattern: { prefix: `(vi)|(ca)|u`, main: `su` },\n        afterConversion: `ju`,\n    },\n    { conversionPattern: { prefix: `^`, main: `al` }, afterConversion: `o-ru` },\n    {\n        conversionPattern: { prefix: `.+`, main: `al`, suffix: `$` },\n        afterConversion: `aru`,\n    },\n    { conversionPattern: { main: `tw` }, afterConversion: `twu` },\n    { conversionPattern: { main: `two` }, afterConversion: `tw-` },\n    { conversionPattern: { main: `ds`, suffix: `$` }, afterConversion: `zu` },\n    {\n        conversionPattern: { main: `ids`, suffix: `$` },\n        afterConversion: `izzu`,\n    },\n];\n\n\n//# sourceURL=webpack://alkana/./src/types/conversions/wordToRoma.ts?'
				);

				/***/
			},

		/***/ "./src/types/index.ts":
			/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./conversions */ "./src/types/conversions/index.ts"), exports);\n__exportStar(__webpack_require__(/*! ./wordPattern */ "./src/types/wordPattern.ts"), exports);\n__exportStar(__webpack_require__(/*! ./match */ "./src/types/match.ts"), exports);\n\n\n//# sourceURL=webpack://alkana/./src/types/index.ts?'
				);

				/***/
			},

		/***/ "./src/types/match.ts":
			/*!****************************!*\
  !*** ./src/types/match.ts ***!
  \****************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n\n\n//# sourceURL=webpack://alkana/./src/types/match.ts?'
				);

				/***/
			},

		/***/ "./src/types/wordPattern.ts":
			/*!**********************************!*\
  !*** ./src/types/wordPattern.ts ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.AlphabetPattern = exports.WordDelimiter = exports.RomaPattern = exports.NPattern = exports.BaseRomaPattern = exports.Consonant = exports.Vowel = exports.VowelCharacter = void 0;\nexports.VowelCharacter = "aiueo";\n/**\n * 母音\n */\nexports.Vowel = `[${exports.VowelCharacter}]`;\n/**\n * 子音\n */\nexports.Consonant = `[b-df-hj-mp-tv-z]`;\nexports.BaseRomaPattern = `(${exports.Consonant}{1,2})?(${exports.Vowel}{1})`;\nexports.NPattern = `ny?${exports.Vowel}{1}|n`;\n/**\n * ローマ字パターン\n * - 子音0～2と母音 a、ki、hyaなど\n * - n、n行、ny行 ん、na、nyaなど\n * - \\- のばす音（例：トーク）\n */\nexports.RomaPattern = `(${exports.BaseRomaPattern})|(${exports.NPattern})|(?<long>\\-)`;\nexports.WordDelimiter = " ";\nexports.AlphabetPattern = `[a-z]`;\n\n\n//# sourceURL=webpack://alkana/./src/types/wordPattern.ts?'
				);

				/***/
			},

		/***/ "./src/utils/htmlElement.ts":
			/*!**********************************!*\
  !*** ./src/utils/htmlElement.ts ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.qsStrict = void 0;\nfunction qsStrict(parent, query) {\n    const result = parent.querySelector(query);\n    if (result == null)\n        throw new Error(`${query}が見つかりません`);\n    return result;\n}\nexports.qsStrict = qsStrict;\n\n\n//# sourceURL=webpack://alkana/./src/utils/htmlElement.ts?'
				);

				/***/
			},

		/***/ "./src/utils/index.ts":
			/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
			/***/ function (
				__unused_webpack_module,
				exports,
				__webpack_require__
			) {
				eval(
					'\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.nonNullable = void 0;\n__exportStar(__webpack_require__(/*! ./regExp */ "./src/utils/regExp.ts"), exports);\n__exportStar(__webpack_require__(/*! ./htmlElement */ "./src/utils/htmlElement.ts"), exports);\nconst nonNullable = (value) => value != null;\nexports.nonNullable = nonNullable;\n\n\n//# sourceURL=webpack://alkana/./src/utils/index.ts?'
				);

				/***/
			},

		/***/ "./src/utils/regExp.ts":
			/*!*****************************!*\
  !*** ./src/utils/regExp.ts ***!
  \*****************************/
			/***/ (__unused_webpack_module, exports) => {
				eval(
					'\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.insertSpaceBeforeUpperCase = exports.replaceSymbolToSpaceOrOmit = exports.matchAllAtIgnoreCase = void 0;\nfunction matchAllAtIgnoreCase(pattern, value) {\n    // 大文字小文字区別しない\n    const reg = new RegExp(pattern, "ig");\n    return value.matchAll(reg);\n}\nexports.matchAllAtIgnoreCase = matchAllAtIgnoreCase;\nfunction replaceSymbolToSpaceOrOmit(value) {\n    // 除外\n    const omitValue = value.replace(new RegExp("\'", "g"), "");\n    // スペースに変換\n    return omitValue.replace(new RegExp("[!-/:-@[-`{-~]", "g"), " ");\n}\nexports.replaceSymbolToSpaceOrOmit = replaceSymbolToSpaceOrOmit;\nfunction insertSpaceBeforeUpperCase(value) {\n    const reg = new RegExp("([A-Z])", "g");\n    return value.replace(reg, " $1").trim();\n}\nexports.insertSpaceBeforeUpperCase = insertSpaceBeforeUpperCase;\n\n\n//# sourceURL=webpack://alkana/./src/utils/regExp.ts?'
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module is referenced by other modules so it can't be inlined
	/******/ var __webpack_exports__ = __webpack_require__(
		"./src/page/MainPageManager.ts"
	);
	/******/ alkana = __webpack_exports__;
	/******/
	/******/
})();
