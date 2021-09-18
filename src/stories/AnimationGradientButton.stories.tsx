import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimationGradientButton } from '../components/Buttons/AnimationGradientButton/AnimationGradientButton'

export default {
	title: 'Buttons/AnimationGradientButton',
	component: AnimationGradientButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AnimationGradientButton>

const Template: ComponentStory<typeof AnimationGradientButton> = (args) => (
	<AnimationGradientButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	text: 'My Button',
	type: 'btn-1',
	size: 'medium',
}
