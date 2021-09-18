import { toTitle } from './toTitle'

export const selectCaseText = (fontCase: string, text: string): string => {
	switch (fontCase) {
		case 'upper':
			return text.toUpperCase()
		case 'lower':
			return text.toLowerCase()
		case 'title':
			return toTitle(text)
		default:
			return text
	}
}
