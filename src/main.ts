import { FluffyConverter } from "./FluffyConverter";
import * as utils from "./utils";

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

		const converter = new FluffyConverter();

		convertList.innerHTML = "";
		const words = inputWordsTextArea.value.split("\n");

		words.forEach((word) => {
			const result = converter.convert(word);
			console.log(`${word}: ${result}`);
			const li = document.createElement("li");
			li.innerHTML = result;
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
