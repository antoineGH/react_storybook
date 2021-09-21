import './gradientButton.css'
import { GradientButtonType } from './GradientButtonType'

export const GradientButton = ({ text }: GradientButtonType) => {
	return (
		<>
			<button className='gradient-btn'>{text}</button>
		</>
	)
}
