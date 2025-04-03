import './style.css'
import {TestleUI} from './ui'
import {Status} from "./ui/types.ts";

const ui = new TestleUI(document.getElementById('app')!)

ui.onInput(() => {
	console.log('Event triggered...')
})

ui.updateGuesses([
	[
		{ letter: 'T', status: Status.Correct },
		{ letter: 'E', status: Status.Incorrect },
		{ letter: 'S', status: Status.NotInWord },
		{ letter: 'T', status: Status.NotInWord }
	]
])
