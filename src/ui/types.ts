export enum Status {
	Correct,
	Incorrect,
	NotInWord
}

export enum MessageType {
	Error,
	Warning,
	Success
}

export interface Letter {
	letter: string
	status: Status
}

export type Guess = Letter[]
export type Callback = () => void
export type InputCallback = (input: string) => void