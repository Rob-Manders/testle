import { Guess } from "./types"
import {TestleDOM} from './testle-dom.ts'

type Callback = () => void

export default class TestleUI {
	private eventCallback: Callback = () => {	}
	private dom: TestleDOM

	private guesses: Guess[] = []

	constructor(wrapper: HTMLElement) {
		this.dom = new TestleDOM(wrapper)
		this.dom.initialise()
	}

	public reset() {
		this.guesses = []
	}

	public updateGuesses(guesses: Guess[]): void {
		this.guesses = guesses
	}

	public onInput(callback: Callback) {
		this.eventCallback = callback

		const handler = () => {
			this.handleInput(this.eventCallback)
		}

		this.dom.button?.removeEventListener('click', handler)
		this.dom.button?.addEventListener('click', handler)
	}

	private handleInput(callback: Callback) {
		// Handle user input...

		console.log(this.guesses)

		callback()
	}
}
