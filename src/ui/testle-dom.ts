import './styles/style.scss'

export class TestleDOM {
  private wrapper: HTMLElement

  public inputBox: HTMLInputElement = document.createElement('input')
  public button: HTMLButtonElement = document.createElement('button')

  constructor(wrapper: HTMLElement) {
    this.wrapper = wrapper
  }

  public initialise(): void {
    this.wrapper.classList.add('testle-dom__wrapper')

    this.inputBox.classList.add('testle-dom__input')
    this.button.classList.add('testle-dom__button')

    this.wrapper.appendChild(this.inputBox)
    this.wrapper.appendChild(this.button)
  }
}