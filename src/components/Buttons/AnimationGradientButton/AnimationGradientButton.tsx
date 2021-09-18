import './animationGradientButton.css'
import { animationGradientButtonProps } from './AnimationGradientButtonType'
import { selectCaseText } from './utils/selectCaseText'

export const AnimationGradientButton = ({
	text,
	size,
	type,
	boxShadow,
	fontFamily,
	fontCase,
}: animationGradientButtonProps) => {
	text = selectCaseText(fontCase!, text)

	return (
		<>
			<button
				className={[
					'custom-btn',
					`btn-${size}`,
					type,
					boxShadow && 'btn-box-shadow',
					`font-${fontFamily}`,
				].join(' ')}>
				<span>{text}</span>
			</button>
		</>
	)
}
