type btnType =
	| 'btn-1'
	| 'btn-2'
	| 'btn-3'
	| 'btn-4'
	| 'btn-5'
	| 'btn-6'
	| 'btn-7'
	| 'btn-8'
	| 'btn-9'
	| 'btn-10'
	| 'btn-11'
	| 'btn-12'

type fontFamilyType = 'fira' | 'lato' | 'roboto'

export interface animationGradientButtonProps {
	text: string
	size?: 'small' | 'medium' | 'large'
	type?: btnType
	boxShadow?: boolean
	fontFamily?: fontFamilyType
	fontCase?: 'upper' | 'lower' | 'title'
}
