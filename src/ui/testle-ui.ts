import {Callback, Guess} from "./types"
import {TestleDOM} from './testle-dom.ts'

export default class TestleUI {
	private inputCallback: Callback = () => {}
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
		this.dom.updateGuesses([])
	}

	public updateGuesses(guesses: Guess[]): void {
		this.dom.updateGuesses(guesses)
	}

	private handleInput(callback: Callback) {
		// Handle user input...

		callback()
	}
}
