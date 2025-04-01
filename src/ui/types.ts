export enum Status {
	Correct,
	Incorrect,
	NotInWord
}

export interface Letter {
	letter: string
	status: Status
}

export type Guess = Letter[]