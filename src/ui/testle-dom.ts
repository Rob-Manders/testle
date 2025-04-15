import './styles/style.scss'
import {Callback, Guess, Status} from "./types.ts";
import * as constants from './constants.ts'

export class TestleDOM {
  private inputCallback: Callback
  private resetCallback: Callback

  private wrapper: HTMLElement
  public guesses: HTMLDivElement = document.createElement('div')

  constructor(wrapper: HTMLElement) {
    this.wrapper = wrapper
  }

  public initialise(inputCallback: Callback, resetCallback: Callback): void {
    this.inputCallback = inputCallback
    this.wrapper.classList.add(constants.CLASSNAME_WRAPPER)

    this.guesses.classList.add(constants.CLASSNAME_GUESSES)
    this.wrapper.appendChild(this.guesses)

    this.createForm()
  }

  public updateGuesses(guesses: Guess[]): void {
    this.resetGuesses()

    if (guesses.length === 0) {
      return
    }

    for (const guess of guesses) {
      this.addGuess(guess)
    }
  }

  public resetGuesses(): void {
    const guessElements = this.guesses.getElementsByClassName('testle-dom__guess')
    for (const el of guessElements) {
      this.guesses.removeChild(el)
    }
  }

  private addGuess(guess: Guess): void {
    const guessElement = document.createElement('div')
    guessElement.classList.add(constants.CLASSNAME_GUESS)

    for (const letter of guess) {
      const letterElement = document.createElement('span')
      letterElement.classList.add(constants.CLASSNAME_LETTER)

      switch (letter.status) {
        case Status.Correct:
          letterElement.classList.add(constants.CLASSNAME_LETTER_CORRECT)
          break
        case Status.Incorrect:
          letterElement.classList.add(constants.CLASSNAME_LETTER_INCORRECT)
          break
        case Status.NotInWord:
          letterElement.classList.add(constants.CLASSNAME_LETTER_NOTINWORD)
          break
      }

      letterElement.innerText = letter.letter

      guessElement.appendChild(letterElement)
    }

    this.guesses.appendChild(guessElement)
  }

  private createForm(): void {
    const input = document.createElement('input')
    input.classList.add(constants.CLASSNAME_INPUT)

    const submitButton = document.createElement('button')
    submitButton.id = 'submit-button'
    submitButton.classList.add(constants.CLASSNAME_BUTTON)
    submitButton.innerText = 'Submit'

    const form = document.createElement('form')
    form.classList.add(constants.CLASSNAME_FORM)
    form.appendChild(input)
    form.appendChild(submitButton)

    form.addEventListener('submit', (event: Event) => {
      event.preventDefault()
      this.inputCallback()
    })

    const resetButton = document.createElement('button')
    resetButton.id = 'reset-button'
    resetButton.classList.add(constants.CLASSNAME_BUTTON)
    resetButton.innerText = 'Reset'

    const formWrapper = document.createElement('div')
    formWrapper.classList.add(constants.CLASSNAME_FORM_WRAPPER)
    formWrapper.appendChild(form)
    formWrapper.appendChild(resetButton)

    this.wrapper.appendChild(formWrapper)
  }
}