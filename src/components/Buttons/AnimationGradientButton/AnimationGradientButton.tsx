import './animationGradientButton.css'

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
	| 'btn-13'
	| 'btn-14'
	| 'btn-15'
	| 'btn-16'

interface animationGradientButtonProps {
	text: string
	size?: 'small' | 'medium' | 'large'
	type?: btnType
}

export const AnimationGradientButton = ({
	text,
	size,
	type,
}: animationGradientButtonProps) => {
	return (
		<>
			<button className={['custom-btn', `btn-${size}`, type].join(' ')}>
				<span>{text}</span>
			</button>
		</>
	)
}
