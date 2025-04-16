import { describe, expect, test, vi } from 'vitest'
import * as constants from '../constants.ts'
import {TestleDOM} from "./testle-dom.ts"
import {Status} from "../types.ts";

describe('Testle DOM', () => {
    test('Initialise the DOM', () => {
        const wrapper = document.createElement('div')
        const testleDom = new TestleDOM(wrapper)

        testleDom.initialise(() => {}, () => {})

        expect(wrapper.classList.contains(constants.CLASSNAME_WRAPPER)).to.equal(true)
        expect(wrapper.children.item(0).classList.contains(constants.CLASSNAME_GUESSES)).to.equal(true)
        expect(wrapper.children.item(1).classList.contains(constants.CLASSNAME_FORM_WRAPPER)).to.equal(true)
    })

    test('Update Guesses', () => {
        const wrapper = document.createElement('div')
        const testleDom = new TestleDOM(wrapper)

        testleDom.initialise(() => {}, () => {})

        const guesses = [
            [{ letter: 'T', status: Status.Correct }],
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

        testleDom.initialise(() => {}, () => {})

        const guesses = [
            [{ letter: 'T', status: Status.Correct }],
        ]

        testleDom.updateGuesses(guesses)
        testleDom.resetGuesses()

        expect(wrapper.children.item(0)?.children.length).to.equal(0)
    })
})
