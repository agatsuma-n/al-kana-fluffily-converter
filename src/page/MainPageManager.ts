import { FluffyConverter } from "../FluffyConverter";
import { SimpleConversion } from "../types";
import * as utils from "../utils";

export class MainPageManager {
	getElement<T extends Element>(query: string): T {
		return utils.qsStrict<T>(document, query);
	}

	createLiByResult(word: string, kana: string) {
		console.log(`${word}: ${kana}`);

		const li = document.createElement("li");
		li.classList.add("row");

		const addPToLi = (value: string, colClass?: string) => {
			const pElement = document.createElement("p");
			pElement.classList.add(colClass ?? "col");
			pElement.classList.add("text-break");
			pElement.innerHTML = value;
			li.appendChild(pElement);
		};
		addPToLi(word, "col-3");
		addPToLi(kana, "col-7");

		return li;
	}

	getAdditionalConversions() {
		const additionalConversions = this.getElement<HTMLTextAreaElement>(
			"#additionalConversions"
		);

		const formatValues = additionalConversions.value
			.split("\n")
			.map((row) => row.split(",").map((value) => value.trim()));

		return formatValues
			.filter((columns) => {
				if (columns.length !== 2) {
					return false;
				}
				return columns.every((value) => value.length !== 0);
			})
			.map(
				(value) =>
					({
						word: value[0],
						kana: value[1],
					} as SimpleConversion)
			);
	}

	execConvert() {
		const isConvertNumbers =
			this.getElement<HTMLInputElement>("#isConvertNumbers");

		const converter = new FluffyConverter(
			isConvertNumbers.checked,
			this.getAdditionalConversions()
		);

		const convertList = this.getElement<HTMLUListElement>(".convert-list");
		convertList.innerHTML = "";

		const englishWords =
			this.getElement<HTMLTextAreaElement>("#englishWords");
		const words = englishWords.value.split("\n");

		words.forEach((word) => {
			const kana = converter.convert(word);
			convertList.appendChild(this.createLiByResult(word, kana));
		});
	}

	init() {
		const additionalConversions = this.getElement<HTMLTextAreaElement>(
			"#additionalConversions"
		);
		additionalConversions.placeholder = [
			"(例)",
			"test,テスト",
			"ww,ワラワラ",
		].join("\n");

		const execButton = this.getElement<HTMLButtonElement>("#execConvert");
		execButton.addEventListener("click", this.execConvert.bind(this));
	}
}
