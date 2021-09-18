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
	| 'btn-12'

interface animationGradientButtonProps {
	text: string
	size?: 'small' | 'medium' | 'large'
	type?: btnType
	boxShadow?: boolean
}

export const AnimationGradientButton = ({
	text,
	size,
	type,
	boxShadow,
}: animationGradientButtonProps) => {
	console.log(boxShadow)
	return (
		<>
			<button
				className={[
					'custom-btn',
					`btn-${size}`,
					type,
					boxShadow && 'btn-box-shadow',
				].join(' ')}>
				<span>{text}</span>
			</button>
		</>
	)
}
