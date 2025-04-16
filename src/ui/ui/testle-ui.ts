import {Callback, Guess, InputCallback} from "../types.ts"
import {TestleDOM} from '../dom/testle-dom.ts'

export default class TestleUI {
	private inputCallback: InputCallback = () => {}
	private resetCallback: Callback = () => {}

	private dom: TestleDOM

	constructor(wrapper: HTMLElement) {
		this.dom = new TestleDOM(wrapper)
		this.dom.initialise(
			() => this.handleInput(this.inputCallback),
			() => this.resetCallback(),
		)
	}

	public onInput(callback: Callback) {
		this.inputCallback = callback
	}

	public onReset(callback: Callback) {
		this.resetCallback = callback
	}

	public reset() {
		this.dom.resetGuesses()
	}

	public updateGuesses(guesses: Guess[]): void {
		this.dom.updateGuesses(guesses)
	}

	private handleInput(callback: InputCallback) {
		const input = this.dom.getInputValue()

		callback(input)
	}
}
