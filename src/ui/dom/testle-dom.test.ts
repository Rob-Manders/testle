import {describe, expect, test, vi} from 'vitest'
import * as constants from '../constants.ts'
import {TestleDOM} from "./testle-dom.ts"
import {MessageType, Status} from "../types.ts";

test('Initialise the DOM', () => {
    const wrapper = document.createElement('div')
    const testleDom = new TestleDOM(wrapper)

    testleDom.initialise(() => {
    }, () => {
    })

    expect(wrapper.classList.contains(constants.CLASSNAME_WRAPPER)).to.equal(true)
    expect(wrapper.children.item(0).classList.contains(constants.CLASSNAME_GUESSES)).to.equal(true)
    expect(wrapper.children.item(1).classList.contains(constants.CLASSNAME_FORM_WRAPPER)).to.equal(true)
})

describe('Testle DOM - Guesses', () => {
	test('Update Guesses', () => {
		const wrapper = document.createElement('div')
		const testleDom = new TestleDOM(wrapper)

		testleDom.initialise(() => {
		}, () => {
		})

		const guesses = [
			[{letter: 'T', status: Status.Correct}],
		]

		testleDom.updateGuesses(guesses)

		const hasGuess = wrapper
			.children.item(0)
			.children.item(0)
			.classList.contains(constants.CLASSNAME_GUESS)

		expect(hasGuess).to.equal(true)
	})

	test('Reset Guesses', () => {
		const wrapper = document.createElement('div')
		const testleDom = new TestleDOM(wrapper)

		testleDom.initialise(() => {
		}, () => {
		})

		const guesses = [
			[{letter: 'T', status: Status.Correct}],
		]

		testleDom.updateGuesses(guesses)
		testleDom.resetGuesses()

		expect(wrapper.children.item(0)?.children.length).to.equal(0)
	})

})

describe('Testle DOM - Message', () => {
    test('Error', () => {
        const wrapper = document.createElement('div')
        const testleDom = new TestleDOM(wrapper)

        testleDom.initialise(() => {}, () => {})

        const message = "Test Message"

        testleDom.setMessage(message, MessageType.Error)

        expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE)).to.equal(true)
		expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE_ERROR)).to.equal(true)
        expect(wrapper.children.item(3).textContent.trim()).to.equal(message)
    })

	test('Warning', () => {
		const wrapper = document.createElement('div')
		const testleDom = new TestleDOM(wrapper)

		testleDom.initialise(() => {}, () => {})

		const message = "Test Message"

		testleDom.setMessage(message, MessageType.Error)

		expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE)).to.equal(true)
		expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE_WARNING)).to.equal(true)
		expect(wrapper.children.item(3).textContent.trim()).to.equal(message)
	})

	test('Success', () => {
		const wrapper = document.createElement('div')
		const testleDom = new TestleDOM(wrapper)

		testleDom.initialise(() => {}, () => {})

		const message = "Test Message"

		testleDom.setMessage(message, MessageType.Error)

		expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE)).to.equal(true)
		expect(wrapper.children.item(3).classList.contains(constants.CLASSNAME_MESSAGE_SUCCESS)).to.equal(true)
		expect(wrapper.children.item(3).textContent.trim()).to.equal(message)
	})
})
