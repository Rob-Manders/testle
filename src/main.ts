import './style.css'
import { TestleUI } from './ui'

const ui = new TestleUI(document.getElementById('app')!)

ui.onInput(() => {
	console.log('Event triggered...')
})
