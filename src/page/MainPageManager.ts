import { FluffyConverter } from "../FluffyConverter";
import * as utils from "../utils";

export class MainPageManager {
	execConvert() {
		const convertList = utils.qsStrict<HTMLUListElement>(
			document,
			".convert-list"
		);
		const inputWordsTextArea = utils.qsStrict<HTMLTextAreaElement>(
			document,
			"#inputWords"
		);
		const isConvertNumbersCheckBox = utils.qsStrict<HTMLInputElement>(
			document,
			"#isConvertNumbers"
		);

		const converter = new FluffyConverter(isConvertNumbersCheckBox.checked);

		convertList.innerHTML = "";
		const words = inputWordsTextArea.value.split("\n");

		words.forEach((word) => {
			const kana = converter.convert(word);
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

			convertList.appendChild(li);
		});
	}

	init() {
		const execButton = utils.qsStrict<HTMLButtonElement>(
			document,
			"#execConvert"
		);
		execButton.addEventListener("click", this.execConvert);
	}
}
